
  (function(){
    var btn = document.getElementById('seeMoreBtn');
    var panel = document.getElementById('aboutExpanded');
    var storyExtra = document.getElementById('aboutStoryExtra');
    var panels = [panel, storyExtra];
    var container = document.getElementById('aboutContainer');
    var label = btn.querySelector('.btn-label');

    btn.addEventListener('click', function(){
      var isOpen = panel.classList.contains('is-open');

      if(isOpen){
        panels.forEach(function(p){
          p.style.maxHeight = p.scrollHeight + 'px';
        });
        requestAnimationFrame(function(){
          panels.forEach(function(p){
            p.style.maxHeight = '0px';
          });
        });
        panels.forEach(function(p){ p.classList.remove('is-open'); });
        container.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        label.textContent = 'See more';
      } else {
        panels.forEach(function(p){
          p.classList.add('is-open');
          p.style.maxHeight = p.scrollHeight + 'px';
        });
        container.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        label.textContent = 'See less';
      }
    });

    // keep max-height correct if fonts/images shift layout after open
    window.addEventListener('resize', function(){
      if(panel.classList.contains('is-open')){
        panels.forEach(function(p){
          p.style.maxHeight = p.scrollHeight + 'px';
        });
      }
      syncDesktopLayout();
    });

    // ===== Desktop-only "See more" full-width breakout =====
    // On desktop, when expanded, #aboutExpanded / .about-cta-wrap /
    // .metrics-clothesline move OUT of their nested columns to
    // become direct children of .about-container, so CSS grid can
    // place them in a new full-width row below both columns. CSS
    // can't reach into a nested flex child to do this, so it's done
    // here. Mobile is untouched — guarded by the matchMedia check,
    // this never runs below the desktop breakpoint.
    var ctaWrap = document.querySelector('.about-cta-wrap');
    var clothesline = document.querySelector('.metrics-clothesline');
    var contentEl = document.querySelector('.about-content');
    var colLeftEl = document.querySelector('.about-col-left');
    var colRightEl = document.querySelector('.about-col-right');
    var desktopMq = window.matchMedia('(min-width:1024px)');

    function relocateForDesktopExpand(){
      container.appendChild(panel);
      container.appendChild(ctaWrap);
      container.appendChild(clothesline);
    }
    function restoreOriginalPositions(){
      contentEl.appendChild(panel);
      colLeftEl.appendChild(ctaWrap);
      colRightEl.appendChild(clothesline);
    }
    function syncDesktopLayout(){
      var isOpen = panel.classList.contains('is-open');
      var shouldBeRelocated = isOpen && desktopMq.matches;
      var isRelocated = panel.parentElement === container;
      if(shouldBeRelocated && !isRelocated){
        relocateForDesktopExpand();
      } else if(!shouldBeRelocated && isRelocated){
        restoreOriginalPositions();
      }
    }
    // run once after every toggle, and once on load
    btn.addEventListener('click', syncDesktopLayout);
    syncDesktopLayout();

    // graceful fallback if the photo file isn't present yet, and a
    // signal for when it's safe to reveal the shade (see the
    // .about-photo-shade CSS — it stays opacity:0 until this class
    // is added, since the mask depends on the same file loading and
    // would otherwise pop in a moment after the photo does)
    var wrap = document.getElementById('aboutPhotoWrap');
    var preload = new Image();
    preload.onerror = function(){
      wrap.classList.add('photo-missing');
    };
    preload.onload = function(){
      wrap.classList.add('photo-ready');
    };
    preload.src = 'src/about-portrait.png';
  })();
