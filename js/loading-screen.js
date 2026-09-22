/* ============================================================
   LOADING / WELCOME SCREEN — behavior
   Returning visitors never reach this: an inline script in
   index.html's <head> checks localStorage synchronously, before
   first paint, and adds html.ls-skip if they've been here before —
   loading-screen.css hides the overlay instantly for that case, no
   flash. This script only needs to handle the first-visit path.
============================================================= */
(function(){
  var STORAGE_KEY = 'jappro-visited';
  var screen = document.getElementById('loadingScreen');
  if(!screen) return;

  // Belt-and-braces: if html.ls-skip somehow ended up set after this
  // script was already queued to run, bail out immediately rather
  // than replaying the sequence.
  if(document.documentElement.classList.contains('ls-skip')){
    screen.style.display = 'none';
    return;
  }

  function markVisited(){
    try{ localStorage.setItem(STORAGE_KEY, '1'); } catch(e){}
  }

  function hideScreen(){
    screen.style.display = 'none';
    markVisited();
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(prefersReduced){
    // Deliver the message without the animated motion: show it
    // immediately (CSS's reduced-motion block renders .ls-active's
    // end state with no transition), hold briefly so it's still
    // readable, then remove without an animated exit.
    screen.classList.add('ls-active');
    window.setTimeout(hideScreen, 900);
    return;
  }

  // Full sequence: enter -> hold -> exit. requestAnimationFrame
  // ensures the browser has painted the screen's resting (opacity:0)
  // state at least once before .ls-active flips it, so the entrance
  // transition actually plays instead of the browser coalescing both
  // states into a single paint.
  requestAnimationFrame(function(){
    screen.classList.add('ls-active');
  });

  window.setTimeout(function(){
    screen.classList.add('ls-exit');
    window.setTimeout(hideScreen, 700); // matches .ls-screen's own exit transition duration
  }, 2600);
})();
