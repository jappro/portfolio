/* ==========================================================
   FEATURED PROJECTS + TECH STACK — behavior
   The scroll-reveal IIFE from the original delivery was removed —
   it was a word-for-word duplicate of the .reveal/.in-view engine
   already in main.js, which already observes every .reveal element
   on the page (all section HTML is parsed before any <script> runs,
   since every script tag sits at the end of <body>). Nothing else
   here needed to change.
   ========================================================== */

/* ============ PROJECT CARD LINK MENUS ============
   Two triggers share this:
   - .proj-link-ic--repo (VincesLink): right-click on desktop,
     long-press on touch devices, opens a menu with "Visit
     Repository" / "Copy Repository Link". A plain tap/click still
     navigates normally via the element's own href — nothing here
     intercepts that.
   - .proj-link-ic--multi (Alfalf AI): a plain click opens a menu
     to choose between the GitHub repo and the Telegram bot, since
     there's no single default destination for it.
   Menu is a single shared floating element, positioned with
   position:fixed via JS so it always renders correctly regardless
   of the card sitting inside a scrolling row. */
(function(){
  var LONG_PRESS_MS = 550;
  var MOVE_CANCEL_PX = 10;

  var menuEl = null;
  var toastEl = null;
  var toastTimer = null;

  function ensureMenu(){
    if (menuEl) return menuEl;
    menuEl = document.createElement('div');
    menuEl.className = 'proj-float-menu';
    menuEl.setAttribute('role', 'menu');
    document.body.appendChild(menuEl);
    return menuEl;
  }

  function ensureToast(){
    if (toastEl) return toastEl;
    toastEl = document.createElement('div');
    toastEl.className = 'proj-toast';
    toastEl.setAttribute('role', 'status');
    document.body.appendChild(toastEl);
    return toastEl;
  }

  function closeMenu(){
    if (menuEl) menuEl.classList.remove('is-open');
  }

  function openMenu(x, y, items){
    var menu = ensureMenu();
    menu.innerHTML = '';
    items.forEach(function(item){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'proj-float-menu-item';
      btn.setAttribute('role', 'menuitem');
      btn.textContent = item.label;
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        closeMenu();
        item.onSelect();
      });
      menu.appendChild(btn);
    });

    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('is-open');

    requestAnimationFrame(function(){
      var rect = menu.getBoundingClientRect();
      var left = x, top = y;
      if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
      if (top + rect.height > window.innerHeight - 8) top = y - rect.height - 8;
      if (left < 8) left = 8;
      if (top < 8) top = 8;
      menu.style.left = left + 'px';
      menu.style.top = top + 'px';
    });
  }

  function showToast(message, x, y){
    var toast = ensureToast();
    toast.textContent = message;
    toast.style.left = x + 'px';
    toast.style.top = y + 'px';
    toast.classList.add('is-show');

    requestAnimationFrame(function(){
      var rect = toast.getBoundingClientRect();
      var left = x - rect.width / 2;
      var top = y - rect.height - 14;
      if (left < 8) left = 8;
      if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
      if (top < 8) top = y + 14;
      toast.style.left = left + 'px';
      toast.style.top = top + 'px';
    });

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove('is-show'); }, 1600);
  }

  function copyLink(url, x, y){
    function done(ok){ showToast(ok ? 'Link copied' : 'Could not copy link', x, y); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function(){ done(true); }, function(){ done(false); });
    } else {
      try {
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        done(true);
      } catch (err) { done(false); }
    }
  }

  document.addEventListener('click', function(e){
    if (menuEl && menuEl.classList.contains('is-open') && !menuEl.contains(e.target)) closeMenu();
  });
  document.addEventListener('scroll', closeMenu, true);
  window.addEventListener('resize', closeMenu);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });

  // ---- VincesLink repo icon: right-click (desktop) + long-press (touch) ----
  document.querySelectorAll('.proj-link-ic--repo').forEach(function(el){
    var repoUrl = el.getAttribute('data-repo-url');

    el.addEventListener('contextmenu', function(e){
      e.preventDefault();
      openMenu(e.clientX, e.clientY, [
        { label: 'Visit Repository', onSelect: function(){ window.open(repoUrl, '_blank', 'noopener'); } },
        { label: 'Copy Repository Link', onSelect: function(){ copyLink(repoUrl, e.clientX, e.clientY); } }
      ]);
    });

    var pressTimer = null, longPressed = false, startX = 0, startY = 0;

    el.addEventListener('touchstart', function(e){
      longPressed = false;
      var t = e.touches[0];
      startX = t.clientX; startY = t.clientY;
      pressTimer = setTimeout(function(){
        longPressed = true;
        openMenu(startX, startY, [
          { label: 'Visit Repository', onSelect: function(){ window.open(repoUrl, '_blank', 'noopener'); } },
          { label: 'Copy Repository Link', onSelect: function(){ copyLink(repoUrl, startX, startY); } }
        ]);
        if (navigator.vibrate) navigator.vibrate(10);
      }, LONG_PRESS_MS);
    }, { passive: true });

    el.addEventListener('touchmove', function(e){
      var t = e.touches[0];
      if (Math.abs(t.clientX - startX) > MOVE_CANCEL_PX || Math.abs(t.clientY - startY) > MOVE_CANCEL_PX) {
        clearTimeout(pressTimer);
      }
    }, { passive: true });

    el.addEventListener('touchend', function(e){
      clearTimeout(pressTimer);
      if (longPressed) {
        e.preventDefault(); // this was a long-press, not a tap — don't navigate
        e.stopPropagation();
      }
    });

    el.addEventListener('touchcancel', function(){ clearTimeout(pressTimer); });
  });

  // ---- Alfalf AI multi-link icon: plain click opens the choice ----
  document.querySelectorAll('.proj-link-ic--multi').forEach(function(el){
    var githubUrl = el.getAttribute('data-github-url');
    var telegramUrl = el.getAttribute('data-telegram-url');

    el.addEventListener('click', function(e){
      e.stopPropagation();
      var rect = el.getBoundingClientRect();
      openMenu(rect.left, rect.bottom + 8, [
        { label: 'GitHub Repo', onSelect: function(){ window.open(githubUrl, '_blank', 'noopener'); } },
        { label: 'Telegram Bot', onSelect: function(){ window.open(telegramUrl, '_blank', 'noopener'); } }
      ]);
    });
  });
})();

