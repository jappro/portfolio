/* ---- Animated nav logo (typewriter / enlarge-sweep / erase) ---- */
// ============ ANIMATED NAV LOGO ============
// Sequence: type "@jappro" -> enlarge-sweep -> 1 blink -> swap the
// trailing "o" for "0" -> 2 blinks -> erase (no retype) ->
// type "Uche" -> 1 blink -> type " Japheth" -> enlarge-sweep that
// kills the cursor blink exactly as it reaches the final "h" ->
// stays static. Runs fresh on every page load/refresh, which is
// what makes it "repeat on revisit" with no extra loop needed.
// Shared across mobile and desktop — nav-brand is a single element,
// only nav-links/nav-cta are hidden on mobile, so this animation
// plays identically on every breakpoint.
(function(){
  const textEl = document.getElementById('logoText');
  const cursorEl = document.getElementById('logoCursor');
  if(!textEl || !cursorEl) return;

  const TYPE_SPEED = 95;    // ms between typed characters
  const BLINK_MS = 420;     // continuous-blink toggle interval
  const BLINK_HOLD = 220;   // ms per phase of an exact-count blink
  const ENLARGE_STEP = 85;  // ms between each letter starting its pop
  const ENLARGE_HOLD = 200; // ms the pop scale is held before falling back

  let blinkTimer = null;

  function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }
  function setCursorVisible(v){ cursorEl.style.opacity = v ? '1' : '0'; }

  function startContinuousBlink(){
    stopContinuousBlink();
    let visible = true;
    setCursorVisible(true);
    blinkTimer = setInterval(() => {
      visible = !visible;
      setCursorVisible(visible);
    }, BLINK_MS);
  }

  function stopContinuousBlink(){
    if(blinkTimer){ clearInterval(blinkTimer); blinkTimer = null; }
  }

  async function blinkExact(times){
    stopContinuousBlink();
    for(let i = 0; i < times; i++){
      setCursorVisible(false);
      await sleep(BLINK_HOLD);
      setCursorVisible(true);
      await sleep(BLINK_HOLD);
    }
  }

  function currentChars(){
    return Array.from(textEl.querySelectorAll('.logo-char'));
  }

  function appendChar(ch){
    const span = document.createElement('span');
    span.className = 'logo-char';
    // non-breaking space so a literal space still renders with
    // visible width and survives the browser's whitespace collapsing
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    textEl.appendChild(span);
    return span;
  }

  async function typeText(str){
    for(const ch of str){
      appendChar(ch);
      await sleep(TYPE_SPEED);
    }
  }

  async function deleteChars(count){
    for(let i = 0; i < count; i++){
      const chars = currentChars();
      const last = chars[chars.length - 1];
      if(last) last.remove();
      await sleep(TYPE_SPEED);
    }
  }

  async function eraseAll(){
    await deleteChars(currentChars().length);
  }

  // sweeps the enlarge pop across every current character, left to
  // right; stopBlinkOnLast lets the caller kill the cursor blink at
  // the exact moment the sweep reaches the final character
  async function enlargeSweep({ stopBlinkOnLast = false } = {}){
    const chars = currentChars();
    for(let i = 0; i < chars.length; i++){
      const span = chars[i];
      const isLast = i === chars.length - 1;
      if(isLast && stopBlinkOnLast){
        stopContinuousBlink();
      }
      span.classList.add('enlarge');
      setTimeout(() => span.classList.remove('enlarge'), ENLARGE_HOLD);
      await sleep(ENLARGE_STEP);
    }
    await sleep(ENLARGE_HOLD + 20); // let the final letter settle back
  }

  async function runSequence(){
    textEl.innerHTML = '';
    setCursorVisible(true);
    startContinuousBlink();

    // ---- TEXT 1: @jappro ----
    await typeText('@jappro');
    await enlargeSweep();

    await blinkExact(1);

    await deleteChars(1);        // drop the trailing "o"
    appendChar('0');             // -> @jappr0
    await sleep(TYPE_SPEED);

    await blinkExact(2);

    await eraseAll();            // type & erase — erase only, no retype

    await sleep(180);

    // ---- TEXT 2: Uche Japheth ----
    startContinuousBlink();
    await typeText('Uche');

    await blinkExact(1);

    startContinuousBlink();
    await typeText(' Japheth');

    // sweep across the whole phrase; blink stops the instant it
    // reaches the final "h" — then it stays static, permanently
    await enlargeSweep({ stopBlinkOnLast: true });
    setCursorVisible(false);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', runSequence);
  } else {
    runSequence();
  }
})();

// Mobile nav pill: hidden while at the hero top, fades in once scrolling begins
(function(){
  var nav = document.getElementById('siteNav');
  if (!nav) return;

  function isMobile(){
    return window.matchMedia('(max-width:960px)').matches;
  }

  function update(){
    if (!isMobile()) {
      nav.classList.remove('nav-hidden', 'nav-visible');
      return;
    }
    if (window.scrollY > 40) {
      nav.classList.add('nav-visible');
      nav.classList.remove('nav-hidden');
    } else {
      nav.classList.add('nav-hidden');
      nav.classList.remove('nav-visible');
    }
  }

  update();
  window.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update, { passive:true });
})();

// Mobile nav hamburger toggle (real button + the static-state duplicate
// that sits above the photo — both control the same drawer, kept in sync)
(function(){
  var btn = document.getElementById('navHamburger');
  var btnStatic = document.getElementById('navHamburgerStatic');
  var menu = document.getElementById('navMobileMenu');
  if (!btn || !menu) return;

  function setOpen(open){
    menu.classList.toggle('open', open);
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    if (btnStatic){
      btnStatic.classList.toggle('is-open', open);
      btnStatic.setAttribute('aria-expanded', open);
    }
  }

  btn.addEventListener('click', function(){
    setOpen(!menu.classList.contains('open'));
  });
  if (btnStatic){
    btnStatic.addEventListener('click', function(){
      setOpen(!menu.classList.contains('open'));
    });
  }
  menu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){ setOpen(false); });
  });
})();

// Nav scroll-spy (only observes sections that currently exist in the DOM)
(function(){
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  if (!navLinks.length) return;

  var sections = navLinks.map(function(link){
    var id = link.getAttribute('data-nav');
    var el = document.getElementById(id);
    return el ? { id: id, el: el, link: link } : null;
  }).filter(Boolean);

  if (!sections.length) return;

  function setActive(id){
    navLinks.forEach(function(link){
      link.classList.toggle('active', link.getAttribute('data-nav') === id);
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          var match = sections.find(function(s){ return s.el === entry.target; });
          if (match) setActive(match.id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function(s){ io.observe(s.el); });
  }

  setActive(sections[0].id);
})();

// Scroll reveal
(function(){
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  items.forEach(function(el){ io.observe(el); });
})();

