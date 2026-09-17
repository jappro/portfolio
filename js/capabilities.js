/* ============================================================
   CORE CAPABILITIES — isolated script
   Pair with capability.html and capability.css.

   The shared scroll-reveal engine that used to be duplicated at the
   end of this file now lives in its own file, js/shared-reveal.js,
   loaded as the last <script> tag in index.html — consolidated once
   Experience+Testimonials became a second section needing the same
   engine. See shared-reveal.js for why it has to stay last in load
   order rather than living in any one section's own file.
============================================================= */

(function(){
  var CC_DATA = [
    {
      title: "Community Development",
      line: "Every community is different. The way it\u2019d be built should also be different.",
      myView: [
        "Every community is different. The way it\u2019s built should also be different.",
        "There is no single system that can be copied into every community and expected to work.",
        "So before thinking about growth, I first try to understand who is already there, why they are there, and what can make the relationship meaningful."
      ],
      steps: [
        { title: "Build Trust", desc: "Create a safe space where people feel seen and heard.", icon: "users" },
        { title: "Understand People", desc: "Listen closely to conversations, behaviors, and needs.", icon: "search" },
        { title: "Create Engagement", desc: "Design interactions and experiences that bring people in.", icon: "usersPlus" },
        { title: "Read the Signals", desc: "Identify patterns, feedback, and what the community is really telling us.", icon: "chart" },
        { title: "Feed It Back", desc: "Use insights to improve the product and the community experience.", icon: "refresh" }
      ],
      creates: ["Communities that don\u2019t just grow in numbers, but continuously provide <strong>meaningful signals</strong> that help shape <strong>better products and experiences</strong>."],
      examples: [
        { title: "Web3 Communities", sub: "Discord & Telegram" },
        { title: "Gaming Communities", sub: "Community engagement & support" },
        { title: "Community Campaigns", sub: "Zealy quests, participation & engagement systems" },
        { title: "Social Communities", sub: "Audience conversations, feedback & interaction" }
      ],
      reality: {
        blocks: [
          { type: "p", text: "A community built from a rigid template is liable to break." },
          { type: "p", text: "I don\u2019t copy a playbook just because it worked somewhere else. I find what works for that specific community." },
          { type: "p", text: "If something breaks, I go back to the signals." },
          { type: "list", items: ["Reinforce what is working.", "Understand what isn\u2019t.", "Iterate."] }
        ],
        closing: "That is my approach!"
      }
    },
    {
      title: "Social Media Management & Brand Growth",
      line: "Content should do more than fill a calendar.",
      myView: [
        "Content should do more than fill a calendar.",
        "Visibility without identity can attract attention without building an audience.",
        "Identity without visibility can have something meaningful to say, but too few people get to hear it.",
        "My approach is to build visibility and audience without losing what makes the brand recognizable."
      ],
      myViewDiagram:
        '<div class="cc-triad">' +
          '<svg class="cc-triad-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
            '<line x1="50" y1="14" x2="15" y2="86"/>' +
            '<line x1="50" y1="14" x2="85" y2="86"/>' +
            '<line x1="15" y1="86" x2="85" y2="86"/>' +
          '</svg>' +
          '<div class="cc-triad-node cc-triad-node--top">' +
            '<span class="cc-triad-label">VISIBILITY</span>' +
            '<span class="cc-triad-sub">People see you</span>' +
          '</div>' +
          '<div class="cc-triad-node cc-triad-node--left">' +
            '<span class="cc-triad-label">AUDIENCE</span>' +
            '<span class="cc-triad-sub">People choose to stay</span>' +
          '</div>' +
          '<div class="cc-triad-node cc-triad-node--right">' +
            '<span class="cc-triad-label">BRAND IDENTITY</span>' +
            '<span class="cc-triad-sub">People understand who you are</span>' +
          '</div>' +
        '</div>',
      steps: [
        { title: "Understand the Brand", desc: "Understand what the brand is building, what it stands for, and how it should communicate.", icon: "number" },
        { title: "Understand the Audience", desc: "Look at who we are speaking to, what they care about, and what they respond to.", icon: "number" },
        { title: "Find the Message", desc: "Turn what the brand is building into messages people can understand and connect with.", icon: "number" },
        { title: "Create & Distribute", desc: "Create purposeful content and get it in front of people through the right formats, channels, and timing.", icon: "number" },
        { title: "Learn & Improve", desc: "Observe what people respond to, identify what is working, and use that to improve the next cycle.", icon: "number" }
      ],
      creates: [
        "A social presence that works toward more than activity.",
        "Content becomes a way to build visibility, strengthen brand identity, understand the audience, and gradually turn attention into a relationship."
      ],
      examples: [
        { title: "Web3 Projects", sub: "Social media, community communication & growth" },
        { title: "Gaming Communities", sub: "Content, announcements & audience engagement" },
        { title: "Technology & Business", sub: "Brand communication & content planning" },
        { title: "Personal Brand", sub: "X & LinkedIn content, audience learning & experimentation" }
      ],
      reality: {
        blocks: [
          { type: "p", text: "Social media is unpredictable. Visibility can change overnight." },
          { type: "p", text: "A strategy that reached thousands yesterday can reach a fraction of that tomorrow." },
          { type: "p", text: "When that happens, I don\u2019t abandon the brand identity just to chase numbers." },
          { type: "p", text: "I explore different ways to regain visibility, observe what the audience is responding to, pay attention to relevant trends, and iterate." }
        ],
        closing: "Get what we don\u2019t have yet without losing what we already have."
      }
    },
    {
      title: "Customer Experience",
      line: "The experience after attention matters just as much as getting attention.",
      myView: [
        "The experience after attention matters just as much as getting attention.",
        "Getting someone to choose a product is one thing. What happens after they arrive can determine whether they understand it, trust it, return, or decide to leave.",
        "The job is not just to resolve the customer\u2019s problem. It is to understand why the problem keeps reaching the customer."
      ],
      myViewDiagram:
        '<div class="cc-flow">' +
          '<div class="cc-flow-step"><span class="cc-flow-label">Attention</span></div>' +
          '<div class="cc-flow-step"><span class="cc-flow-label">Arrival</span></div>' +
          '<div class="cc-flow-step">' +
            '<span class="cc-flow-label">Experience</span>' +
            '<div class="cc-flow-branch">Friction &rarr; Leave</div>' +
          '</div>' +
          '<div class="cc-flow-step"><span class="cc-flow-label">Return</span></div>' +
        '</div>',
      steps: [
        { title: "Understand the Journey", desc: "Look at what the customer is trying to do and the steps they take to get there.", icon: "number" },
        { title: "Listen to the Experience", desc: "Pay attention to questions, complaints, frustrations, and moments where people struggle.", icon: "number" },
        { title: "Find the Friction", desc: "Identify where time, clarity, trust, or effort is being unnecessarily lost.", icon: "number" },
        { title: "Resolve & Connect", desc: "Help resolve the immediate problem and ensure useful feedback doesn\u2019t stop at the interaction.", icon: "number" },
        { title: "Improve the Experience", desc: "Use recurring feedback and patterns to improve the process, communication, or product behind the experience.", icon: "number" }
      ],
      creates: [
        "An experience that doesn\u2019t only react when something goes wrong.",
        "It learns from the people experiencing the product and uses what they reveal to make the next experience better."
      ],
      examples: [
        { title: "Community Support", sub: "Questions, complaints, guidance & issue resolution" },
        { title: "Web3 Communities", sub: "Member support, feedback & experience monitoring" },
        { title: "Social Communities", sub: "Audience conversations, concerns & relationship management" },
        { title: "Operational Environments", sub: "Recurring issues, information flow & process improvement" }
      ],
      reality: {
        blocks: [
          { type: "p", text: "Solving the same problem repeatedly is a signal. Sometimes the customer isn\u2019t the problem." },
          { type: "list", items: ["The process may be unclear.", "The information may be missing.", "Or the system behind the experience may need attention."] },
          { type: "p", text: "When resolving an issue isn\u2019t improving the experience, I go back to the journey." },
          { type: "list", items: ["Where is the friction?", "What keeps repeating?", "What is missing?"] }
        ],
        closing: "Then use what I find to improve the experience beyond that single interaction.",
        diagram:
          '<div class="cc-flow" style="margin-top:18px;">' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Repeated Issue</span></div>' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Find the Pattern</span></div>' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Improve the System</span></div>' +
          '</div>' +
          '<div class="cc-flow-loop">' +
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 3v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            'Repeat the process' +
          '</div>'
      }
    },
    {
      title: "Operations & Systems",
      line: "Good work becomes more valuable when it doesn\u2019t have to be reinvented.",
      myView: [
        "Good work becomes more valuable when it doesn\u2019t have to be reinvented. A good result is useful.",
        "But when getting that same result depends entirely on someone remembering how they did it last time, the work becomes difficult to repeat.",
        "My goal is not to create more systems. I aim to remove unnecessary friction from the work that already exists."
      ],
      steps: [
        { title: "Understand the Work", desc: "Look at how the work is currently being done before trying to improve it.", icon: "number" },
        { title: "Find the Friction", desc: "Identify repeated confusion, unnecessary steps, bottlenecks, and work that keeps being done from scratch.", icon: "number" },
        { title: "Create Structure", desc: "Organize the work into clearer workflows, documentation, tools, or simple systems.", icon: "number" },
        { title: "Make It Repeatable", desc: "Make useful processes easier to follow without depending entirely on memory.", icon: "number" },
        { title: "Improve the System", desc: "Observe how the workflow performs and adjust it as the work changes.", icon: "number" }
      ],
      creates: [
        "Work that becomes easier to continue, improve, and hand over.",
        "Instead of solving the same operational problem repeatedly, the team can build on what already works."
      ],
      examples: [
        { title: "Engineering Office Operations", sub: "Documentation, coordination & structured workflows" },
        { title: "Community Operations", sub: "Moderation systems, engagement workflows & campaign coordination" },
        { title: "Content Operations", sub: "Content planning, calendars & publishing workflows" },
        { title: "Project Work", sub: "Process organization, documentation & workflow design" }
      ],
      reality: {
        blocks: [
          { type: "p", text: "A system that looks good but doesn\u2019t fit the work will eventually be ignored. Sometimes the problem isn\u2019t that people refuse to follow a process. The process itself may be creating more work than it removes." },
          { type: "p", text: "When that happens, I go back to the workflow." },
          { type: "list", items: ["What is actually being used?", "Where are people creating workarounds?", "What can be simplified?"] },
          { type: "p", text: "Then adjust the system around how the work actually happens." }
        ],
        closing: "The system should support the work and not become more work.",
        diagram:
          '<div class="cc-flow" style="margin-top:18px;">' +
            '<div class="cc-flow-step"><span class="cc-flow-label">System</span></div>' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Real Work</span></div>' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Friction</span></div>' +
            '<div class="cc-flow-step"><span class="cc-flow-label">Simplify</span></div>' +
          '</div>' +
          '<div class="cc-flow-loop">' +
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 3v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            'Repeat the process' +
          '</div>'
      }
    },
    {
      title: "Data & Reporting",
      line: "Information becomes useful when it helps someone make a better decision.",
      myView: [
        "Information becomes useful when it helps someone make a better decision.",
        "Insights don\u2019t come from the air.",
        "They come from information that has been captured, documented, organized, and understood.",
        "During my approach to community, customer experience, and social media, I\u2019ve constantly mentioned things like read the signals and go back to the insight.",
        "Data is how I keep those insights.",
        "I use data to keep track of what is happening, make information easier to understand, identify patterns, and turn what has been recorded into something useful.",
        "Because if we want to go back to the signals, we first need to make sure the signals were captured."
      ],
      stepsLabel: "THE INFORMATION CYCLE",
      steps: [
        { title: "Capture", desc: "Identify and collect the information worth keeping.", icon: "number" },
        { title: "Document", desc: "Record it properly so useful information doesn\u2019t disappear.", icon: "number" },
        { title: "Organize", desc: "Structure the information so it can be easily accessed and understood.", icon: "number" },
        { title: "Report", desc: "Make what is happening visible through clear records, summaries, and reports.", icon: "number" },
        { title: "Analyze", desc: "Look beyond individual information to identify patterns, changes, and useful insights.", icon: "number" },
        { title: "Use", desc: "Turn what was learned into something that can support a better decision or improvement.", icon: "number" }
      ],
      createsLabel: "WHAT THIS MAKES POSSIBLE",
      creates: [
        "Something to go back to.",
        "Instead of relying on memory, assumptions, or scattered information, there is a record.",
        "A record of:",
        { type: "list", items: ["What happened.", "What changed.", "What keeps repeating.", "And what we can learn from it."] },
        "That makes it easier to go back to the signals, understand what they are telling us, and use them to improve what happens next."
      ],
      examplesLabel: "WHERE I USE IT",
      examples: [
        { title: "Community & Customer Insights", sub: "Tracking feedback, complaints, questions, and patterns." },
        { title: "Operations & Documentation", sub: "Keeping records and organizing information." },
        { title: "Reporting & Analysis", sub: "Turning information into reports and insights." },
        { title: "Campaigns & Performance", sub: "Tracking activity, engagement, and outcomes." },
        { title: "Product Learning", sub: "Using patterns to support improvement." }
      ],
      realityLabel: "WHY DATA MATTERS TO ME",
      reality: {
        blocks: [
          { type: "p", text: "You can\u2019t improve what you don\u2019t understand." },
          { type: "p", text: "Product can be learning from different departments\u2019 information worth using to scale. But if what is happening isn\u2019t captured, documented, and examined, useful information can disappear as quickly as it appeared." },
          { type: "p", text: "Data gives us something to return to." },
          { type: "p", text: "It helps move the conversation from:" },
          { type: "contrast", before: "I think this is happening.", after: "This is what we\u2019ve been seeing." }
        ],
        closing: "And that difference can change how a decision is made."
      }
    }
  ];

  // minimal icon set reused across step timelines
  var CC_ICONS = {
    users: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    usersPlus: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M19 8v6M22 11h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 3v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  var listEl = document.querySelector('.cc-cap-list');
  var stageEl = document.querySelector('.cc-stage');
  var bubbleEl = document.getElementById('ccCapList');
  var explorerEl = document.getElementById('ccExplorer');
  var backBtn = document.getElementById('ccBack');
  var closeBtn = document.getElementById('ccClose');
  var prevBtn = document.getElementById('ccPrev');
  var nextBtn = document.getElementById('ccNext');
  var counterEl = document.getElementById('ccCounter');
  var numberEl = document.getElementById('ccExplorerNumber');
  var titleEl = document.getElementById('ccExplorerTitle');
  var stepsEl = document.getElementById('ccSteps');
  var createsEl = document.getElementById('ccCreatesText');
  var examplesEl = document.getElementById('ccExamplesList');
  var myViewEl = document.getElementById('ccMyView');
  var realityEl = document.getElementById('ccReality');
  var stepsLabelEl = document.getElementById('ccStepsLabel');
  var liveRegionEl = document.getElementById('ccLiveRegion');
  var createsLabelEl = document.getElementById('ccCreatesLabel');
  var examplesLabelEl = document.getElementById('ccExamplesLabel');
  var realityLabelEl = document.getElementById('ccRealityLabel');

  var explorerIndex = 0;
  var rows = [];
  var highlightedIndex = -1; // none highlighted until a real click happens
  var hoverIndex = 0;        // card 1 defaults to the hover affordance

  function applyStates(){
    rows.forEach(function(r, i){
      r.classList.toggle('cc-cap-row--highlighted', i === highlightedIndex);
      r.classList.toggle('cc-cap-row--hover', i === hoverIndex && i !== highlightedIndex);
    });
  }

  function isDesktopSplit(){
    return window.matchMedia('(min-width:1024px)').matches;
  }

  function renderExplorer(i){
    var cap = CC_DATA[i];
    numberEl.textContent = String(i + 1).padStart(2, '0');
    titleEl.textContent = cap.title;
    counterEl.textContent = (i + 1) + ' / ' + CC_DATA.length;
    liveRegionEl.textContent = 'Now showing: ' + cap.title;

    // labels are data-driven — most cards use the default names, but
    // a card can rename any of the four sections (e.g. card 5 uses
    // "THE INFORMATION CYCLE" / "WHERE I USE IT" / "WHAT THIS MAKES
    // POSSIBLE" / "WHY DATA MATTERS TO ME" instead of the usual set)
    stepsLabelEl.textContent = cap.stepsLabel || 'HOW I APPROACH IT';
    createsLabelEl.textContent = cap.createsLabel || 'WHAT THIS CREATES';
    examplesLabelEl.textContent = cap.examplesLabel || 'EXAMPLES OF WHERE I\u2019VE USED THIS';
    realityLabelEl.textContent = cap.realityLabel || 'WHEN THE PLAN MEETS REALITY';

    myViewEl.innerHTML =
      cap.myView.map(function(p){ return '<p>' + p + '</p>'; }).join('') +
      (cap.myViewDiagram || ''); // optional relationship diagram, e.g. card 2's Visibility/Audience/Brand Identity triad

    stepsEl.innerHTML = cap.steps.map(function(step, idx){
      var iconMarkup = (step.icon === 'number' || !step.icon)
        ? '<span class="cc-step-num">' + String(idx + 1).padStart(2, '0') + '</span>'
        : (CC_ICONS[step.icon] || CC_ICONS.users);
      return '<div class="cc-step">' +
        '<span class="cc-step-icon">' + iconMarkup + '</span>' +
        '<div class="cc-step-body">' +
          '<p class="cc-step-title">' + step.title + '</p>' +
          '<p class="cc-step-desc">' + step.desc + '</p>' +
        '</div>' +
      '</div>';
    }).join('');

    // each item in `creates` is either a plain string (renders as a
    // paragraph) or a { type:'list', items:[...] } block — lets a
    // "what this creates"-type card carry an embedded list (card 5)
    // while every existing card's plain-string arrays keep working
    // unchanged
    createsEl.innerHTML = cap.creates.map(function(block){
      if (typeof block === 'object' && block.type === 'list'){
        return '<ul class="cc-creates-list">' + block.items.map(function(li){ return '<li>' + li + '</li>'; }).join('') + '</ul>';
      }
      return '<p>' + block + '</p>';
    }).join('');

    examplesEl.innerHTML = cap.examples.map(function(ex){
      return '<li><span class="cc-example-title">' + ex.title + '</span><span class="cc-example-sub">' + ex.sub + '</span></li>';
    }).join('');

    realityEl.innerHTML =
      (cap.reality.blocks || []).map(function(b){
        if (b.type === 'list'){
          return '<ul class="cc-reality-list">' + b.items.map(function(li){ return '<li>' + li + '</li>'; }).join('') + '</ul>';
        }
        if (b.type === 'contrast'){
          return '<div class="cc-contrast">' +
            '<span class="cc-contrast-before">&ldquo;' + b.before + '&rdquo;</span>' +
            '<span class="cc-contrast-arrow">&rarr;</span>' +
            '<span class="cc-contrast-after">&ldquo;' + b.after + '&rdquo;</span>' +
          '</div>';
        }
        return '<p>' + b.text + '</p>';
      }).join('') +
      (cap.reality.closing ? '<p class="cc-reality-closing">' + cap.reality.closing + '</p>' : '') +
      (cap.reality.diagram || '');
  }

  function selectCard(index){
    highlightedIndex = index;
    lastFocusedTrigger = rows[index]; // remember which card opened this, to restore focus on close
    applyStates();
    openExplorer(index);
  }

  var FADE_MS = 260; // must roughly match the CSS transition/animation durations above
  var lastFocusedTrigger = null; // the card button that opened the panel — focus returns here on close (mobile only)

  function openExplorer(i){
    // already open — either mid-browse via Prev/Next on mobile, or the
    // permanently-visible desktop panel — just crossfade the content
    // in place instead of running the full open/close sequence
    if (!explorerEl.hidden){
      var innerEl = explorerEl.querySelector('.cc-explorer-inner');
      innerEl.style.transition = 'opacity 0.18s ease';
      innerEl.style.opacity = '0';
      window.setTimeout(function(){
        explorerIndex = i;
        renderExplorer(i);
        innerEl.style.opacity = '1';
      }, 180);
      return;
    }

    bubbleEl.classList.add('cc-fade-out');
    window.setTimeout(function(){
      bubbleEl.hidden = true;
      bubbleEl.classList.remove('cc-fade-out');

      explorerIndex = i;
      renderExplorer(i);
      explorerEl.hidden = false;
      explorerEl.classList.remove('cc-explorer-exit');
      // restart the entrance animation every time it opens
      explorerEl.style.animation = 'none';
      void explorerEl.offsetWidth; // force reflow
      explorerEl.style.animation = '';

      stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // move focus into the panel — a screen reader / keyboard user who
      // just activated a card would otherwise have no indication that
      // new content appeared, or where it is
      if (!isDesktopSplit()){
        titleEl.focus();
      }
    }, FADE_MS);
  }

  function closeExplorer(){
    explorerEl.classList.add('cc-explorer-exit');
    window.setTimeout(function(){
      explorerEl.hidden = true;
      explorerEl.classList.remove('cc-explorer-exit');

      bubbleEl.hidden = false;
      bubbleEl.classList.add('cc-fade-out');
      void bubbleEl.offsetWidth; // force reflow so the fade-in actually plays
      bubbleEl.classList.remove('cc-fade-out');

      stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // return focus to whichever card opened the panel, rather than
      // dropping it back to the top of the page
      if (lastFocusedTrigger){ lastFocusedTrigger.focus(); }
    }, FADE_MS);
  }

  // Escape closes the panel — only meaningful on mobile, where it's a
  // true overlay; on desktop it's a permanently-visible column, so
  // there's nothing to "close"
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !explorerEl.hidden && !isDesktopSplit()){
      closeExplorer();
    }
  });

  // Basic focus trap while the mobile overlay is open — keeps Tab /
  // Shift+Tab cycling within the panel instead of escaping to
  // whatever's underneath it, since visually it covers the page
  document.addEventListener('keydown', function(e){
    if (e.key !== 'Tab' || explorerEl.hidden || isDesktopSplit()) return;
    var focusable = explorerEl.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first){
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last){
      e.preventDefault();
      first.focus();
    }
  });

  backBtn.addEventListener('click', closeExplorer);
  closeBtn.addEventListener('click', closeExplorer);
  prevBtn.addEventListener('click', function(){
    var i = (explorerIndex - 1 + CC_DATA.length) % CC_DATA.length;
    highlightedIndex = i;
    applyStates();
    openExplorer(i);
  });
  nextBtn.addEventListener('click', function(){
    var i = (explorerIndex + 1) % CC_DATA.length; // wraps 5 -> 1
    highlightedIndex = i;
    applyStates();
    openExplorer(i);
  });

  CC_DATA.forEach(function(cap, i){
    // Wrapping the button in a role="listitem" container instead of
    // putting that role directly on the button — role="listitem" on
    // a <button> overrides its implicit button role, so a screen
    // reader would announce it as a plain list item instead of
    // something clickable. The wrapper carries the list semantics;
    // the button keeps its own.
    var item = document.createElement('div');
    item.setAttribute('role', 'listitem');
    item.setAttribute('data-reveal', '');

    var row = document.createElement('button');
    row.type = 'button';
    row.className = 'cc-cap-row';
    row.setAttribute('aria-label', 'View details for ' + cap.title);
    row.innerHTML =
      '<span class="cc-cap-title">' + cap.title + '</span>' +
      '<p class="cc-cap-line">' + cap.line + '</p>';
    row.addEventListener('click', function(){ selectCard(i); });

    item.appendChild(row);
    listEl.appendChild(item);
    rows.push(row);
  });

  applyStates(); // card 1 starts on hover; nothing starts highlighted (mobile default)

  // Desktop: the Explorer is permanently visible and card 1 is
  // highlighted by default, instead of mobile's hover-only default.
  function syncDesktopDefault(){
    if (isDesktopSplit() && explorerEl.hidden){
      explorerIndex = 0;
      renderExplorer(0);
      explorerEl.hidden = false;
      highlightedIndex = 0;
      applyStates();
    }
  }
  syncDesktopDefault();
  window.addEventListener('resize', syncDesktopDefault);

  // Match the Explorer panel's total height to the cards column's real
  // rendered height (CSS alone can't reliably do this in a grid with
  // auto-sized rows — see the note above the .cc-stage rule). Runs on
  // load, on any resize, and whenever the cards column's own size
  // changes (e.g. text reflow at a new width).
  function syncExplorerHeight(){
    if (isDesktopSplit()){
      var h = bubbleEl.getBoundingClientRect().height;
      explorerEl.style.height = h + 'px';
    } else {
      explorerEl.style.height = '';
    }
  }
  if (window.ResizeObserver){
    new ResizeObserver(syncExplorerHeight).observe(bubbleEl);
  }
  window.addEventListener('resize', syncExplorerHeight);
  syncExplorerHeight();

  // as the visitor scrolls, the hover affordance follows whichever card
  // sits nearest the top of the viewport — stops mattering once a card
  // has actually been clicked/highlighted, but keeps updating underneath
  var scrollTicking = false;
  function updateHoverByScroll(){
    scrollTicking = false;
    var refLine = window.innerHeight * 0.35; // reference line near upper third of screen
    var closestIndex = null;
    var closestDist = Infinity;
    rows.forEach(function(r, i){
      var rect = r.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return; // not on screen
      var dist = Math.abs(rect.top - refLine);
      if (dist < closestDist){ closestDist = dist; closestIndex = i; }
    });
    if (closestIndex !== null){
      hoverIndex = closestIndex;
      applyStates();
    }
  }
  window.addEventListener('scroll', function(){
    if (!scrollTicking){
      window.requestAnimationFrame(updateHoverByScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  // quote box scroll hints — hide the up arrow at the top,
  // hide the down arrow once fully scrolled to the bottom
  var quoteBody = document.getElementById('ccQuoteBody');
  var scrollUp = document.getElementById('ccScrollUp');
  var scrollDown = document.getElementById('ccScrollDown');
  function updateScrollHints(){
    var atTop = quoteBody.scrollTop <= 2;
    var atBottom = quoteBody.scrollTop + quoteBody.clientHeight >= quoteBody.scrollHeight - 2;
    scrollUp.classList.toggle('cc-hint-hidden', atTop);
    scrollDown.classList.toggle('cc-hint-hidden', atBottom);
  }
  quoteBody.addEventListener('scroll', updateScrollHints);
  updateScrollHints();
})();
