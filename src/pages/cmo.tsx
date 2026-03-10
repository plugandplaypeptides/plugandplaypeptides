// All image URLs from image_search (licensed)
const IMGS = {
  heroAthlete:      'https://sspark.genspark.ai/cfimages?u1=ZdowuU602ahWL4IcSs5hMShhG1QbJ0YZFvtHBh32Mec03d0%2BmXNE2Wtxv7tw3HV1UhItixvyFrDuzKnV%2FhFmgIubCydpsDvWB9v0C%2BlqZvjxhJj8Xjngy%2FmV49P4970zhsOAzUDsp18Jx%2BuceLgVCk7ZCJh4NUEzvPLYIAfLJceksLMCCo9CLAJYRic%3D&u2=eVUZt9TGwAzZCnnY&width=2560',
  coupleJog:        'https://sspark.genspark.ai/cfimages?u1=YlOOMyA3N8i%2Fzj2uekkQlVklXzjPq%2FRgVZj7zL66tQqaHoTOrVNGatm3go3W7h2MjW9tzBwMJoCB%2BJ%2FeQuCK6m8kAx1eO%2FW%2B9qnTC%2BxDHPtxuA%3D%3D&u2=R03jZHwAEMg8fKLz&width=2560',
  creatorWoman:     'https://sspark.genspark.ai/cfimages?u1=eEf1KxscPQXV%2F5SIVb3w%2Fw4Leotk6%2BFuY7muE%2FOBwq9u%2F6qrJDvVjLLl4o8AfV4tB4OnpkT25hJ0zFh6nYOuYKfwJvoucjpKCZbzi5b5LUEOGg%3D%3D&u2=mbVXo%2BVqexsSj1jC&width=2560',
  creatorMan:       'https://sspark.genspark.ai/cfimages?u1=JSOQyYk%2FBbS8csUbiHaKTp7ZCjTUS7%2BStjkgBvW6gnWxyqHI9M%2Bd6AwcP6i2HcQnBvHP2snAPfAaeYtmkYbcaF66ubWJqNjEuoojEDsdnjM%2BUA%3D%3D&u2=tQGTQJ7ot9JtaMYS&width=2560',
  doctorTelehealth: 'https://sspark.genspark.ai/cfimages?u1=BQnS04fN7YRxdMstKz5TMSAI7yp58IQbp6Z29nFozDsFIZRvHukIF7XjbxrUJPv7muoQZ85kw65Vcux5rFX%2FgYJQA5N2s8sIKf%2F8wAo%2Fh1Hq5w%3D%3D&u2=tC9P5GGTcIYRSP1J&width=2560',
  doctorFemale:     'https://sspark.genspark.ai/cfimages?u1=Hoin65eiqZ0oMAQoq5ABA7X9Bn%2B4t8e%2BDh%2FyipUGJFMXaZt92nNxqUBXBBVk6rz3Oykuqzeqei4KynA6BDmovBVaKptcG%2BZediiNfHeeVCHaGg%3D%3D&u2=s695TUWMqzau4tWq&width=2560',
  medSpa:           'https://sspark.genspark.ai/cfimages?u1=tuHgjNrdFR%2BvpEL0pv%2Bdgh7o321cO0mSUNSAiD3XrCWwwCVHWeBz7GKP%2BVVer034Pe7y1FQNcsxhB8NVV63PUd5zIWGtdXg4ldL24YWsVtva0DX1G9yDc5bpjX8fn8ERJj7qgbDBVYW5AvPE1a6RGIYVz2Cz0VmyVyUFu2cVb4y57hkbv4UFvvefxg%3D%3D&u2=IhmJUJyZEm8nfDoS&width=2560',
  womanSmiling:     'https://sspark.genspark.ai/cfimages?u1=2jjgGW47VW50pEzJKshJj1lQ7pg8Re3i%2Fqs8tu6JDS6zWgK470LMao%2FAUH8SVQExMG0XIBGxOwYG14%2BuxQZgE1j%2BOKRi01z4u66ms8FF9o0fXA%3D%3D&u2=ABarFACbt16CiY8J&width=2560',
  coupleSport:      'https://sspark.genspark.ai/cfimages?u1=nDjtvHtqLJc9YeJ2rjT4gfB0Ufr1jgGgfRfbKjXcdd246hUJTW938KPZE%2F%2B49Ak0%2BqGP41I40AcFckX4Q7ZqdOHcsqUfKRlyZbgVfYqTb4BCwhnerbY%2FxBwCigw5kqgLxMpHERrFAraaINNrdakgXagFB4rDqUI%3D&u2=K3DVyzlSrZh6uQlR&width=2560',
  influencerTripod: 'https://sspark.genspark.ai/cfimages?u1=AY73JZRcY7b6B7AYxKvRKi62CmryShXlDLZmd90HmUtx2s1PboS8%2F8znwZ7CR5pBwwHsc7N%2Ft5p6%2BbO9i5rNYNfDzGs5AW3WbN1GD%2B40cugjTQ%3D%3D&u2=ZphExal%2BUAfUfRl&width=2560',
}

