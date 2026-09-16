/* ============================================================
   PROFESSIONAL PHILOSOPHY SECTION — SCRIPTS
   Three independent IIFEs, extracted in original document order:
   1) scroll-pin funnel (mobile only, <768px)
   2) cursor/finger hover-highlight tracking
   3) scroll-reveal (header stagger + card fade/rise/color-flash)
   Each is self-contained and does not depend on execution order,
   but the order is preserved from the original build regardless.
============================================================= */

(function(){
  var section = document.getElementById('ethos-body');
  if(!section) return;

  var cardsWrap = section.querySelector('.phil-body-cards');
  var cards = cardsWrap ? Array.prototype.slice.call(cardsWrap.querySelectorAll('.phil-card')) : [];
  var count = cards.length;
  if(count < 2) return;

  section.style.setProperty('--phil-card-count', count);

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ease = reduceMotion ? 1 : 0.15;
  /* scroll-pin funnel is mobile-only now — tablet (768-1023px) and
     desktop (1024px+) both use static, non-scrolling layouts */
  var funnelOffQuery = window.matchMedia ? window.matchMedia('(min-width: 768px)') : null;

  function isFunnelOff(){
    return !!(funnelOffQuery && funnelOffQuery.matches);
  }

  function clearTransforms(){
    for(var i = 0; i < count; i++){
      cards[i].style.transform = '';
    }
  }

  var targetProgress = 0;
  var currentProgress = 0;
  var rafId = null;

  function computeTarget(){
    var scrollable = section.offsetHeight - window.innerHeight;
    if(scrollable <= 0){ targetProgress = 0; return; }
    var rectTop = section.getBoundingClientRect().top;
    var scrolledIn = -rectTop;
    var clamped = Math.max(0, Math.min(scrolledIn, scrollable));
    targetProgress = (clamped / scrollable) * (count - 1);
  }

  function applyProgress(p){
    var vh = window.innerHeight;
    for(var i = 0; i < count; i++){
      var card = cards[i];
      if(i === 0){
        card.style.transform = 'translateY(0)';
        continue;
      }
      var local = p - (i - 1);
      if(local < 0) local = 0;
      if(local > 1) local = 1;
      var remaining = 1 - local;
      var slidePx = remaining * vh;
      card.style.transform = 'translateY(' + slidePx + 'px)';
    }
  }

  function tick(){
    if(isFunnelOff()){ rafId = null; return; }
    currentProgress += (targetProgress - currentProgress) * ease;
    if(Math.abs(targetProgress - currentProgress) < 0.0005){
      currentProgress = targetProgress;
      applyProgress(currentProgress);
      rafId = null;
      return;
    }
    applyProgress(currentProgress);
    rafId = requestAnimationFrame(tick);
  }

  function requestTick(){
    if(rafId === null){
      rafId = requestAnimationFrame(tick);
    }
  }

  function onScrollOrResize(){
    if(isFunnelOff()){
      clearTransforms();
      targetProgress = 0;
      currentProgress = 0;
      return;
    }
    computeTarget();
    requestTick();
  }

  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);

  if(isFunnelOff()){
    clearTransforms();
  } else {
    computeTarget();
    currentProgress = targetProgress;
    applyProgress(currentProgress);
  }
})();

(function(){
  /* ============================================================
     PROFESSIONAL PHILOSOPHY — card highlight under cursor/finger
     CSS :hover already covers a real mouse pointer resting over a
     card. It does NOT cover a finger sliding across the screen
     during a touch-scroll gesture — browsers never fire :hover for
     that. This tracks the actual pointer/finger position and toggles
     a class on whichever card is currently underneath it, mouse or
     touch, moving or still, click/press not required either way.
  ============================================================= */

  function getCards(){
    return Array.prototype.slice.call(document.querySelectorAll('.phil-card'));
  }

  function setActive(card){
    getCards().forEach(function(c){
      if(c !== card) c.classList.remove('phil-card--pointer-active');
    });
    if(card) card.classList.add('phil-card--pointer-active');
  }

  function highlightAt(x, y){
    var el = document.elementFromPoint(x, y);
    var card = el && el.closest ? el.closest('.phil-card') : null;
    setActive(card);
  }

  // mouse: continuous cursor position, no click needed
  window.addEventListener('pointermove', function(e){
    if(e.pointerType === 'mouse'){
      highlightAt(e.clientX, e.clientY);
    }
  }, { passive: true });

  // touch: finger position while dragging/scrolling across the screen
  window.addEventListener('touchmove', function(e){
    var t = e.touches && e.touches[0];
    if(t) highlightAt(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchstart', function(e){
    var t = e.touches && e.touches[0];
    if(t) highlightAt(t.clientX, t.clientY);
  }, { passive: true });

  window.addEventListener('touchend', function(){ setActive(null); }, { passive: true });
  window.addEventListener('touchcancel', function(){ setActive(null); }, { passive: true });
  document.addEventListener('mouseleave', function(){ setActive(null); }, { passive: true });
})();

(function(){
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var headerEls = Array.prototype.slice.call(
    document.querySelectorAll('#ethos .phil-eyebrow, #ethos .phil-heading, #ethos .phil-intro, #ethos .phil-divider')
  );
  var cardEls = Array.prototype.slice.call(document.querySelectorAll('#ethos-body .phil-card'));

  var headerDelay = { 'phil-eyebrow':0, 'phil-heading':90, 'phil-intro':180, 'phil-divider':270 };
  function delayFor(el){
    if(el.classList.contains('phil-card')){
      var idx = el.getAttribute('data-card-index');
      return (idx === '2' || idx === '5') ? 120 : 0; /* right-column card in its row arrives just after its left partner */
    }
    for(var key in headerDelay){
      if(el.classList.contains(key)) return headerDelay[key];
    }
    return 0;
  }

  var allEls = headerEls.concat(cardEls);
  allEls.forEach(function(el){ el.classList.add('phil-reveal'); });

  if(reduceMotion || !('IntersectionObserver' in window)){
    allEls.forEach(function(el){ el.classList.add('phil-reveal--visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      setTimeout(function(){
        el.classList.add('phil-reveal--visible');
        if(el.classList.contains('phil-card')){
          el.addEventListener('animationend', function onEnd(e){
            if(e.animationName === 'phil-rise-in'){
              el.classList.add('phil-reveal--done');
              el.removeEventListener('animationend', onEnd);
            }
          });
        }
      }, delayFor(el));
      observer.unobserve(el);
    });
  }, { threshold:0.2, rootMargin:'0px 0px -8% 0px' });

  allEls.forEach(function(el){ observer.observe(el); });
})();
