/* ---- Before/After dashboard toggle + full-bleed screenshot stack ---- */
(function(){
  var stack = document.getElementById('baStack');
  var buttons = document.querySelectorAll('.ba-btn');
  if (!stack || !buttons.length) return;
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var state = btn.getAttribute('data-state');
      stack.setAttribute('data-active', state);
      buttons.forEach(function(b){
        var isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    });
  });
})();

// Full-bleed the before/after stack to the true right edge of the
// viewport. Pure CSS can't know the stack's real screen position
// (it sits inside a centered, variable-width grid column), so we
// measure it on load/resize and set an explicit pixel width that
// reaches — and slightly overshoots — the actual browser edge.
// html{overflow-x:hidden} clips the overshoot, giving the crop.
//
// Safety: .signals-panel / .impact-diagram-col carry min-width:0 so
// this explicit width can never force the CSS Grid track to expand
// (Grid's default min-width:auto would otherwise treat a large
// explicit child width as the column's minimum size and blow out
// the whole layout). HARD_CAP below is a second safety net in case
// anything upstream changes.
// Also: the toggle row (#baToggleRow) gets the SAME computed width
// as the stack, so its flex-end alignment resolves to the exact
// same true right edge — instead of the stack's dynamic bled edge
// and the toggle's static column edge disagreeing with each other.
(function(){
  var stack = document.getElementById('baStack');
  var toggleRow = document.getElementById('baToggleRow');
  if(!stack) return;
  var OVERSHOOT = 200;  // px past the true edge — generous on purpose so any
                         // residual measurement error still reads as an obvious cut

  // viewportWidth(): document.documentElement.clientWidth is the
  // LAYOUT viewport width — the exact same coordinate system that
  // getBoundingClientRect() uses. window.innerWidth can include
  // scrollbar width, and window.visualViewport tracks the VISUAL
  // (zoomed) viewport, which can diverge from the layout viewport
  // on mobile "desktop mode" — clientWidth avoids both problems.
  function viewportWidth(){
    return document.documentElement.clientWidth;
  }

  function bleedRight(){
    // Skip entirely when the signals panel isn't shown (mobile/tablet) —
    // no point measuring a display:none element, and it avoids fighting
    // the mobile layout with a leftover inline width if the user resizes
    // across the breakpoint.
    if (window.matchMedia('(max-width:1023px)').matches) return;

    stack.style.maxWidth = 'none';
    stack.style.width = '';
    var rect = stack.getBoundingClientRect();
    var vw = viewportWidth();
    var trueEdgeWidth = vw - rect.left;

    // HARD_CAP is just a sanity ceiling against runaway values now
    // (the actual overflow bug was fixed via min-width:0 on the grid
    // items) — set relative to the real viewport so it can never be
    // smaller than what a legitimately wide desktop screen needs.
    var HARD_CAP = Math.max(vw * 1.6, 2200);

    // stack: overshoots the true edge on purpose, so the crop is visible
    var stackTarget = trueEdgeWidth + OVERSHOOT;
    stackTarget = Math.min(stackTarget, HARD_CAP);
    stackTarget = Math.max(stackTarget, 320);
    stack.style.width = stackTarget + 'px';

    // toggle row: stops exactly AT the true edge — no overshoot —
    // so the clickable buttons stay fully on-screen and flush with
    // the same edge the stack bleeds to, instead of drifting off it
    if(toggleRow){
      var toggleTarget = Math.min(trueEdgeWidth, HARD_CAP);
      toggleTarget = Math.max(toggleTarget, 320);
      toggleRow.style.width = toggleTarget + 'px';
    }
  }

  bleedRight();
  window.addEventListener('resize', bleedRight);
  window.addEventListener('load', bleedRight);
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize', bleedRight);
  }
})();

// Impact card description marquee — only when text is actually truncated on small screens
(function(){
  var descs = Array.prototype.slice.call(document.querySelectorAll('.impact-desc'));
  if (!descs.length) return;

  descs.forEach(function(p){
    if (!p.dataset.fullText) p.dataset.fullText = p.textContent.trim();
  });

  var resizeTimer;

  function evaluate(){
    var isMobile = window.matchMedia('(max-width:1023px)').matches;

    descs.forEach(function(p){
      // Reset to plain state before re-measuring
      p.classList.remove('marquee-mode');
      p.textContent = p.dataset.fullText;

      if (!isMobile) return;

      // Force single-line measurement
      var prevWhiteSpace = p.style.whiteSpace;
      var prevClamp = p.style.webkitLineClamp;
      p.style.whiteSpace = 'nowrap';
      p.style.webkitLineClamp = 'unset';

      var overflowing = p.scrollWidth > p.clientWidth + 1;

      p.style.whiteSpace = prevWhiteSpace;
      p.style.webkitLineClamp = prevClamp;

      if (overflowing) {
        var text = p.dataset.fullText;
        p.classList.add('marquee-mode');
        p.innerHTML =
          '<span class="impact-desc-track">' +
            '<span>' + text + '</span>' +
            '<span aria-hidden="true">' + text + '</span>' +
          '</span>';
      }
    });
  }

  evaluate();

  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(evaluate, 200);
  }, { passive:true });
})();

