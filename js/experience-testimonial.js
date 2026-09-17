/* ============================================================
   EXPERIENCE + TESTIMONIALS — isolated script
   Pair with experience-testimonials.html and
   experience-testimonials.css.

   NOTE — shared code duplicated here for standalone use:
   The final IIFE below (the scroll-reveal engine) is shared
   infrastructure also used by the Core Capabilities bundle,
   duplicated here so this file works on its own. It scans the
   WHOLE page for [data-reveal]/[data-reveal-soft] elements, not
   just these sections' — harmless if both bundles' copies end up
   loaded on the same final page (each element just gets observed
   by two observers instead of one), but once all sections are
   actually merged, keep only ONE copy of this engine site-wide
   rather than shipping it per-section.
============================================================= */

(function(){
  var EXP_ICONS = {
    website: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.3l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7 0h3.83v1.78h.05c.53-1 1.85-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V21h-4v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V21h-4V8z"/></svg>'
  };

  var EXP_DATA = [
    {
      type: "single",
      logo: "/src/kiooverse-logo.jpg",
      logoInitial: "K",
      role: "Social Media Manager & Community Lead",
      company: "Kiooverse",
      employment: "Part-time",
      period: "Mar 2026 \u2013 Present",
      location: "France \u00b7 Remote",
      descShort: "Support Kiooverse\u2019s community and social media operations by managing engagement initiatives,",
      descFull: "Support Kiooverse\u2019s community and social media operations by managing engagement initiatives, publishing ecosystem updates, and strengthening relationships with community members across gaming channels.\n\nCollaborate with the team on marketing campaigns, community events, and content planning while helping maintain an active and welcoming environment for players.",
      ctas: [
        { type: "website", label: "Website", url: "https://kiooverse.xyz" },
        { type: "x", label: "X", url: "https://x.com/kiooverse?s=11" }
      ]
    },
    {
      type: "multi",
      logo: "src/racine-logo.jpg",
      logoInitial: "R",
      company: "Racine Technologies Limited",
      employment: "Part-time",
      roles: [
        {
          role: "Social Media Manager",
          period: "Aug 2026 \u2013 Present",
          location: "Lagos \u00b7 Remote",
          descShort: "Lead Racine Technologies Limited\u2019s social media strategy and digital positioning across LinkedIn,",
          descFull: "Lead Racine Technologies Limited\u2019s social media strategy and digital positioning across LinkedIn, Instagram, Facebook, and YouTube.\n\n\u2022 Develop platform-specific content aligned with the company\u2019s engineering, technology, procurement, and infrastructure positioning.\n\u2022 Build structured content systems that connect brand positioning, content, and audience engagement.\n\u2022 Manage the company\u2019s social presence and maintain a consistent voice across platforms.\n\u2022 Develop automated workflows for X and TikTok to improve content distribution and consistency.\n\u2022 Monitor audience response and content performance to refine messaging and identify growth opportunities."
        },
        {
          role: "Executive Assistant (Procurement & Junior Data Analyst)",
          period: "Sep 2025 \u2013 Present",
          location: "Lagos \u00b7 On-site",
          descShort: "As an Executive Assistant, I support procurement operations while contributing to data analysis",
          descFull: "As an Executive Assistant, I support procurement operations while contributing to data analysis and administrative workflows. My responsibilities include organizing procurement records, maintaining operational documentation, preparing reports, and using Excel to improve data accuracy and support decision-making.\n\nWorking in a fast-paced business environment has strengthened my organizational skills, attention to detail, and ability to improve internal processes."
        }
      ],
      ctas: [
        { type: "website", label: "Website", url: "https://racinetechnologies.com" },
        { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/racine-technologies-limited/" }
      ]
    },
    {
      type: "multi",
      logo: "src/pecunity-logo.jpg",
      logoInitial: "P",
      company: "Pecunity",
      employment: "Part-time",
      roles: [
        {
          role: "Community Manager & Social Media Manager",
          period: "Feb 2026 \u2013 Present",
          location: "Germany \u00b7 Remote",
          descShort: "Rejoined the Pecunity team after being invited back to lead community operations and social media",
          descFull: "Rejoined the Pecunity team after being invited back to lead community operations and social media efforts.\n\nFocused on strengthening community engagement, coordinating communications, and maintaining the project\u2019s online presence while collaborating with the core team on ecosystem growth initiatives.\n\n\u2022 Managed daily community operations across Discord and Telegram.\n\u2022 Planned and published social media content on X.\n\u2022 Coordinated announcements and ecosystem updates.\n\u2022 Developed engagement initiatives to improve community participation.\n\u2022 Worked directly with the leadership team on communication strategy.\n\u2022 Monitored community sentiment and reported feedback to the team."
        },
        {
          role: "Community Moderator & Campaign Manager",
          period: "Jun 2025 \u2013 Dec 2025",
          location: "Germany \u00b7 Remote",
          descShort: "Started as a Community Moderator supporting members across Discord and Telegram before expanding",
          descFull: "Started as a Community Moderator supporting members across Discord and Telegram, then expanded into campaign management during the project\u2019s growth phase \u2014 contributing through the transition from OctoDeFi to Pecunity, from presale through the PEC token launch.\n\n\u2022 Moderated Discord and Telegram communities while maintaining a welcoming environment.\n\u2022 Answered community questions and escalated technical issues when necessary.\n\u2022 Planned and coordinated community campaigns and engagement initiatives.\n\u2022 Assisted with ecosystem announcements and launch communications.\n\u2022 Supported the project\u2019s rebranding from OctoDeFi to Pecunity."
        }
      ],
      ctas: [
        { type: "website", label: "Website", url: "https://pecunity.io" },
        { type: "x", label: "X", url: "https://x.com/pecunity_app?s=11" }
      ]
    },
    {
      type: "single",
      logo: "src/perspective-logo.jpg",
      logoInitial: "P",
      role: "Ambassador",
      company: "Perspective AI",
      employment: "Contract",
      period: "May 2025 \u2013 Aug 2025",
      location: "Spain \u00b7 Remote",
      descShort: "Contributed to ecosystem awareness through content creation, community advocacy, and research.",
      descFull: "Contributed to ecosystem awareness through content creation, community advocacy, and research. Supported brand visibility by creating educational and promotional content on X while participating in ambassador-led engagement initiatives.",
      ctas: [
        { type: "website", label: "Website", url: "https://perspectivelabs.org/" },
        { type: "x", label: "X", url: "https://x.com/perspective_ai_?s=11" }
      ]
    },
    {
      type: "single",
      logo: "src/biga-logo.jpg",
      logoInitial: "B",
      role: "Biga Master \u00b7 Community Support",
      company: "BIGA ARCADE",
      employment: "Contract",
      period: "Sep 2024 \u2013 Dec 2024",
      location: "Australia \u00b7 Remote",
      descShort: "Served as a Biga Master, supporting community engagement across Discord and X while helping organize and promote ecosystem activities.",
      descFull: "Served as a Biga Master, supporting community engagement across Discord and X while helping organize and promote ecosystem activities.\n\nCo-facilitated weekly game nights, contributed to increased player participation, streamed gameplay sessions on YouTube, and promoted community events to strengthen ecosystem visibility and long-term engagement.",
      ctas: [
        { type: "website", label: "Website", url: "https://bigarcade.org/register" },
        { type: "x", label: "X", url: "https://x.com/bigaarcade?s=11" }
      ]
    },
    {
      type: "single",
      logo: "src/vexor-logo.jpg",
      logoInitial: "V",
      role: "Ambassador & Community Support",
      company: "Vexor",
      employment: "Contract",
      period: "Sep 2024 \u2013 Dec 2024",
      location: "Remote",
      descShort: "Selected as a paid Ambassador to support community growth and engagement within a Web3 gaming ecosystem.",
      descFull: "Selected as a paid Ambassador to support community growth and engagement within a Web3 gaming ecosystem.\n\nProvided daily community support, organized game nights, encouraged participation in ecosystem campaigns, and consistently ranked among the top-performing ambassadors through reliable contributions and community advocacy.",
      ctas: [
        { type: "website", label: "Website", url: "https://vexor.gg/" },
        { type: "x", label: "X", url: "https://x.com/vexor_gg?s=11" }
      ]
    },
    {
      type: "single",
      logo: "src/cyber-logo.jpg",
      logoInitial: "C",
      role: "Junior Community Moderator (Volunteer)",
      company: "Cyber Boxing League (CBL)",
      employment: "Internship",
      period: "May 2024 \u2013 Sep 2024",
      location: "Aruba \u00b7 Remote",
      descShort: "Began my Web3 community management journey by supporting members, onboarding newcomers, and helping maintain a welcoming Discord environment after being trusted by the community to assist with moderation.",
      descFull: "Began my Web3 community management journey by supporting members, onboarding newcomers, and helping maintain a welcoming Discord environment after being trusted by the community to assist with moderation.\n\nThis experience introduced me to Discord moderation, community communication, and the foundations of community operations.",
      ctas: [
        { type: "website", label: "Website", url: "https://www.cyberboxingleague.com/" },
        { type: "x", label: "X", url: "https://x.com/cyberboxleague?s=11" }
      ]
    }
  ];

  var listEl = document.getElementById('expList');

  function renderCtas(ctas){
    return ctas.map(function(cta){
      return '<a class="exp-cta" href="' + cta.url + '" target="_blank" rel="noopener">' +
        (EXP_ICONS[cta.type] || '') + '<span>' + cta.label + '</span></a>';
    }).join('');
  }

  function renderDesc(exp){
    return '<p class="exp-desc" data-state="collapsed">' +
        '<span class="exp-desc-short">' + exp.descShort + '</span>' +
        '<span class="exp-desc-full" hidden>' + exp.descFull + '</span>' +
        ' <button type="button" class="exp-more-btn">more</button>' +
      '</p>';
  }

  function renderSingle(exp){
    return '<div class="exp-card" data-reveal>' +
      '<div class="exp-card-head">' +
        '<img class="exp-logo" src="' + exp.logo + '" alt="' + exp.company + ' logo" ' +
          'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="exp-logo-fallback">' + exp.logoInitial + '</div>' +
        '<div class="exp-card-headtext">' +
          '<h3 class="exp-role">' + exp.role + '</h3>' +
          '<p class="exp-company">' + exp.company + ' \u00b7 ' + exp.employment + '</p>' +
          '<p class="exp-period">' + exp.period + '</p>' +
          '<p class="exp-location">' + exp.location + '</p>' +
        '</div>' +
      '</div>' +
      renderDesc(exp) +
      '<div class="exp-cta-row">' + renderCtas(exp.ctas) + '</div>' +
    '</div>';
  }

  function renderMulti(exp){
    var rolesHtml = exp.roles.map(function(role){
      return '<div class="exp-timeline-item">' +
        '<h4 class="exp-timeline-role">' + role.role + '</h4>' +
        '<p class="exp-timeline-period">' + role.period + '</p>' +
        '<p class="exp-timeline-location">' + role.location + '</p>' +
        renderDesc(role) +
      '</div>';
    }).join('');

    return '<div class="exp-card exp-card--multi" data-reveal>' +
      '<div class="exp-card-head">' +
        '<img class="exp-logo" src="' + exp.logo + '" alt="' + exp.company + ' logo" ' +
          'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="exp-logo-fallback">' + exp.logoInitial + '</div>' +
        '<div class="exp-card-headtext">' +
          '<h3 class="exp-role">' + exp.company + '</h3>' +
          '<p class="exp-company">' + exp.employment + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="exp-timeline">' + rolesHtml + '</div>' +
      '<div class="exp-cta-row">' + renderCtas(exp.ctas) + '</div>' +
    '</div>';
  }

  // ---- desktop row rendering: logo replaces the numbering, description
  // shows in full by default (no pre-cut short text) — a "more" button
  // only appears if JS later measures that the text actually overflows
  // its clamp (see checkDesktopClamps below)
  function renderDesktopDesc(descFull){
    return '<p class="exp-desc" data-state="collapsed">' +
        '<span class="exp-desc-full">' + descFull + '</span>' +
        ' <button type="button" class="exp-more-btn" hidden>more</button>' +
      '</p>';
  }

  function renderDesktopHead(row){
    if (row.headType === 'dot'){
      return '<div class="exp-card-head exp-card-head--dot">' +
        (row.lineUp ? '<span class="exp-line-up" aria-hidden="true"></span>' : '') +
        '<span class="exp-group-dot" aria-hidden="true"></span>' +
        (row.lineDown ? '<span class="exp-line-down-mid" aria-hidden="true"></span>' : '') +
      '</div>';
    }
    return '<div class="exp-card-head">' +
      '<img class="exp-logo" src="' + row.logo + '" alt="' + row.company + ' logo" ' +
        'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
      '<div class="exp-logo-fallback">' + row.logoInitial + '</div>' +
      (row.lineDown ? '<span class="exp-line-down" aria-hidden="true"></span>' : '') +
    '</div>';
  }

  function renderDesktopRow(row){
    return '<div class="exp-card' + (row.noBorder ? ' exp-card--no-divider' : '') + '" data-reveal>' +
      renderDesktopHead(row) +
      '<div class="exp-desktop-left">' +
        '<h3 class="exp-role">' + row.role + '</h3>' +
        '<p class="exp-company">' + row.company + ' \u00b7 ' + row.employment + '</p>' +
        '<p class="exp-period">' + row.period + '</p>' +
        '<p class="exp-location">' + row.location + '</p>' +
      '</div>' +
      '<div class="exp-desktop-right">' +
        renderDesktopDesc(row.descFull) +
        (row.showCtas ? '<div class="exp-cta-row">' + renderCtas(row.ctas) + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  var VISIBLE_COUNT = 3;
  var moreWrap = document.createElement('div');
  moreWrap.className = 'exp-more-list';
  moreWrap.hidden = true;

  EXP_DATA.forEach(function(exp, i){
    var html = exp.type === 'multi' ? renderMulti(exp) : renderSingle(exp);
    if (i < VISIBLE_COUNT){
      listEl.insertAdjacentHTML('beforeend', html);
    } else {
      moreWrap.insertAdjacentHTML('beforeend', html);
    }
  });

  var toggleBtn = null;
  if (EXP_DATA.length > VISIBLE_COUNT){
    toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'exp-toggle-btn';
    toggleBtn.textContent = 'View all ' + EXP_DATA.length + '+ experience';
    listEl.appendChild(toggleBtn);
    listEl.appendChild(moreWrap);

    var expExpanded = false;
    toggleBtn.addEventListener('click', function(){
      expExpanded = !expExpanded;
      moreWrap.hidden = !expExpanded;
      toggleBtn.textContent = expExpanded ? 'Show less' : ('View all ' + EXP_DATA.length + '+ experience');
    });
  }

  // ---- desktop: same 3-visible / toggle pattern, but multi-role companies
  // are flattened into one row per role (sharing that company's logo),
  // and each row's CTAs only render on the last role of the group so the
  // Website/Social row doesn't repeat under every role
  var listElDesktop = document.getElementById('expListDesktop');
  var desktopRows = [];
  EXP_DATA.forEach(function(exp, i){
    var visible = i < VISIBLE_COUNT;
    if (exp.type === 'multi'){
      exp.roles.forEach(function(role, idx, arr){
        var isFirst = idx === 0;
        var isLast = idx === arr.length - 1;
        desktopRows.push({
          visible: visible,
          logo: exp.logo, logoInitial: exp.logoInitial,
          role: role.role, company: exp.company, employment: exp.employment,
          period: role.period, location: role.location, descFull: role.descFull,
          ctas: exp.ctas, showCtas: isLast,
          headType: isFirst ? 'logo' : 'dot',
          lineUp: !isFirst,
          lineDown: !isLast,
          noBorder: !isLast
        });
      });
    } else {
      desktopRows.push({
        visible: visible,
        logo: exp.logo, logoInitial: exp.logoInitial,
        role: exp.role, company: exp.company, employment: exp.employment,
        period: exp.period, location: exp.location, descFull: exp.descFull,
        ctas: exp.ctas, showCtas: true,
        headType: 'logo',
        lineUp: false,
        lineDown: false,
        noBorder: false
      });
    }
  });

  var moreWrapDesktop = document.createElement('div');
  moreWrapDesktop.className = 'exp-more-list';
  moreWrapDesktop.hidden = true;

  desktopRows.forEach(function(row){
    var html = renderDesktopRow(row);
    if (row.visible){
      listElDesktop.insertAdjacentHTML('beforeend', html);
    } else {
      moreWrapDesktop.insertAdjacentHTML('beforeend', html);
    }
  });

  var toggleBtnDesktop = null;
  if (desktopRows.some(function(r){ return !r.visible; })){
    toggleBtnDesktop = document.createElement('button');
    toggleBtnDesktop.type = 'button';
    toggleBtnDesktop.className = 'exp-toggle-btn';
    toggleBtnDesktop.textContent = 'View all ' + EXP_DATA.length + '+ experience';
    listElDesktop.appendChild(toggleBtnDesktop);
    listElDesktop.appendChild(moreWrapDesktop);

    var expExpandedDesktop = false;
    toggleBtnDesktop.addEventListener('click', function(){
      expExpandedDesktop = !expExpandedDesktop;
      moreWrapDesktop.hidden = !expExpandedDesktop;
      toggleBtnDesktop.textContent = expExpandedDesktop ? 'Show less' : ('View all ' + EXP_DATA.length + '+ experience');
    });
  }

  // desktop "more"/"less" just toggles the clamp (full text is already
  // in the DOM) — distinct from the mobile handler below, which swaps
  // between a separate pre-cut short span and the full span
  listElDesktop.addEventListener('click', function(e){
    var btn = e.target.closest('.exp-more-btn');
    if (!btn) return;
    var descEl = btn.closest('.exp-desc');
    var expanded = descEl.getAttribute('data-state') === 'expanded';
    descEl.setAttribute('data-state', expanded ? 'collapsed' : 'expanded');
    btn.textContent = expanded ? 'more' : 'less';
  });

  // smart truncation: a description's "more" button only appears once
  // layout confirms the text actually overflows its 4-line clamp —
  // short descriptions just render in full with no button at all
  function checkDesktopClamps(){
    if (!window.matchMedia('(min-width:960px)').matches) return;
    listElDesktop.querySelectorAll('.exp-desc').forEach(function(descEl){
      if (descEl.getAttribute('data-state') === 'expanded') return;
      var fullEl = descEl.querySelector('.exp-desc-full');
      var btn = descEl.querySelector('.exp-more-btn');
      btn.hidden = !(fullEl.scrollHeight > fullEl.clientHeight + 1);
    });
  }
  checkDesktopClamps();
  window.addEventListener('load', checkDesktopClamps);
  var expClampTimer;
  window.addEventListener('resize', function(){
    window.clearTimeout(expClampTimer);
    expClampTimer = window.setTimeout(checkDesktopClamps, 150);
  });

  // expand/collapse — delegated so it scales to however many entries get added later
  listEl.addEventListener('click', function(e){
    var btn = e.target.closest('.exp-more-btn');
    if (!btn) return;
    var descEl = btn.closest('.exp-desc');
    var shortEl = descEl.querySelector('.exp-desc-short');
    var fullEl = descEl.querySelector('.exp-desc-full');
    var expanded = descEl.getAttribute('data-state') === 'expanded';

    if (expanded){
      shortEl.hidden = false;
      fullEl.hidden = true;
      btn.textContent = 'more';
      descEl.setAttribute('data-state', 'collapsed');
    } else {
      shortEl.hidden = true;
      fullEl.hidden = false;
      btn.textContent = 'less';
      descEl.setAttribute('data-state', 'expanded');
    }
  });

  // hover-on-scroll: whichever entry sits nearest the top of the
  // screen gets the highlight class, same technique used for the
  // Core Capabilities cards — real :hover (CSS) handles pointer
  // devices, this handles touch/scroll
  var expCards = document.querySelectorAll('#expList .exp-card, #expListDesktop .exp-card');
  var expScrollTicking = false;
  var expPointerActive = false; // true while a mouse/finger is actively resting on a card — scroll tracking backs off so it doesn't fight the direct interaction
  function updateExpHover(){
    expScrollTicking = false;
    if (expPointerActive) return;
    var refLine = window.innerHeight * 0.35;
    var closest = null;
    var closestDist = Infinity;
    expCards.forEach(function(card){
      if (card.offsetParent === null) return; // hidden behind the "View all" toggle — not eligible
      var rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var dist = Math.abs(rect.top - refLine);
      if (dist < closestDist){ closestDist = dist; closest = card; }
    });
    expCards.forEach(function(card){
      card.classList.toggle('exp-card--hover', card === closest);
    });
  }
  window.addEventListener('scroll', function(){
    if (!expScrollTicking){
      window.requestAnimationFrame(updateExpHover);
      expScrollTicking = true;
    }
  }, { passive: true });

  // Direct hover: mouse resting on a card, or a finger held down on one,
  // both drive the same highlight the scroll-tracking uses. Pointer
  // Events unify mouse/touch/pen — pointerenter fires the moment a
  // finger touches down (touch has no hover state otherwise), and
  // pointerleave fires on lift or drag-away, so "hold a finger on it"
  // and "hover with a mouse" both just work through one handler.
  expCards.forEach(function(card){
    card.addEventListener('pointerenter', function(){
      expPointerActive = true;
      expCards.forEach(function(c){ c.classList.remove('exp-card--hover'); });
      card.classList.add('exp-card--hover');
    });
    card.addEventListener('pointerleave', function(){
      expPointerActive = false;
      card.classList.remove('exp-card--hover');
      updateExpHover(); // hand control back to whichever card scroll position says should be highlighted
    });
  });
})();

(function(){
  // testimony text is reproduced exactly as given — including Saad's
  // "geniunly" typo, left untouched since it's someone else's real quote,
  // not copy Claude is free to silently correct
  // placeholder entries use generic template testimony text (clearly
  // not real quotes) varying in length on purpose, so the layout and
  // "see more" truncation both work correctly the moment real quotes
  // are swapped in — just replace the `quote` string and drop the
  // `placeholder: true` flag once the real words arrive
  var TST_DATA = [
    { name: "Saad", role: "Admin", company: "Vexor Network", avatar: "src/saad pfp.jpg",
      quote: "Japheth one of our dependable supporters, he shows up consistently and geniunly care about the community." },
    { name: "Vincent", role: "CEO/Founder", company: "Vinceslink", avatar: "src/vincent pfp.jpg",
      quote: "Japheth took the vision behind Vinceslink and turned it into a polished digital experience without needing every detail spelled out. He took ownership from concept to execution, bringing creativity, attention to detail, and strong problem-solving throughout. I\u2019m pleased with what he delivered and would confidently recommend him to anyone looking for someone who can take an idea and bring it to life." },
    { name: "Christian", role: "Founder", company: "Kiooverse", avatar: "src/christian pfp.jpg",
      quote: "Japheth brings a thoughtful, consistent approach to community work. Easy to collaborate with, and always delivers.",
      placeholder: true },
    { name: "Lars", role: "Co-Founder (COO)", company: "Pecunity", avatar: "src/lars pfp.jpg",
      quote: "@Japheth did a great job I highly recommend him for his passionate and modest community work" },
    { name: "Christopher", role: "Managing Director", company: "Racine Technologies Limited", avatar: "src/christopher pfp.jpg",
      quote: "It has been an absolute pleasure working alongside Uche at Racine Technologies. He consistently demonstrates exceptional dedication, strong operational discipline, and a remarkably proactive approach to problem-solving. Whether handling complex procurement tasks, driving corporate engagements, or executing day-to-day operations, Uche approaches every project with complete ownership and reliability. He is a key contributor to our team\u2019s success, and any organization would be fortunate to have his competence and work ethic on their team." },
    { name: "Mr Konsole", role: "Community Admin", company: "BIGA Arcade", avatar: "src/mrkonsole pfp.jpg",
      quote: "GG Japheth, thanks for the support..\nKeep the vibe on that's the BIGA way." },
    { name: "fenicks", role: "Admin", company: "Kiooverse", avatar: "src/fenicks pfp.jpg",
      quote: "Japheth has been a dependable presence in the Kiooverse community. Always shows up, always delivers.",
      placeholder: true }
  ];

  var cardsEl = document.getElementById('tstCards');
  var prevBtn = document.getElementById('tstPrev');
  var nextBtn = document.getElementById('tstNext');
  var thumbEl = document.getElementById('tstThumb');

  var cardsElMobile = document.getElementById('tstCardsMobile');
  var prevBtnMobile = document.getElementById('tstPrevMobile');
  var nextBtnMobile = document.getElementById('tstNextMobile');
  var trackerElMobile = document.getElementById('tstTrackerMobile');

  function initials(name){ return name.trim().charAt(0).toUpperCase(); }

  // shared markup builder — used for both the desktop peeking-row cards
  // and the mobile single-card-at-a-time carousel, so the card's visual
  // style (bubble, tail, avatar row) only ever lives in one place
  function renderCardHtml(t){
    return '<div class="tst-card' + (t.placeholder ? ' tst-card--placeholder' : '') + '" data-reveal-soft>' +
      '<div class="tst-bubble-wrap">' +
        '<svg class="tst-tail" viewBox="0 0 124 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0 L0 80 L48 48 L124 0 Z" fill="currentColor"/></svg>' +
        '<div class="tst-bubble">' +
          '<p class="tst-quote-text" data-expanded="false">' + t.quote.replace(/\n/g, '<br>') + '</p>' +
          '<button type="button" class="tst-see-more" hidden>see more</button>' +
        '</div>' +
      '</div>' +
      '<div class="tst-person">' +
        '<img class="tst-avatar" src="' + t.avatar + '" alt="' + t.name + '" ' +
          'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="tst-avatar-fallback">' + initials(t.name) + '</div>' +
        '<div class="tst-person-text">' +
          '<p class="tst-name">' + t.name + '</p>' +
          '<p class="tst-role">' + t.role + '</p>' +
          '<p class="tst-company-line">' + t.company + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  TST_DATA.forEach(function(t){
    cardsEl.insertAdjacentHTML('beforeend', renderCardHtml(t));
    cardsElMobile.insertAdjacentHTML('beforeend', renderCardHtml(t));
  });

  var TAIL_OVERLAP = 22; // scaled up from 18px; how far the tail tucks up behind the bubble's bottom edge
  var TAIL_OVERLAP_MOBILE = 16; // mobile tail is drawn smaller (90x58 vs 124x80) — scaled down to keep the same exposed-tip proportion

  // the tail's vertical position depends on the bubble's actual rendered
  // height, which varies with quote length and with "see more"
  // expansion — so it can't be a fixed CSS value, it has to be measured.
  // Runs against both containers so the desktop row and the mobile
  // carousel each get correctly positioned tails independently.
  function positionTails(){
    document.querySelectorAll('#tstCards .tst-card, #tstCardsMobile .tst-card').forEach(function(card){
      var bubble = card.querySelector('.tst-bubble');
      var tail = card.querySelector('.tst-tail');
      if (!bubble || !tail) return;
      var overlap = card.closest('#tstCardsMobile') ? TAIL_OVERLAP_MOBILE : TAIL_OVERLAP;
      tail.style.top = (bubble.offsetHeight - overlap) + 'px';
    });
  }
  positionTails();

  // "see more"/"see less" toggle — delegated from a shared ancestor so
  // one listener covers both the desktop and mobile card sets
  document.querySelector('.tst-section').addEventListener('click', function(e){
    var btn = e.target.closest('.tst-see-more');
    if (!btn) return;
    var card = btn.closest('.tst-card');
    var quoteEl = card.querySelector('.tst-quote-text');
    var expanded = quoteEl.getAttribute('data-expanded') === 'true';
    quoteEl.setAttribute('data-expanded', expanded ? 'false' : 'true');
    btn.textContent = expanded ? 'see more' : 'see less';
    positionTails(); // bubble height just changed — recalculate
  });

  // smart truncation — a card's "see more" only appears once layout
  // confirms its quote actually overflows the clamp, same approach
  // used for Experience's desktop descriptions. Checked against both
  // containers since the mobile card's taller min-height changes
  // whether a given quote actually overflows.
  function checkTstClamps(){
    document.querySelectorAll('#tstCards .tst-card, #tstCardsMobile .tst-card').forEach(function(card){
      var quoteEl = card.querySelector('.tst-quote-text');
      var btn = card.querySelector('.tst-see-more');
      if (quoteEl.getAttribute('data-expanded') === 'true') return;
      btn.hidden = !(quoteEl.scrollHeight > quoteEl.clientHeight + 1);
    });
  }
  checkTstClamps();
  window.addEventListener('load', checkTstClamps);
  window.addEventListener('load', positionTails);
  var tstClampTimer;
  window.addEventListener('resize', function(){
    window.clearTimeout(tstClampTimer);
    tstClampTimer = window.setTimeout(function(){
      checkTstClamps();
      positionTails(); // card width can change on resize, which can rewrap text and change bubble height
    }, 150);
  });

  // ---- desktop/tablet manual carousel: prev/next scroll by one card
  // width, progress bar reflects how far through the full card set the
  // viewport has scrolled
  function cardStep(){
    var card = cardsEl.querySelector('.tst-card');
    if (!card) return 0;
    var style = window.getComputedStyle(cardsEl);
    var gap = parseFloat(style.columnGap || style.gap) || 20;
    return card.getBoundingClientRect().width + gap;
  }

  function updateNavState(){
    var maxScroll = cardsEl.scrollWidth - cardsEl.clientWidth;
    prevBtn.disabled = cardsEl.scrollLeft <= 2;
    nextBtn.disabled = maxScroll <= 2 || cardsEl.scrollLeft >= maxScroll - 2;

    var thumbWidthPct = Math.max(15, Math.min(100, (cardsEl.clientWidth / cardsEl.scrollWidth) * 100));
    var trackSpacePct = 100 - thumbWidthPct;
    var progress = maxScroll > 0 ? (cardsEl.scrollLeft / maxScroll) : 0;
    thumbEl.style.width = thumbWidthPct + '%';
    thumbEl.style.left = (progress * trackSpacePct) + '%';
  }

  prevBtn.addEventListener('click', function(){
    cardsEl.scrollBy({ left: -cardStep(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', function(){
    cardsEl.scrollBy({ left: cardStep(), behavior: 'smooth' });
  });
  cardsEl.addEventListener('scroll', function(){
    window.requestAnimationFrame(updateNavState);
  }, { passive: true });
  window.addEventListener('resize', updateNavState);
  updateNavState();

  // ---- mobile: single-card swipeable carousel + minimal dot tracker
  // (a small visual indicator only — not tappable; only the chevrons
  // navigate). Supports both direct touch-swipe (native scroll-snap)
  // and the prev/next buttons.
  //
  // Rewritten to track the current card with an explicit index instead
  // of deriving the next scroll position from scrollBy() + a
  // computed-style gap lookup at click time — that computed-style gap
  // read isn't reliable across browsers for a flex `gap`, and any
  // mismatch there meant a chevron tap could scroll short of a full
  // card and get pulled back by scroll-snap, reading as "the button
  // doesn't do anything." Using scrollTo() with an index-based target
  // (index * step) sidesteps that: each tap always targets an exact,
  // correct snap point.
  function renderTrackerMobile(activeIndex){
    // minimal dot indicator (e.g. "• • •") — visual only, not tappable
    trackerElMobile.innerHTML = TST_DATA.map(function(t, i){
      return '<span class="tst-tracker-dot' + (i === activeIndex ? ' tst-tracker-dot--active' : '') + '"></span>';
    }).join('');
  }
  renderTrackerMobile(0);

  var MOBILE_GAP = 16; // must match .tst-mobile-cards' CSS `gap` value
  var mobileIndex = 0;

  function mobileStep(){
    var card = cardsElMobile.querySelector('.tst-card');
    return card ? card.getBoundingClientRect().width + MOBILE_GAP : 0;
  }

  function goToMobileIndex(i){
    mobileIndex = Math.max(0, Math.min(TST_DATA.length - 1, i));
    cardsElMobile.scrollTo({ left: mobileIndex * mobileStep(), behavior: 'smooth' });
    updateMobileNavState();
  }

  function updateMobileNavState(){
    var maxScroll = cardsElMobile.scrollWidth - cardsElMobile.clientWidth;
    prevBtnMobile.disabled = mobileIndex <= 0;
    nextBtnMobile.disabled = mobileIndex >= TST_DATA.length - 1 || maxScroll <= 2;
    renderTrackerMobile(mobileIndex);
  }

  prevBtnMobile.addEventListener('click', function(){ goToMobileIndex(mobileIndex - 1); });
  nextBtnMobile.addEventListener('click', function(){ goToMobileIndex(mobileIndex + 1); });

  // keeps the index (and therefore the dots/button disabled-state) in
  // sync when the person swipes by hand instead of using the chevrons
  var mobileScrollTicking = false;
  cardsElMobile.addEventListener('scroll', function(){
    if (mobileScrollTicking) return;
    mobileScrollTicking = true;
    window.requestAnimationFrame(function(){
      mobileScrollTicking = false;
      var step = mobileStep();
      if (step > 0){
        mobileIndex = Math.max(0, Math.min(TST_DATA.length - 1, Math.round(cardsElMobile.scrollLeft / step)));
      }
      updateMobileNavState();
    });
  }, { passive: true });

  window.addEventListener('resize', updateMobileNavState);
  window.addEventListener('load', updateMobileNavState); // re-check after webfonts finish loading, which can shift card widths
  updateMobileNavState();
})();

/* ===================== shared scroll-reveal engine (see note above) ===================== */
(function(){
  // ===================== SHARED SCROLL-REVEAL ENGINE =====================
  // One IntersectionObserver for every [data-reveal] / [data-reveal-soft]
  // element across all sections built so far. Placed at the very end of
  // the document (after Core Capabilities', Experience's, and
  // Testimonials' own scripts have already run and populated their
  // dynamic content), so every element that needs to be observed
  // already exists in the DOM by the time this runs.
  //
  // Each element reveals once, the first time it scrolls into view, and
  // is then unobserved — this is a one-time entrance effect, not a
  // repeating/parallax one, and it never re-hides an element that's
  // already been revealed (e.g. scrolling back up).
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
