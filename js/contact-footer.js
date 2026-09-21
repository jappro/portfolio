// Contact + Footer section — behavior only.
// The reveal-observer IIFE from the original delivery was removed — it
// was a duplicate of the .reveal/.in-view engine already in main.js,
// which already observes every .reveal element on the page (.cf-content
// carries class="cf-content reveal" directly in the HTML, so it's picked
// up automatically). Assumes an element with id="home" exists elsewhere
// on the page for the back-to-top button — satisfied by the hero header.

(function(){
  // Footer year, kept live
  var footerText = document.getElementById('cf-footer-text');
  if(footerText){
    footerText.innerHTML = '&copy; ' + new Date().getFullYear() + ' Uche Japheth &bull; Professional Portfolio. All rights reserved.';
  }

  // Subtle scroll-linked parallax on the whole ambient layer (skipped for reduced motion).
  // Applied to the wrapper — not the individual orbs — so it doesn't fight with
  // each orb's own pulse animation on the same "transform" property.
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var section = document.getElementById('contact');
  var atmosphere = document.querySelector('.cf-atmosphere');
  if(section && atmosphere && !prefersReduced){
    var ticking = false;
    function updateParallax(){
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var progress = 1 - Math.min(Math.max(rect.top / vh, 0), 1); // 0 → 1 as section enters
      atmosphere.style.transform = 'translateY(' + (progress * 22) + 'px)';
      ticking = false;
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ window.requestAnimationFrame(updateParallax); ticking = true; }
    }, { passive:true });
    updateParallax();
  }

  // Floating "back to top" button. It activates the moment #contact is reached,
  // and — since it's position:fixed, meaning it's already pinned to the same
  // viewport spot no matter what's scrolling behind it — it just stays on through
  // the footer too, rather than switching off and on again at that boundary.
  // It only turns off again if you scroll back up above #contact entirely.
  var topBtn = document.getElementById('cfTopBtn');
  var footerEl = document.querySelector('footer.footer');
  if(topBtn && section){
    if('IntersectionObserver' in window){
      var contactObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            topBtn.classList.add('is-visible'); // contact is on screen right now
          } else if(entry.boundingClientRect.top < 0){
            topBtn.classList.add('is-visible'); // scrolled past contact — into/through the footer
          } else {
            topBtn.classList.remove('is-visible'); // haven't reached contact yet
          }
        });
      }, { threshold: 0 });
      contactObserver.observe(section);

      // The button's resting offset is tuned to clear the sticky CTA while inside
      // #contact. That same offset would land right on top of the footer's
      // right-aligned Call/WhatsApp links once the footer is reached, so it tucks
      // down to a smaller offset there instead — clearing under the footer's
      // content rather than sitting in front of it.
      if(footerEl){
        var footerObserver = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            topBtn.classList.toggle('is-in-footer', entry.isIntersecting);
          });
        }, { threshold: 0 });
        footerObserver.observe(footerEl);
      }
    } else {
      topBtn.classList.add('is-visible'); // no IO support — fail visible rather than unreachable
    }

    // Links to #home (your real page's hero anchor). This file only ever contains the
    // contact section on its own, so if #home isn't found here, fall back to scrolling
    // the current page to the very top instead of doing nothing.
    topBtn.addEventListener('click', function(e){
      e.preventDefault();
      var home = document.getElementById('home');
      if(home){
        home.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
})();