export const cmoPage = () => (
  <>

    {/* ══════════════════════════════════════════════════════════
        § 1  HERO — Full viewport, image IS the design.
        100vh background photograph. Gradient overlay.
        Headline in the lower-left in large DM Serif italic white.
        Nothing else competes. This is how Hims opens.
    ══════════════════════════════════════════════════════════ */}
    <section class="cmo-hero-fullvp" id="cmo-hero">

      {/* Background photograph — fills the entire viewport */}
      <div class="cmo-hero-bg" aria-hidden="true">
        <img
          src={IMGS.heroAthlete}
          alt=""
          class="cmo-hero-bg-img"
          id="cmo-hero-img"
          loading="eager"
        />
        {/* Multi-layer gradient: top vignette + strong bottom-to-top dark ramp */}
        <div class="cmo-hero-overlay"></div>
        {/* Subtle green tint to hint at brand */}
        <div class="cmo-hero-tint"></div>
      </div>

      {/* Headline — anchored bottom-left, white, large DM Serif italic */}
      <div class="cmo-hero-content">

        {/* Eyebrow — small, subtle, top-left */}
        <div class="cmo-hero-eyebrow">
          <span class="cmo-hero-eyebrow-dot"></span>
          CMO Marketing Suite
        </div>

        {/* THE headline. Three staggered lines. The image is the punctuation. */}
        <h1 class="cmo-hero-h1" id="cmo-hero-h1">
          <span class="cmo-h1-line" style="animation-delay:0.1s;">Creating a Legit Peptide</span>
          <span class="cmo-h1-line" style="animation-delay:0.22s;">Company is the Easy Part.</span>
          <span class="cmo-h1-line cmo-h1-gap" style="animation-delay:0.36s;">&nbsp;</span>
          <span class="cmo-h1-line" style="animation-delay:0.48s;">Competing with Silicon</span>
          <span class="cmo-h1-line" style="animation-delay:0.60s;">Valley Giants is</span>
          <span class="cmo-h1-line" style="animation-delay:0.72s;">the Hard Part.</span>
          <span class="cmo-h1-line cmo-h1-gap" style="animation-delay:0.84s;">&nbsp;</span>
          <span class="cmo-h1-line cmo-h1-until" style="animation-delay:0.96s;"><em>Until Now.</em></span>
        </h1>

        {/* CTA row — bottom left, below headline */}
        <div class="cmo-hero-cta" style="animation-delay:1.1s;">
          <a href="/apply?type=business" class="cmo-hero-btn-primary">
            Apply as a Business →
          </a>
          <a href="/apply?type=influencer" class="cmo-hero-btn-ghost">
            Apply as a Creator
          </a>
        </div>

      </div>

      {/* Scroll nudge — center bottom */}
      <div class="cmo-hero-scroll-hint" aria-hidden="true">
        <div class="cmo-scroll-line"></div>
        <span>scroll</span>
      </div>

      {/* Competitor strip — stuck to bottom of hero, dark bar */}
      <div class="cmo-competitor-strip">
        <p class="cmo-strip-label">You're competing against</p>
        <div class="marquee-wrap" style="flex:1; overflow:hidden;">
          <div class="flex gap-12 marquee-left" style="width:max-content; padding:0;">
            {['Hims & Hers','Roman','Ro Health','Noom Med','Found','Calibrate','Sequence','Sesame Care','Cerebral','Done',
              'Hims & Hers','Roman','Ro Health','Noom Med','Found','Calibrate','Sequence','Sesame Care','Cerebral','Done'].map((n,i) => (
              <span key={i} class="cmo-competitor-name">{n}</span>
            ))}
          </div>
        </div>
      </div>

    </section>


    {/* ══════════════════════════════════════════════════════════
        § 2  THE PROBLEM — Cream cap
        Show the gap viscerally. Not a list of features they lack —
        a felt experience of being outgunned.
        Layout: massive editorial image left, confrontational copy right.
    ══════════════════════════════════════════════════════════ */}
    <section class="section-cap-top section-cream overflow-hidden" style="padding-top:5rem; padding-bottom:5rem;">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="cmo-problem-grid">

          {/* ── Left: editorial image stack ── */}
          <div class="cmo-problem-images cmo-reveal">
            <div class="cmo-img-stack">
              {/* Back card — slight rotate */}
              <div class="cmo-img-back">
                <img src={IMGS.medSpa} alt="" class="w-full h-full object-cover" />
              </div>
              {/* Front card */}
              <div class="cmo-img-front">
                <img src={IMGS.doctorFemale} alt="" class="w-full h-full object-cover" />
                {/* Metric overlay */}
                <div class="cmo-img-overlay">
                  <span class="cmo-overlay-label">Their checkout</span>
                  <span class="cmo-overlay-stat">converts 3× better</span>
                  <div class="cmo-overlay-bar">
                    <div class="cmo-overlay-bar-fill" style="width:85%;"></div>
                  </div>
                  <span class="cmo-overlay-sub">A/B tested on millions of patients</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: the copy ── */}
          <div class="cmo-problem-copy cmo-reveal" style="transition-delay:0.15s;">
            <span class="label-caps block mb-6">The Problem</span>
            <h2 class="display-serif text-gray-900 mb-8" style="font-size:clamp(2.2rem,4vw,4rem); line-height:1.07;">
              They don't just have<br />
              more money.<br />
              <em style="color:#16a34a;">They have a better<br />machine.</em>
            </h2>

            <div class="space-y-6">
              {[
                {
                  heading: "They know you're leaving before you do.",
                  body: "Predictive models built on millions of patient events fire re-engagement sequences weeks before a patient considers canceling. That window — your second chance — fires automatically. Yours doesn't.",
                },
                {
                  heading: "Their brand lives in patients' heads rent-free.",
                  body: "Every patient who orders from Hims enters a post-purchase experience so well-designed that the brand becomes part of their identity. You ship a box. They build a relationship.",
                },
                {
                  heading: "Their revenue compounds. Yours resets every month.",
                  body: "When every retained patient fuels acquisition, every protocol completion unlocks an upsell, and every referral compounds the base — revenue doesn't grow linearly. It accelerates. That's what you're up against.",
                },
              ].map((item, i) => (
                <div key={i} class="cmo-problem-row cmo-reveal" style={`transition-delay:${0.25 + i*0.1}s;`}>
                  <div class="cmo-problem-row-num">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-base mb-1.5 leading-snug">{item.heading}</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        § 3  THE REVEAL — White cap
        No feature list. Pure desire.
        The CMO Suite is introduced as a feeling, not a product.
        Layout: centered editorial block → horizontal benefit cards.
    ══════════════════════════════════════════════════════════ */}
    <section class="section-cap-top section-white overflow-hidden" style="padding-top:6rem; padding-bottom:6rem;">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        {/* The pivot — centered, commanding */}
        <div class="cmo-reveal text-center mb-20">
          <span class="label-caps block mb-6">The CMO Marketing Suite</span>
          <h2 class="display-serif text-gray-900 mb-8 mx-auto" style="font-size:clamp(2.6rem,5.5vw,5.2rem); line-height:1.05; max-width:820px;">
            What took Hims $100M<br />and five years to build —<br />
            <em style="color:#16a34a;">yours on day one.</em>
          </h2>
          <p class="text-gray-500 text-xl leading-relaxed mx-auto" style="max-width:580px; font-weight:400;">
            Not software. Not a dashboard. A complete growth machine — retention, acquisition, conversion, and intelligence — running under your brand, without a single hire.
          </p>
        </div>

        {/* Benefit cards — horizontal scroll on mobile, grid on desktop */}
        <div class="cmo-benefit-grid">
          {[
            {
              tag:     'Retention',
              desire:  'Patients who never leave.',
              body:    'The moment someone orders, a relationship begins. Check-ins, protocol updates, reorder signals — all timed precisely. Your patients feel cared for because they are.',
              img:     IMGS.womanSmiling,
              accent:  '#d1fae5',
            },
            {
              tag:     'Acquisition',
              desire:  'New patients who cost less to find.',
              body:    'Every retained patient becomes a referral engine. Every outcome story becomes social proof. Acquisition compounds the longer you run — without spending more.',
              img:     IMGS.influencerTripod,
              accent:  '#dbeafe',
            },
            {
              tag:     'Revenue',
              desire:  'Money that arrives while you sleep.',
              body:    'Protocol progressions. Smart reorders. Tiered plans. Every patient journey is designed to extend naturally — turning a one-time buyer into a years-long relationship.',
              img:     IMGS.coupleSport,
              accent:  '#fef9c3',
            },
            {
              tag:     'Intelligence',
              desire:  'You know what\'s working before your competitors notice.',
              body:    'Cohort data, LTV signals, churn patterns — surfaced and acted on automatically. You don\'t need a data team. The intelligence is built in.',
              img:     IMGS.doctorTelehealth,
              accent:  '#f3e8ff',
            },
          ].map((card, i) => (
            <div key={i} class="cmo-benefit-card cmo-reveal float-card" style={`transition-delay:${i*0.1}s; --card-accent:${card.accent};`}>
              <div class="cmo-benefit-img">
                <img src={card.img} alt="" class="w-full h-full object-cover" />
                <div class="cmo-benefit-img-overlay"></div>
              </div>
              <div class="cmo-benefit-body">
                <span class="cmo-benefit-tag" style={`background:${card.accent};`}>{card.tag}</span>
                <h3 class="display-serif text-gray-900 mt-4 mb-3" style="font-size:1.4rem; line-height:1.2;">{card.desire}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        § 4  WHAT IT FEELS LIKE — Cream cap
        Visceral. Present tense. Not "you will have" — "you have."
        Layout: full-bleed image left panel, animated activity feed right.
        Motion: cards slide in sequentially on scroll.
    ══════════════════════════════════════════════════════════ */}
    <section class="section-cap-top section-cream overflow-hidden" style="padding-top:0; padding-bottom:0;">
      <div class="cmo-feel-wrapper">

        {/* ── Left: full-height image ── */}
        <div class="cmo-feel-image" aria-hidden="true">
          <img src={IMGS.creatorWoman} alt="" class="w-full h-full object-cover" />
          <div class="cmo-feel-image-overlay"></div>
          <div class="cmo-feel-image-copy">
            <p class="display-serif text-white" style="font-size:clamp(2rem,3.5vw,3.2rem); line-height:1.1; max-width:360px;">
              You wake up.<br />
              Your brand grew<br />
              <em style="color:#4ade80;">while you slept.</em>
            </p>
          </div>
        </div>

        {/* ── Right: the "live" activity feed ── */}
        <div class="cmo-feel-right">
          <div class="cmo-feel-right-inner">
            <span class="label-caps block mb-2">What it feels like</span>
            <p class="text-gray-600 text-lg leading-relaxed mb-10" style="max-width:400px;">
              Every morning your brand has been working overnight. Not metaphorically. Literally.
            </p>

            <div class="space-y-4" id="cmo-feed">
              {[
                {
                  label:  'Retention',
                  color:  '#dcfce7',
                  border: '#bbf7d0',
                  text:   'A patient who ordered 18 days ago received a reorder prompt at exactly the right moment. They\'re checking out now.',
                  time:   'Just now',
                },
                {
                  label:  'LTV',
                  color:  '#dbeafe',
                  border: '#bfdbfe',
                  text:   'A patient completed their first semaglutide protocol. A physician-guided progression to the next tier started automatically.',
                  time:   '4 min ago',
                },
                {
                  label:  'Win-Back',
                  color:  '#fef3c7',
                  border: '#fde68a',
                  text:   'A patient who went quiet at day 12 received a personalized check-in. They replied, and reordered.',
                  time:   '19 min ago',
                },
                {
                  label:  'Referral',
                  color:  '#f3e8ff',
                  border: '#e9d5ff',
                  text:   'A patient referred two friends. Both completed intake. All three patients now carry your brand.',
                  time:   '41 min ago',
                },
                {
                  label:  'Intelligence',
                  color:  '#f0fdf4',
                  border: '#bbf7d0',
                  text:   'Cohort data flagged that tirzepatide patients have 22% higher 90-day LTV in your brand. Logged for review.',
                  time:   '1 hr ago',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  class="cmo-feed-card cmo-stagger-feed"
                  style={`--feed-delay:${i * 120}ms;`}
                >
                  <div class="cmo-feed-dot" style={`background:${item.border};`}></div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between mb-1.5">
                      <span
                        class="cmo-feed-tag"
                        style={`background:${item.color}; border-color:${item.border};`}
                      >
                        {item.label}
                      </span>
                      <span class="text-gray-400 text-xs">{item.time}</span>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p class="text-gray-400 text-xs italic mt-6 text-center">
              All of this. While you were doing something else.
            </p>
          </div>
        </div>

      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        § 5  PROOF — White cap
        Real partner voices. Transformation language only.
        Layout: 1 large feature testimonial + 2 stacked smaller ones.
    ══════════════════════════════════════════════════════════ */}
    <section class="section-cap-top section-white overflow-hidden" style="padding-top:6rem; padding-bottom:6rem;">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="cmo-reveal mb-16">
          <span class="label-caps block mb-4">Partner Results</span>
          <h2 class="display-serif text-gray-900" style="font-size:clamp(2.2rem,4.5vw,4rem); line-height:1.07; max-width:680px;">
            What changes when you<br />
            <em style="color:#16a34a;">stop competing alone.</em>
          </h2>
        </div>

        <div class="cmo-proof-grid">

          {/* Featured quote — large card with image */}
          <div class="cmo-proof-main cmo-reveal float-card">
            <div class="cmo-proof-main-img">
              <img src={IMGS.creatorMan} alt="" class="w-full h-full object-cover" />
            </div>
            <div class="cmo-proof-main-body">
              <div class="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => <span key={s} class="text-amber-400 text-base">★</span>)}
              </div>
              <blockquote class="display-serif text-gray-900 mb-6" style="font-size:1.5rem; line-height:1.3; font-style:italic;">
                "Month one I made $22,400. But what actually surprised me was month three — I hadn't run a single new ad. The revenue came from patients who already ordered."
              </blockquote>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">A</div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">Alex M.</p>
                  <p class="text-gray-400 text-xs">Fitness Creator · 800K followers</p>
                </div>
                <span class="ml-auto bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">$22,400 month 1</span>
              </div>
            </div>
          </div>

          {/* Two stacked quotes */}
          <div class="cmo-proof-stack">

            <div class="cmo-proof-card cmo-reveal float-card" style="transition-delay:0.1s;">
              <div class="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => <span key={s} class="text-amber-400 text-sm">★</span>)}
              </div>
              <p class="text-gray-700 text-base leading-relaxed mb-6 italic">
                "I own a med spa. I know what a real patient experience looks like. What my brand delivers through Plug &amp; Play is better than most clinics I've seen — and I'm not managing any of it."
              </p>
              <div class="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">S</div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">Dr. Sarah K.</p>
                  <p class="text-gray-400 text-xs">Med Spa Owner · Miami, FL</p>
                </div>
                <span class="ml-auto bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">$45K/mo recurring</span>
              </div>
            </div>

            <div class="cmo-proof-card cmo-reveal float-card" style="transition-delay:0.2s;">
              <div class="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => <span key={s} class="text-amber-400 text-sm">★</span>)}
              </div>
              <p class="text-gray-700 text-base leading-relaxed mb-6 italic">
                "I've promoted brands for years. This is the first time I've promoted something where the brand itself keeps the relationship alive after I send someone. My audience trusts me more, not less."
              </p>
              <div class="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">J</div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">Jordan T.</p>
                  <p class="text-gray-400 text-xs">Biohacking Creator · 1.2M followers</p>
                </div>
                <span class="ml-auto bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">Audience trust preserved</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    {/* ══════════════════════════════════════════════════════════
        § 6  CTA — Green cap
        The loop closes. One clear ask.
        Layout: large serif closer left + outcomes column right.
        Motion: text reveals on scroll, button pulses.
    ══════════════════════════════════════════════════════════ */}
    <section class="section-cap-top section-green overflow-hidden" style="padding-top:7rem; padding-bottom:7rem;">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="cmo-cta-grid">

          {/* ── Left: the close ── */}
          <div class="cmo-reveal">
            <span class="label-caps block mb-6" style="color:#15803d;">One partner per niche</span>
            <h2 class="display-serif text-gray-900 mb-8" style="font-size:clamp(2.6rem,5.5vw,5.2rem); line-height:1.05;">
              The hard part<br />
              just got<br />
              <em style="color:#16a34a;">a lot easier.</em>
            </h2>
            <p class="text-gray-600 text-xl leading-relaxed mb-4" style="max-width:480px; font-weight:400;">
              The CMO Suite is included with every Plug &amp; Play partnership. The compliance infrastructure, the physician network, fulfillment, and the full growth machine — all under your brand.
            </p>
            <p class="text-gray-500 text-base mb-10" style="max-width:440px;">
              We accept one partner per niche and geography. The brands applying today are the ones who will own this space.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/apply?type=business" class="btn-black cmo-cta-pulse" style="font-size:1rem; padding:16px 36px;">
                Apply as a Business →
              </a>
              <a href="/apply?type=influencer" class="btn-outline-black" style="font-size:1rem; padding:15px 36px;">
                Apply as a Creator
              </a>
            </div>
            <p class="mt-5 text-gray-400 text-sm flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="5" width="10" height="7" rx="1.5" stroke="#9ca3af" stroke-width="1.2"/><path d="M4 5V3.5a2 2 0 014 0V5" stroke="#9ca3af" stroke-width="1.2"/></svg>
              5-minute application · 100% confidential · No commitment required
            </p>
          </div>

          {/* ── Right: outcomes (written as desires, not features) ── */}
          <div class="space-y-4">
            <p class="label-caps mb-6">What you wake up with</p>
            {[
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                desire: 'A physician-supervised brand that passes any audit.',
                sub:    'FDA-registered pharmacies · Licensed MDs in all 50 states · HIPAA-compliant platform',
              },
              {
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                desire: 'Patients who feel like they\'re cared for by a real brand.',
                sub:    'Onboarding · Check-ins · Reorders · Protocol progressions — all automatic, all under your brand',
              },
              {
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                desire: 'Revenue that grows without proportional effort.',
                sub:    'Retention engine · Referral loops · Protocol upsells — compounding month over month',
              },
              {
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                desire: 'Intelligence that gets smarter every month.',
                sub:    'LTV cohorts · Churn signals · Acquisition data — surfaced and acted on automatically',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                desire: 'Live in 2–4 weeks. No staff. No overhead.',
                sub:    'We build everything. You promote your brand. We handle the rest.',
              },
            ].map((item, i) => (
              <div key={i} class="cmo-reveal cmo-outcome-row float-card" style={`transition-delay:${i * 0.07}s;`}>
                <div class="cmo-outcome-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d={item.icon}/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm mb-0.5">{item.desire}</p>
                  <p class="text-gray-400 text-xs leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>


    {/* ──────────────────────────────────────────────
        STYLES — CMO page additions
    ────────────────────────────────────────────── */}
    <style dangerouslySetInnerHTML={{ __html: `

      /* ══════════════════════════════════════════
         HERO — Full viewport image hero
         Photograph IS the design. Text overlays it.
      ══════════════════════════════════════════ */

      /* Remove the default pt-16 body padding for this section only */
      #cmo-hero { margin-top: -4px; }

      .cmo-hero-fullvp {
        position: relative;
        width: 100%;
        height: 100svh;
        min-height: 700px;
        max-height: 1000px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      /* Background photograph */
      .cmo-hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .cmo-hero-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 60% center;
        transform: scale(1.04);
        animation: heroKenBurns 18s ease-in-out forwards;
      }
      @keyframes heroKenBurns {
        from { transform: scale(1.04); }
        to   { transform: scale(1.0);  }
      }

      /* Gradient overlay — heavy at bottom, light at top */
      .cmo-hero-overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(to bottom,
            rgba(0,0,0,0.22) 0%,
            rgba(0,0,0,0.10) 30%,
            rgba(0,0,0,0.55) 65%,
            rgba(0,0,0,0.82) 100%);
      }

      /* Subtle green brand tint on bottom third */
      .cmo-hero-tint {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top,
          rgba(22,163,74,0.12) 0%,
          transparent 45%);
      }

      /* Content — positioned bottom-left, z-index above overlays */
      .cmo-hero-content {
        position: relative;
        z-index: 2;
        margin-top: auto;
        padding: 0 clamp(1.5rem, 6vw, 5rem) 6rem;
        max-width: 920px;
      }

      /* Eyebrow — small pill top-left, appears first */
      .cmo-hero-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: rgba(255,255,255,0.7);
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        opacity: 0;
        animation: heroFadeUp 0.6s ease 0.05s forwards;
      }
      .cmo-hero-eyebrow-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #4ade80;
        animation: pulse 2s ease-in-out infinite;
      }

      /* The headline — DM Serif Display, white, stacked lines */
      .cmo-hero-h1 {
        font-family: 'DM Serif Display', Georgia, serif;
        font-weight: 400;
        font-size: clamp(2.8rem, 6.5vw, 7rem);
        line-height: 1.04;
        letter-spacing: -0.02em;
        color: #fff;
        margin: 0 0 2.5rem;
        display: flex;
        flex-direction: column;
      }

      /* Each line animates in independently */
      .cmo-h1-line {
        display: block;
        opacity: 0;
        transform: translateY(20px);
        animation: heroFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
      }
      .cmo-h1-gap { line-height: 0.35; }
      .cmo-h1-until {
        color: #4ade80;
        font-style: italic;
      }
      .cmo-h1-until em { font-style: italic; }

      @keyframes heroFadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* CTA row */
      .cmo-hero-cta {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        opacity: 0;
        animation: heroFadeUp 0.6s ease forwards;
      }
      .cmo-hero-btn-primary {
        display: inline-flex;
        align-items: center;
        background: #fff;
        color: #111;
        font-size: 0.95rem;
        font-weight: 700;
        padding: 14px 32px;
        border-radius: 100px;
        text-decoration: none;
        transition: background 0.2s, transform 0.15s;
        letter-spacing: -0.01em;
      }
      .cmo-hero-btn-primary:hover { background: #f3f4f6; transform: translateY(-1px); }
      .cmo-hero-btn-ghost {
        display: inline-flex;
        align-items: center;
        background: rgba(255,255,255,0.12);
        color: #fff;
        font-size: 0.95rem;
        font-weight: 600;
        padding: 13px 32px;
        border-radius: 100px;
        border: 1.5px solid rgba(255,255,255,0.35);
        text-decoration: none;
        transition: background 0.2s, border-color 0.2s;
        backdrop-filter: blur(6px);
      }
      .cmo-hero-btn-ghost:hover {
        background: rgba(255,255,255,0.20);
        border-color: rgba(255,255,255,0.6);
      }

      /* Scroll hint — center bottom of hero */
      .cmo-hero-scroll-hint {
        position: absolute;
        bottom: 5.5rem;
        right: clamp(1.5rem, 4vw, 4rem);
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        color: rgba(255,255,255,0.45);
        font-size: 0.62rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0;
        animation: heroFadeUp 0.6s ease 1.3s forwards;
      }
      .cmo-scroll-line {
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
        animation: scrollPulse 2s ease-in-out infinite;
      }
      @keyframes scrollPulse {
        0%, 100% { opacity: 0.5; transform: scaleY(1); }
        50%       { opacity: 1;   transform: scaleY(0.7); }
      }

      /* Competitor strip — dark, stuck to bottom of hero */
      .cmo-competitor-strip {
        position: relative;
        z-index: 3;
        background: rgba(8,8,8,0.88);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255,255,255,0.07);
        padding: 13px 0;
        display: flex;
        align-items: center;
        gap: 2rem;
        overflow: hidden;
        flex-shrink: 0;
      }
      .cmo-strip-label {
        flex-shrink: 0;
        padding-left: clamp(1.5rem, 4vw, 3rem);
        font-size: 0.62rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.3);
        white-space: nowrap;
      }
      .cmo-competitor-name {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: rgba(255,255,255,0.22);
        white-space: nowrap;
        flex-shrink: 0;
        text-transform: uppercase;
        transition: color 0.2s;
      }
      .cmo-competitor-name:hover { color: rgba(255,255,255,0.55); }

      /* Mobile: shrink hero headline */
      @media (max-width: 640px) {
        .cmo-hero-h1 { font-size: clamp(2.2rem, 9vw, 3.5rem); }
        .cmo-hero-content { padding-bottom: 5rem; }
      }

      /* ── Section 2: Problem ── */
      .cmo-problem-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: start;
      }
      @media (max-width: 1023px) {
        .cmo-problem-grid { grid-template-columns: 1fr; gap: 3rem; }
        .cmo-problem-images { display: none; }
      }
      .cmo-img-stack {
        position: relative;
        height: 520px;
      }
      .cmo-img-back {
        position: absolute;
        top: 30px; left: 30px; right: -15px; bottom: -15px;
        border-radius: 24px;
        overflow: hidden;
        transform: rotate(2.5deg);
        box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        opacity: 0.6;
      }
      .cmo-img-front {
        position: absolute;
        top: 0; left: 0; right: 15px; bottom: 15px;
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.14);
      }
      .cmo-img-overlay {
        position: absolute;
        bottom: 20px; left: 20px; right: 20px;
        background: rgba(255,255,255,0.92);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 16px 20px;
        z-index: 5;
      }
      .cmo-overlay-label {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #9ca3af;
        display: block;
        margin-bottom: 4px;
      }
      .cmo-overlay-stat {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.1rem;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.03em;
        display: block;
        margin-bottom: 8px;
      }
      .cmo-overlay-bar {
        height: 4px;
        background: #f3f4f6;
        border-radius: 100px;
        overflow: hidden;
        margin-bottom: 6px;
      }
      .cmo-overlay-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #16a34a, #4ade80);
        border-radius: 100px;
        animation: growBar 1.8s cubic-bezier(0.4,0,0.2,1) 0.6s both;
      }
      .cmo-overlay-sub {
        font-size: 0.7rem;
        color: #9ca3af;
        display: block;
      }

      .cmo-problem-copy { padding-top: 2rem; }
      .cmo-problem-row {
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
        padding: 1.25rem 0;
        border-top: 1px solid #e5e7eb;
      }
      .cmo-problem-row-num {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.8rem;
        font-weight: 900;
        color: #f3f4f6;
        line-height: 1;
        flex-shrink: 0;
        letter-spacing: -0.05em;
        min-width: 2.5rem;
      }

      /* ── Section 3: Benefit cards ── */
      .cmo-benefit-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
      }
      @media (max-width: 1279px) { .cmo-benefit-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 639px)  { .cmo-benefit-grid { grid-template-columns: 1fr; } }

      .cmo-benefit-card {
        border-radius: 24px;
        overflow: hidden;
        background: #fff;
        border: 1px solid #e5e7eb;
        transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
      }
      .cmo-benefit-card:hover {
        transform: translateY(-8px) rotate(-0.3deg);
        box-shadow: 0 28px 70px rgba(0,0,0,0.09);
      }
      .cmo-benefit-img {
        position: relative;
        height: 200px;
        overflow: hidden;
      }
      .cmo-benefit-img img { transition: transform 0.7s ease; }
      .cmo-benefit-card:hover .cmo-benefit-img img { transform: scale(1.05); }
      .cmo-benefit-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.25) 100%);
      }
      .cmo-benefit-body {
        padding: 1.5rem;
      }
      .cmo-benefit-tag {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 100px;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #374151;
      }

      /* ── Section 4: Feel wrapper ── */
      .cmo-feel-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 700px;
      }
      @media (max-width: 1023px) {
        .cmo-feel-wrapper { grid-template-columns: 1fr; }
        .cmo-feel-image  { height: 340px; }
      }
      .cmo-feel-image {
        position: relative;
        overflow: hidden;
      }
      .cmo-feel-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .cmo-feel-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 100%);
        z-index: 1;
      }
      .cmo-feel-image-copy {
        position: absolute;
        bottom: 3rem; left: 3rem;
        z-index: 2;
      }
      .cmo-feel-right {
        background: #F7F6F2;
        display: flex;
        align-items: center;
        padding: 4rem 3rem;
      }
      .cmo-feel-right-inner { width: 100%; max-width: 520px; }

      .cmo-feed-card {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        background: #fff;
        border-radius: 16px;
        padding: 1rem 1.25rem;
        border: 1px solid #e5e7eb;
        opacity: 0;
        transform: translateX(24px);
        transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
      }
      .cmo-feed-card.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .cmo-feed-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); }
      .cmo-feed-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 5px;
      }
      .cmo-feed-tag {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 100px;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        border: 1px solid;
        color: #374151;
      }

      /* ── Section 5: Proof grid ── */
      .cmo-proof-grid {
        display: grid;
        grid-template-columns: 5fr 4fr;
        gap: 1.5rem;
        align-items: stretch;
      }
      @media (max-width: 1023px) { .cmo-proof-grid { grid-template-columns: 1fr; } }

      .cmo-proof-main {
        border-radius: 28px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
        background: #fff;
      }
      .cmo-proof-main-img {
        height: 340px;
        overflow: hidden;
      }
      .cmo-proof-main-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
      .cmo-proof-main:hover .cmo-proof-main-img img { transform: scale(1.04); }
      .cmo-proof-main-body { padding: 2rem 2.5rem 2.5rem; }

      .cmo-proof-stack { display: flex; flex-direction: column; gap: 1.5rem; }
      .cmo-proof-card {
        flex: 1;
        background: #fff;
        border-radius: 20px;
        padding: 2rem;
        border: 1px solid #e5e7eb;
      }

      /* ── Section 6: CTA grid ── */
      .cmo-cta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: start;
      }
      @media (max-width: 1023px) { .cmo-cta-grid { grid-template-columns: 1fr; gap: 3rem; } }

      .cmo-outcome-row {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        background: #fff;
        border-radius: 16px;
        padding: 1.25rem 1.5rem;
        border: 1px solid #e5e7eb;
      }
      .cmo-outcome-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* ── CTA button pulse ── */
      @keyframes ctaPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.3); }
        50%       { box-shadow: 0 0 0 10px rgba(22,163,74,0); }
      }
      .cmo-cta-pulse { animation: ctaPulse 2.4s ease-in-out infinite; }

      /* ── Scroll reveal ── */
      .cmo-reveal {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.65s ease, transform 0.65s ease;
      }
      .cmo-reveal.visible { opacity: 1; transform: translateY(0); }

      /* ── Feed stagger reveal ── */
      .cmo-stagger-feed {
        opacity: 0;
        transform: translateX(24px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .cmo-stagger-feed.visible {
        opacity: 1;
        transform: translateX(0);
      }

    ` }} />


    <script dangerouslySetInnerHTML={{ __html: `
      /* ── Intersection observer: generic scroll reveal ── */
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.cmo-reveal').forEach(el => revealObs.observe(el));

      /* ── Feed cards: staggered reveal ── */
      const feedCards = document.querySelectorAll('.cmo-stagger-feed');
      const feedObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            feedCards.forEach((card, i) => {
              const delay = parseInt(card.style.getPropertyValue('--feed-delay')) || i * 120;
              setTimeout(() => card.classList.add('visible'), delay);
            });
            feedObs.disconnect();
          }
        });
      }, { threshold: 0.2 });
      const feedContainer = document.getElementById('cmo-feed');
      if (feedContainer) feedObs.observe(feedContainer);

      /* ── Nav shadow ── */
      const header = document.getElementById('site-header');
      if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

      /* ── Hero image subtle scroll parallax ── */
      const heroBg = document.getElementById('cmo-hero-img');
      if (heroBg) {
        window.addEventListener('scroll', () => {
          const y = window.scrollY;
          heroBg.style.transform = 'scale(1.04) translateY(' + (y * 0.3) + 'px)';
        }, { passive: true });
      }

      /* ── Animate progress bar on scroll ── */
      const barObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.cmo-overlay-bar-fill').forEach(bar => bar.classList.add('animate'));
            barObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.cmo-img-overlay').forEach(el => barObs.observe(el));
    ` }} />

  </>
)
