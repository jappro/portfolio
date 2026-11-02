/* Cinematic loader. Replaces the old loading-screen.js.
   First visit only (localStorage key: jappro-visited, same as the old loader). Add ?welcome to the URL to replay it. */
(function(){
  var root=document.getElementById('loadingScreen'); if(!root) return;
  var html=document.documentElement;
  if(html.classList.contains('ls-skip')){ if(root.parentNode) root.parentNode.removeChild(root); return; }
  html.classList.add('jx-cine-lock');

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) root.classList.add('is-quick');
  var CFG={ min: reduce?900:7000, firstSwap:2900, every:3000, swapMs:1100 };

  var lines=document.getElementById('jx-cine-lines'),
      A=lines.querySelector('.ls-line--1'), B=lines.querySelector('.ls-line--2'),
      flare=document.getElementById('jx-cine-flare'), fill=document.getElementById('jx-cine-fill'),
      num=document.getElementById('jx-cine-num'), tc=document.getElementById('jx-cine-tc');
  var loaded=document.readyState==='complete', t0=performance.now(), exiting=false;
  window.addEventListener('load',function(){loaded=true});
  setTimeout(function(){loaded=true},10000); /* safety net */

  function pad(n){return (n<10?'0':'')+n}

  /* the two lines trade places; the one moving up gets the highlight */
  function swap(){
    var ra=A.getBoundingClientRect(), rb=B.getBoundingClientRect();
    lines.classList.toggle('is-flipped');
    var na=A.getBoundingClientRect(), nb=B.getBoundingClientRect();
    [[A,ra.top-na.top],[B,rb.top-nb.top]].forEach(function(p){
      p[0].animate([{transform:'translateY('+p[1]+'px)',filter:'blur(0)'},{filter:'blur(5px)',offset:.5},{transform:'none',filter:'blur(0)'}],
        {duration:CFG.swapMs,easing:'cubic-bezier(.76,0,.18,1)'});
    });
    A.classList.toggle('is-hot'); B.classList.toggle('is-hot');
    shoot();
    flare.animate([{opacity:0,transform:'scaleX(.1)'},{opacity:1,offset:.45},{opacity:0,transform:'scaleX(1)'}],{duration:CFG.swapMs+500,easing:'ease-out'});
  }
  if(!reduce){ setTimeout(function(){ swap(); setInterval(function(){ if(!exiting) swap(); },CFG.every); },CFG.firstSwap); }

  /* starfield: depth layers drift and twinkle; a shooting star crosses on every swap */
  var cv=root.querySelector('.jx-cine-stars'), cx=cv&&cv.getContext&&cv.getContext('2d'), stars=[], shots=[], W=0, H=0, last=0,
      dpr=Math.min(window.devicePixelRatio||1,2), TINT=['#ffffff','#ffffff','#ffffff','#cfc4ff','#ffd9a8'];
  function sizeStars(){
    if(!cx) return;
    W=root.clientWidth; H=root.clientHeight; cv.width=W*dpr; cv.height=H*dpr; cx.setTransform(dpr,0,0,dpr,0,0);
    stars=[];
    for(var i=0,n=Math.round(W*H/5200);i<n;i++){
      var z=Math.pow(Math.random(),1.6);
      stars.push({x:Math.random()*W,y:Math.random()*H,z:z,r:.45+z*1.25,a:.3+z*.7,tw:Math.random()*6.28,sp:.8+Math.random()*2,c:TINT[(Math.random()*TINT.length)|0]});
    }
  }
  function shoot(){ if(!cx||reduce) return; shots.push({x:W*(.55+Math.random()*.4),y:H*(.08+Math.random()*.25),vx:-W*.7,vy:H*.35,life:0}); }
  function drawStars(now){
    if(!root.parentNode) return;
    var dt=Math.min((now-(last||now))/1000,.05); last=now;
    cx.clearRect(0,0,W,H);
    for(var i=0;i<stars.length;i++){
      var s=stars[i];
      if(!reduce){ s.x-=(2+s.z*14)*dt; if(s.x<-2) s.x=W+2; }
      var a=s.a*(reduce?1:.62+.38*Math.sin(s.tw+now/1000*s.sp));
      cx.fillStyle=s.c; cx.globalAlpha=a; cx.beginPath(); cx.arc(s.x,s.y,s.r,0,6.283); cx.fill();
      if(s.z>.88){ cx.globalAlpha=a*.18; cx.beginPath(); cx.arc(s.x,s.y,s.r*3.2,0,6.283); cx.fill(); }
    }
    for(var j=shots.length-1;j>=0;j--){
      var k=shots[j]; k.life+=dt/1.1;
      if(k.life>=1){ shots.splice(j,1); continue; }
      k.x+=k.vx*dt; k.y+=k.vy*dt;
      var tx=k.x-k.vx*.12, ty=k.y-k.vy*.12, g=cx.createLinearGradient(k.x,k.y,tx,ty);
      g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(1,'rgba(124,92,255,0)');
      cx.globalAlpha=Math.sin(Math.PI*k.life); cx.strokeStyle=g; cx.lineWidth=2; cx.lineCap='round';
      cx.beginPath(); cx.moveTo(k.x,k.y); cx.lineTo(tx,ty); cx.stroke();
    }
    cx.globalAlpha=1;
    if(!reduce) requestAnimationFrame(drawStars);
  }
  if(cx){
    sizeStars();
    window.addEventListener('resize',function(){ sizeStars(); if(reduce) requestAnimationFrame(drawStars); });
    requestAnimationFrame(drawStars);
  }

  function ease(p){ return p<.5 ? 2*p*p : 1-Math.pow(-2*p+2,2)/2; }
  function tick(now){
    var el=now-t0, p=Math.min(el/CFG.min,1), v=ease(p)*100;
    if(!loaded||el<CFG.min) v=Math.min(v,99);
    v=Math.floor(v);
    num.textContent=v; fill.style.width=v+'%';
    var f=Math.floor(el/1000*24);
    tc.textContent='00:'+pad(Math.floor(f/1440)%60)+':'+pad(Math.floor(f/24)%60)+':'+pad(f%24);
    if(loaded && el>=CFG.min){ num.textContent=100; fill.style.width='100%'; return finish(); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function finish(){
    if(exiting) return; exiting=true;
    var D=reduce?[0,60,260]:[450,1150,2500];
    root.classList.add('is-ready');
    try{localStorage.setItem('jappro-visited','1')}catch(e){}
    setTimeout(function(){ root.classList.add('is-exit'); },D[0]);
    setTimeout(function(){ root.classList.add('is-open'); },D[1]);
    setTimeout(function(){
      html.classList.remove('jx-cine-lock'); html.classList.add('jx-cine-done');
      if(root.parentNode) root.parentNode.removeChild(root);
      document.dispatchEvent(new CustomEvent('jx-cine:done'));
    },D[2]);
  }
})();
