/* ============================================================
   SHARED SCROLL-REVEAL ENGINE
   One IntersectionObserver for every [data-reveal] / [data-reveal-soft]
   element across every section on the page. Originally duplicated
   per-section (Core Capabilities, Experience, Testimonials each
   shipped their own copy for standalone use) — consolidated here once
   a second section actually needed it, per the plan noted when Core
   Capabilities was first merged in.

   IMPORTANT: this must stay the LAST <script> tag in index.html,
   after every section's own script. It has to run after each
   section's content-generation JS has already populated the DOM, or
   it finds nothing to observe for that section's dynamically-created
   elements. When a future section (Projects, About, etc.) adds its
   own [data-reveal] usage, just add its script tag before this one —
   nothing needs to move.

   Each element reveals once, the first time it scrolls into view, and
   is then unobserved — this is a one-time entrance effect, not a
   repeating/parallax one, and it never re-hides an element that's
   already been revealed (e.g. scrolling back up).
============================================================= */
(function(){
  if (!('IntersectionObserver' in window)){
    // no IntersectionObserver support — just show everything immediately
    // rather than leave it permanently invisible
    document.querySelectorAll('[data-reveal], [data-reveal-soft]').forEach(function(el){
      el.classList.add('is-visible');
    });
    return;
  }

  var revealObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px' // trigger a little before the element is fully in view
  });

  document.querySelectorAll('[data-reveal], [data-reveal-soft]').forEach(function(el){
    revealObserver.observe(el);
  });
})();
