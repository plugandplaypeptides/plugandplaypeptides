// All image URLs sourced from image_search tool (license-filtered)
const IMGS = {
  // Hero — athletic man running on rooftop in Austin (4000×6000 portrait)
  // Subject: man running, head/body centered horizontally, upper-mid vertically
  heroAthlete: 'https://sspark.genspark.ai/cfimages?u1=ZdowuU602ahWL4IcSs5hMShhG1QbJ0YZFvtHBh32Mec03d0%2BmXNE2Wtxv7tw3HV1UhItixvyFrDuzKnV%2FhFmgIubCydpsDvWB9v0C%2BlqZvjxhJj8Xjngy%2FmV49P4970zhsOAzUDsp18Jx%2BuceLgVCk7ZCJh4NUEzvPLYIAfLJceksLMCCo9CLAJYRic%3D&u2=eVUZt9TGwAzZCnnY&width=2560',
  // Happy couple jogging — smiling man & woman (6000×4000 landscape)
  // Subjects centered horizontally at ~50%, faces at ~35% from top
  coupleJog: 'https://sspark.genspark.ai/cfimages?u1=YlOOMyA3N8i%2Fzj2uekkQlVklXzjPq%2FRgVZj7zL66tQqaHoTOrVNGatm3go3W7h2MjW9tzBwMJoCB%2BJ%2FeQuCK6m8kAx1eO%2FW%2B9qnTC%2BxDHPtxuA%3D%3D&u2=R03jZHwAEMg8fKLz&width=2560',
  // Female creator recording video on phone (portrait ~4480×6720)
  // Subject: woman with phone, face at ~20% from top, centered horizontally
  creatorWoman: 'https://sspark.genspark.ai/cfimages?u1=eEf1KxscPQXV%2F5SIVb3w%2Fw4Leotk6%2BFuY7muE%2FOBwq9u%2F6qrJDvVjLLl4o8AfV4tB4OnpkT25hJ0zFh6nYOuYKfwJvoucjpKCZbzi5b5LUEOGg%3D%3D&u2=mbVXo%2BVqexsSj1jC&width=2560',
  // Male creator filming on phone (portrait ~4328×6492)
  // Subject: man filming, face at ~18% from top, centered horizontally
  creatorMan: 'https://sspark.genspark.ai/cfimages?u1=JSOQyYk%2FBbS8csUbiHaKTp7ZCjTUS7%2BStjkgBvW6gnWxyqHI9M%2Bd6AwcP6i2HcQnBvHP2snAPfAaeYtmkYbcaF66ubWJqNjEuoojEDsdnjM%2BUA%3D%3D&u2=tQGTQJ7ot9JtaMYS&width=2560',
  // Doctor using a laptop (telehealth) (6720×4480 landscape)
  // Subject: doctor centered at ~45% horizontal, face/upper body at ~30% from top
  doctorTelehealth: 'https://sspark.genspark.ai/cfimages?u1=BQnS04fN7YRxdMstKz5TMSAI7yp58IQbp6Z29nFozDsFIZRvHukIF7XjbxrUJPv7muoQZ85kw65Vcux5rFX%2FgYJQA5N2s8sIKf%2F8wAo%2Fh1Hq5w%3D%3D&u2=tC9P5GGTcIYRSP1J&width=2560',
  // Female doctor having a video call (portrait 4480×6720)
  // Subject: doctor's face/upper body, centered horizontally, face at ~22% from top
  doctorFemale: 'https://sspark.genspark.ai/cfimages?u1=Hoin65eiqZ0oMAQoq5ABA7X9Bn%2B4t8e%2BDh%2FyipUGJFMXaZt92nNxqUBXBBVk6rz3Oykuqzeqei4KynA6BDmovBVaKptcG%2BZediiNfHeeVCHaGg%3D%3D&u2=s695TUWMqzau4tWq&width=2560',
  // Med spa interior (landscape ~4792×3194)
  // Subject: room interior, naturally centered — center center
  medSpa: 'https://sspark.genspark.ai/cfimages?u1=tuHgjNrdFR%2BvpEL0pv%2Bdgh7o321cO0mSUNSAiD3XrCWwwCVHWeBz7GKP%2BVVer034Pe7y1FQNcsxhB8NVV63PUd5zIWGtdXg4ldL24YWsVtva0DX1G9yDc5bpjX8fn8ERJj7qgbDBVYW5AvPE1a6RGIYVz2Cz0VmyVyUFu2cVb4y57hkbv4UFvvefxg%3D%3D&u2=IhmJUJyZEm8nfDoS&width=2560',
  // Smiling woman (3510×5260 portrait)
  // Subject: woman's face/smile, centered horizontally, face at ~18% from top
  womanSmiling: 'https://sspark.genspark.ai/cfimages?u1=2jjgGW47VW50pEzJKshJj1lQ7pg8Re3i%2Fqs8tu6JDS6zWgK470LMao%2FAUH8SVQExMG0XIBGxOwYG14%2BuxQZgE1j%2BOKRi01z4u66ms8FF9o0fXA%3D%3D&u2=ABarFACbt16CiY8J&width=2560',
  // Couple in sportswear (3832×5745 portrait)
  // Subject: two people full body, centered horizontally, faces at ~15% from top
  coupleSport: 'https://sspark.genspark.ai/cfimages?u1=nDjtvHtqLJc9YeJ2rjT4gfB0Ufr1jgGgfRfbKjXcdd246hUJTW938KPZE%2F%2B49Ak0%2BqGP41I40AcFckX4Q7ZqdOHcsqUfKRlyZbgVfYqTb4BCwhnerbY%2FxBwCigw5kqgLxMpHERrFAraaINNrdakgXagFB4rDqUI%3D&u2=K3DVyzlSrZh6uQlR&width=2560',
  // Man filming on tripod (5720×3818 landscape)
  // Subject: man centered in frame, upper body at ~35% from top
  influencerTripod: 'https://sspark.genspark.ai/cfimages?u1=AY73JZRcY7b6B7AYxKvRKi62CmryShXlDLZmd90HmUtx2s1PboS8%2F8znwZ7CR5pBwwHsc7N%2Ft5p6%2BbO9i5rNYNfDzGs5AW3WbN1GD%2B40cugjTQ%3D%3D&u2=WZphExal%2BUAfUfRl&width=2560',
}

export const homePage = () => (
  <>

    {/* ═══════════════════════════════════
        HERO — Full-bleed image, bold copy
    ═══════════════════════════════════ */}
    <section class="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background image — portrait 4000×6000, man running, focus upper-center body */}
      <div class="absolute inset-0">
        <img
          src={IMGS.heroAthlete}
          alt="Athletic healthy lifestyle"
          class="w-full h-full object-cover"
          style="object-position: 60% 28%"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
            <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Physician-Supervised · White-Label Ready · Launch in Weeks
          </span>

          <h1 class="display-serif text-white mb-6" style="font-size:clamp(3rem,6vw,5.5rem); line-height:1.05;">
            Your audience<br />
            is <em style="color:#4ade80;">already asking</em><br />
            for this.
          </h1>

          <p class="text-gray-200 text-xl leading-relaxed mb-4 max-w-lg" style="font-weight:300;">
            Peptides are the fastest-growing segment in health. Your brand could own a piece of it — legally, profitably, and in weeks.
          </p>
          <p class="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
            We give businesses and creators the complete infrastructure to sell premium peptide products under their own brand — dispensed by licensed physicians, fulfilled direct to patients.
          </p>

          <div class="flex flex-col sm:flex-row gap-3">
            <a href="/apply?type=business" class="btn-black text-base py-4 px-8">
              Apply as a Business →
            </a>
            <a href="/apply?type=influencer" style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border:1.5px solid rgba(255,255,255,0.3);color:#fff;" class="btn-black text-base py-4 px-8">
              Apply as a Creator →
            </a>
          </div>

          {/* Micro-stats */}
          <div class="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
            {[
              { n: '50+', l: 'Active Partner Brands' },
              { n: '$0', l: 'Upfront to Launch' },
              { n: '2–4 wks', l: 'Average Time to Revenue' },
            ].map(s => (
              <div>
                <div class="text-white font-extrabold text-2xl leading-none" style="letter-spacing:-0.03em;">{s.n}</div>
                <div class="text-gray-400 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        SOCIAL PROOF TICKER
    ═══════════════════════════════════ */}
    <div class="bg-black border-t border-gray-800 py-4 overflow-hidden">
      <div class="marquee-wrap">
        <div class="marquee-track text-gray-500 text-sm font-medium">
          {[
            '✦  50+ Active Partner Brands',
            '✦  Physician Network in All 50 States',
            '✦  $0 Upfront to Launch',
            '✦  Your Logo. Your Brand. Your Revenue.',
            '✦  Average Partner Earns $22K in Month 1',
            '✦  Licensed Compounding Pharmacies',
            '✦  HIPAA-Compliant Platform',
            '✦  2–4 Week Launch Guarantee',
            '✦  50+ Active Partner Brands',
            '✦  Physician Network in All 50 States',
            '✦  $0 Upfront to Launch',
            '✦  Your Logo. Your Brand. Your Revenue.',
            '✦  Average Partner Earns $22K in Month 1',
            '✦  Licensed Compounding Pharmacies',
            '✦  HIPAA-Compliant Platform',
            '✦  2–4 Week Launch Guarantee',
          ].map(t => <span class="flex-shrink-0">{t}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)}
        </div>
      </div>
    </div>

    {/* ═══════════════════════════════════
        PROBLEM / OPPORTUNITY — white
    ═══════════════════════════════════ */}
    <section class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="label-caps block mb-4">The Opportunity</span>
            <h2 class="display-sans text-gray-900 mb-6" style="font-size:clamp(2.2rem,4vw,3.5rem);">
              The peptide market<br />is at an<br /><span style="color:#16a34a">inflection point.</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Millions of people are actively searching for peptides — for weight loss, anti-aging, recovery, and performance. They're buying from random online sources, often unsafely.
            </p>
            <p class="text-gray-800 text-lg leading-relaxed font-medium mb-8">
              The brands and creators who get in now — with a physician-supervised, white-label platform — will own this space for the next decade.
            </p>

            <div class="space-y-4">
              {[
                { stat: '$8.4B', label: 'Peptide therapeutics market by 2028' },
                { stat: '340%', label: 'Increase in peptide searches 2022–2025' },
                { stat: '76%', label: 'Of patients reorder within 60 days' },
              ].map(s => (
                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span class="text-2xl font-extrabold text-green-600" style="letter-spacing:-0.03em;">{s.stat}</span>
                  <span class="text-gray-600 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div class="grid grid-cols-2 gap-3">
            {/* Wide landscape — couple jogging, faces in upper half */}
            <div class="col-span-2 rounded-2xl overflow-hidden h-72">
              <img
                src={IMGS.coupleJog}
                alt="Active healthy couple jogging"
                class="w-full h-full object-cover"
                style="object-position: 50% 30%"
              />
            </div>
            {/* Portrait — smiling woman, face near top-center */}
            <div class="rounded-2xl overflow-hidden h-56">
              <img
                src={IMGS.womanSmiling}
                alt="Happy wellness patient"
                class="w-full h-full object-cover"
                style="object-position: 50% 20%"
              />
            </div>
            {/* Landscape — doctor on laptop, upper body centered */}
            <div class="rounded-2xl overflow-hidden h-56">
              <img
                src={IMGS.doctorTelehealth}
                alt="Doctor consultation"
                class="w-full h-full object-cover"
                style="object-position: 45% 28%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FOR BUSINESSES — cream, image left
    ═══════════════════════════════════ */}
    <section id="businesses" class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — med spa interior, landscape, naturally centered */}
          <div class="relative">
            <div class="rounded-3xl overflow-hidden h-[520px]">
              <img
                src={IMGS.medSpa}
                alt="Modern wellness clinic interior"
                class="w-full h-full object-cover"
                style="object-position: 50% 50%"
              />
            </div>
            {/* Floating revenue card */}
            <div class="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[220px]">
              <p class="text-xs text-gray-400 mb-1">New Revenue Added</p>
              <p class="text-2xl font-extrabold text-gray-900" style="letter-spacing:-0.03em;">+$45,200</p>
              <p class="text-xs text-green-600 font-semibold mt-1">↑ in first 60 days</p>
              <p class="text-xs text-gray-400 mt-1">Med Spa, Miami FL</p>
            </div>
            {/* Floating tag */}
            <div class="absolute -top-4 -left-4 bg-black text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Zero Staff Needed
            </div>
          </div>

          {/* Copy */}
          <div>
            <span class="label-caps block mb-4">For Businesses & Brands</span>
            <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3rem);">
              Add $40K–$100K+<br />in recurring monthly<br />revenue. Without<br />hiring anyone.
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed mb-8">
              Your business already has the audience and the trust. We add the peptide line — branded as yours, prescribed by our physicians, shipped direct to your patients. You collect the margin.
            </p>

            <div class="space-y-4 mb-10">
              {[
                { icon: '🏷️', title: 'Your brand on everything', body: 'Logo, packaging, patient portal URL, marketing materials — all under your name.' },
                { icon: '⚖️', title: 'We handle all compliance', body: 'Our physician network manages prescriptions and our legal team handles regulations. Your risk is zero.' },
                { icon: '📦', title: 'Fulfilled direct to patients', body: 'Temperature-controlled, discreet shipping nationwide. You never touch a product.' },
                { icon: '💰', title: 'Margins you\'ll actually love', body: 'Earn 3–5x more than supplement brands, affiliate programs, or service add-ons.' },
              ].map(f => (
                <div class="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <span class="text-xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm mb-0.5">{f.title}</p>
                    <p class="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div class="flex items-center gap-4">
              <a href="/apply?type=business" class="btn-black">Apply as a Business</a>
              <span class="text-sm text-gray-400">Takes 5 minutes · No commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FOR INFLUENCERS — white, image right
    ═══════════════════════════════════ */}
    <section id="influencers" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <span class="label-caps block mb-4">For Influencers & Creators</span>
            <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3rem);">
              Stop making<br />someone else rich<br />with your audience.
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed mb-4">
              Every time you post an affiliate link, you're building <em>their</em> brand with <em>your</em> credibility. Your audience already trusts you on health — why aren't you capturing that value?
            </p>
            <p class="text-gray-800 font-semibold text-lg leading-relaxed mb-8">
              With Plug & Play, your audience buys <em>your</em> peptides — doctor-prescribed, under your brand name. You keep margins that used to go to someone else.
            </p>

            {/* Income calculator */}
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
              <p class="label-caps mb-4">What could you earn?</p>
              <div class="space-y-3">
                {[
                  { tier: '10K–50K followers', mo: '$5K–$18K/mo', bar: 15 },
                  { tier: '50K–500K followers', mo: '$18K–$75K/mo', bar: 40 },
                  { tier: '500K–2M followers', mo: '$75K–$300K/mo', bar: 70 },
                  { tier: '2M+ followers', mo: '$300K+/mo', bar: 100 },
                ].map(r => (
                  <div>
                    <div class="flex justify-between text-sm mb-1">
                      <span class="text-gray-500">{r.tier}</span>
                      <span class="font-bold text-gray-900">{r.mo}</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-1.5">
                      <div class="bg-green-500 h-1.5 rounded-full transition-all" style={`width:${r.bar}%`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <p class="text-xs text-gray-400 mt-3">*Estimates based on average 0.5–2% conversion rates. Actual results vary.</p>
            </div>

            <div class="flex items-center gap-4">
              <a href="/apply?type=influencer" class="btn-black">Apply as a Creator</a>
              <span class="text-sm text-gray-400">Launch in 2–4 weeks</span>
            </div>
          </div>

          {/* Images — portrait creators, need face showing */}
          <div class="grid grid-cols-2 gap-3">
            {/* Portrait creator woman — face at ~20% from top */}
            <div class="rounded-2xl overflow-hidden h-96">
              <img
                src={IMGS.creatorWoman}
                alt="Female content creator"
                class="w-full h-full object-cover"
                style="object-position: 50% 18%"
              />
            </div>
            {/* Portrait man on tripod — face/upper body at top */}
            <div class="rounded-2xl overflow-hidden h-96 mt-8">
              <img
                src={IMGS.influencerTripod}
                alt="Influencer filming content"
                class="w-full h-full object-cover"
                style="object-position: 50% 15%"
              />
            </div>
            {/* Quote overlay */}
            <div class="col-span-2 bg-black rounded-2xl p-5">
              <div class="flex mb-2">{[1,2,3,4,5].map(() => <span class="text-amber-400 mr-0.5">★</span>)}</div>
              <p class="text-white text-sm leading-relaxed italic mb-3">"First month I did $22K. My audience was already asking for this — Plug & Play just made it real."</p>
              <p class="text-gray-500 text-xs">Alex M. · Fitness Creator · 800K followers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        HOW IT WORKS — cream, numbered steps
    ═══════════════════════════════════ */}
    <section id="how-it-works" class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="label-caps block mb-3">Simple Process</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            From zero to revenue<br />in four steps.
          </h2>
          <p class="text-gray-500 text-lg">No lab. No compliance team. No prior medical experience needed.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { n: '01', emoji: '📝', title: 'Apply in 5 minutes', body: 'Tell us about your brand or audience. Our team reviews within 48 hours. No gatekeeping — if you have an audience, you qualify.' },
            { n: '02', emoji: '🏷️', title: 'We build your brand', body: 'Custom labels, branded patient portal, your URL — all designed and built for you at zero cost. No minimum order quantities.' },
            { n: '03', emoji: '👨‍⚕️', title: 'Doctors handle everything clinical', body: 'Our physician network reviews every patient consultation, writes prescriptions, and approves orders. Zero clinical responsibility on your end.' },
            { n: '04', emoji: '💸', title: 'You promote. We fulfill. You earn.', body: 'Drive your audience to your branded portal. We handle fulfillment, customer service, and reorders. You collect recurring revenue.' },
          ].map(step => (
            <div class="bg-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
              <div class="step-num absolute top-2 right-3 pointer-events-none select-none">{step.n}</div>
              <div class="text-3xl mb-4 relative z-10">{step.emoji}</div>
              <h3 class="font-bold text-gray-900 text-base mb-3 relative z-10 leading-snug">{step.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed relative z-10">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Doctor photo strip — portrait doctor female, face should show */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-3xl p-8 border border-gray-100">
          <div>
            <h3 class="font-bold text-gray-900 text-2xl mb-3 leading-tight">Our physicians are board-certified specialists — not a rubber stamp.</h3>
            <p class="text-gray-500 leading-relaxed mb-4">Every patient consultation is reviewed by a licensed physician in our network. They evaluate health history, write real prescriptions, and monitor outcomes. This is real medicine — done right.</p>
            <div class="flex flex-wrap gap-2">
              {['Endocrinology', 'Internal Medicine', 'Sports Medicine', 'Anti-Aging / Longevity', 'Weight Management'].map(s => (
                <span class="tag-gray">{s}</span>
              ))}
            </div>
          </div>
          {/* Portrait doctor — tall enough container, show face at top */}
          <div class="rounded-2xl overflow-hidden h-80">
            <img
              src={IMGS.doctorFemale}
              alt="Doctor providing telehealth consultation"
              class="w-full h-full object-cover"
              style="object-position: 50% 22%"
            />
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        PRODUCT CATALOG — white
    ═══════════════════════════════════ */}
    <section id="catalog" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span class="label-caps block mb-3">Product Portfolio</span>
            <h2 class="display-sans text-gray-900" style="font-size:clamp(2rem,4vw,3rem);">
              The products your audience<br />already wants to buy.
            </h2>
          </div>
          <p class="text-gray-500 text-sm max-w-xs">All sourced from licensed compounding pharmacies. COAs available on every batch.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              img: IMGS.coupleSport,
              // Portrait 3832×5745 — couple in sportswear, faces near top
              imgPos: '50% 18%',
              name: 'Weight Management',
              products: 'Semaglutide · Tirzepatide',
              badge: '🔥 Highest Demand',
              badgeBg: 'bg-amber-50 border-amber-200 text-amber-700',
              desc: 'GLP-1 and GIP/GLP-1 agonists for sustainable, medically-supervised weight loss. The #1 most requested category — and the highest LTV product in the market.',
            },
            {
              img: IMGS.heroAthlete,
              // Portrait 4000×6000 — man running, upper-center body visible
              imgPos: '60% 28%',
              name: 'Recovery & Performance',
              products: 'BPC-157 · TB-500 · CJC-1295',
              badge: '💪 High Reorder Rate',
              badgeBg: 'bg-green-50 border-green-200 text-green-700',
              desc: 'Tissue repair, injury recovery, and growth hormone optimization. Perfect for fitness brands, sports medicine practices, and performance-focused creators.',
            },
            {
              img: IMGS.womanSmiling,
              // Portrait 3510×5260 — smiling woman, face near top-center
              imgPos: '50% 18%',
              name: 'Anti-Aging & Longevity',
              products: 'Epithalon · Sermorelin · NAD+',
              badge: '⏳ Trending Fast',
              badgeBg: 'bg-violet-50 border-violet-200 text-violet-700',
              desc: 'Telomere support, sleep optimization, and cellular rejuvenation. The biohacking and longevity audience is exploding — and they have high purchasing power.',
            },
          ].map(cat => (
            <div class="card-clean overflow-hidden">
              <div class="h-56 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={`object-position: ${cat.imgPos}`}
                />
              </div>
              <div class="p-6">
                <span class={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${cat.badgeBg}`}>{cat.badge}</span>
                <h3 class="font-bold text-gray-900 text-lg mb-1">{cat.name}</h3>
                <p class="text-green-600 text-sm font-medium mb-3">{cat.products}</p>
                <p class="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More products strip */}
        <div class="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
          <div>
            <p class="font-semibold text-gray-900 mb-1">Plus 9 more compounds in the full catalog</p>
            <p class="text-gray-500 text-sm">PT-141 · Melanotan II · Thymosin Alpha-1 · Ipamorelin · MOTS-c · and more. New compounds added quarterly.</p>
          </div>
          <a href="/apply" class="btn-outline-black flex-shrink-0">Request Full Catalog</a>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        TRUST / COMPLIANCE — dark
    ═══════════════════════════════════ */}
    <section class="section-black py-24 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block text-green-400 text-xs font-semibold uppercase tracking-widest mb-4">Built for the Regulated World</span>
            <h2 class="display-sans text-white mb-6" style="font-size:clamp(2rem,4vw,3rem);">
              The compliance you<br />need to sleep at night.
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              The peptide space has real regulatory complexity. We've built the legal and medical infrastructure so you can promote your brand without worrying about what's happening behind the scenes.
            </p>
            <div class="space-y-4">
              {[
                { icon: '🏥', title: 'FDA-Registered Compounding Pharmacies', body: 'Every product comes from pharmacies registered with the FDA. No gray-market sourcing, ever.' },
                { icon: '👨‍⚕️', title: 'Real Prescriptions. Real Doctors.', body: 'All dispensing requires a valid prescription from a licensed physician. We don\'t cut corners.' },
                { icon: '🔒', title: 'HIPAA-Compliant Technology', body: 'Patient data, consultations, and medical records are handled with full HIPAA compliance on our platform.' },
                { icon: '⚖️', title: 'Ongoing Legal Monitoring', body: 'Our legal team tracks FDA, DEA, and state-level regulatory changes and updates our protocols accordingly.' },
              ].map(f => (
                <div class="flex gap-4">
                  <span class="text-xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p class="font-semibold text-white text-sm mb-0.5">{f.title}</p>
                    <p class="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="space-y-4">
            {/* Landscape doctor telehealth — centered */}
            <div class="rounded-2xl overflow-hidden h-72">
              <img
                src={IMGS.doctorTelehealth}
                alt="Physician consultation"
                class="w-full h-full object-cover"
                style="object-position: 45% 28%"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              {[
                { n: '100%', l: 'Physician-Supervised' },
                { n: '50', l: 'States Covered' },
                { n: 'FDA', l: 'Registered Pharmacies' },
                { n: 'HIPAA', l: 'Compliant Platform' },
              ].map(s => (
                <div class="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <div class="text-white font-extrabold text-xl" style="letter-spacing:-0.03em;">{s.n}</div>
                  <div class="text-gray-500 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        TESTIMONIALS — cream, real quotes with context
    ═══════════════════════════════════ */}
    <section class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-14">
          <span class="label-caps block mb-3">Partner Results</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3rem);">
            Real people.<br />Real revenue.
          </h2>
          <p class="text-gray-500">Here's what partners say after launching their brands with us.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              quote: "I was skeptical. I thought launching a peptide brand would take a year and cost six figures. Instead I was live in 3 weeks with zero upfront. Month one: $22,400.",
              name: 'Alex M.',
              role: 'Fitness Creator · 800K followers',
              result: '$22,400 Month 1',
              resultColor: 'bg-green-50 text-green-700 border-green-200',
              initial: 'A',
            },
            {
              quote: "We added a peptide revenue line to our med spa without disrupting a single existing service. $45K recurring by month two. Our physician sees patients over telehealth — we just promote it.",
              name: 'Dr. Sarah K.',
              role: 'Medical Spa Owner · Miami FL',
              result: '$45K Recurring/Mo',
              resultColor: 'bg-blue-50 text-blue-700 border-blue-200',
              initial: 'S',
            },
            {
              quote: "The compliance structure is what sold me. My attorney reviewed it and said it's the cleanest setup she's seen in this space. I'm just a brand — doctors handle everything clinical.",
              name: 'Jordan T.',
              role: 'Biohacking Creator · 1.2M followers',
              result: 'Legal Sign-Off',
              resultColor: 'bg-violet-50 text-violet-700 border-violet-200',
              initial: 'J',
            },
          ].map(t => (
            <div class="bg-white rounded-2xl p-7 border border-gray-100">
              <span class={`text-xs font-bold px-3 py-1.5 rounded-full border inline-block mb-5 ${t.resultColor}`}>{t.result}</span>
              <p class="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div class="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div class="w-10 h-10 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">{t.initial}</div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p class="text-gray-400 text-xs">{t.role}</p>
                </div>
                <div class="ml-auto flex">{[1,2,3,4,5].map(() => <span class="text-amber-400 text-sm">★</span>)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo testimonial banner — landscape couple jogging, faces centered */}
        <div class="relative rounded-3xl overflow-hidden h-64 md:h-72">
          <img
            src={IMGS.coupleJog}
            alt="Active healthy partners"
            class="w-full h-full object-cover"
            style="object-position: 50% 30%"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center px-8">
            <div>
              <p class="text-white text-2xl md:text-3xl font-bold leading-tight mb-2" style="font-family:'Playfair Display',serif;font-style:italic;">"This is the most profitable thing I've ever added to my business."</p>
              <p class="text-gray-300 text-sm">— Wellness Brand Owner, Austin TX · Joined 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FAQ — white
    ═══════════════════════════════════ */}
    <section class="section-white py-24">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="label-caps block mb-3">Common Questions</span>
          <h2 class="display-sans text-gray-900" style="font-size:clamp(2rem,4vw,3rem);">
            Questions we hear<br />before every "yes."
          </h2>
        </div>

        <div class="space-y-3" id="faq-list">
          {[
            {
              q: 'Is this actually legal?',
              a: 'Yes — completely. Every product is prescribed by a licensed physician and dispensed by an FDA-registered compounding pharmacy. This is the same model used by major telehealth companies like Hims and Ro. You operate as a marketing partner. Doctors handle all the medicine.',
            },
            {
              q: 'What does it cost to get started?',
              a: 'Zero upfront. No setup fees, no inventory purchase, no minimum order requirements. We make money when you make money. Our revenue comes from product margin — which means we\'re highly incentivized to help you succeed.',
            },
            {
              q: 'How long does it take to launch?',
              a: 'Most partners are live and generating revenue within 2–4 weeks of approval. Brand design, portal setup, physician onboarding, and compliance review all happen in parallel.',
            },
            {
              q: 'What if I have no medical background?',
              a: 'That\'s the entire point. You don\'t need one. You market your brand — our physicians handle all clinical decisions. You\'re not prescribing anything. You\'re a branded retail partner.',
            },
            {
              q: 'What do I actually have to do?',
              a: 'Promote your branded portal to your audience. That\'s it. Content, ads, email, whatever your channel is. We handle product fulfillment, physician consultations, customer support, reorders, and compliance.',
            },
            {
              q: 'Do I own the customer relationship?',
              a: 'Yes. Patients who come through your portal are your branded patients. All communications happen under your brand name. You build the list, you own the relationship.',
            },
          ].map((faq, i) => (
            <div class="faq-item border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
              <button class="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 text-sm hover:bg-gray-100 transition-colors" onclick={`toggleFaq(${i})`}>
                <span>{faq.q}</span>
                <span class="faq-icon text-gray-400 text-lg flex-shrink-0 ml-4" id={`faq-icon-${i}`}>+</span>
              </button>
              <div class="faq-body hidden px-5 pb-5" id={`faq-body-${i}`}>
                <p class="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FINAL CTA — full-bleed image
    ═══════════════════════════════════ */}
    <section class="relative py-32 overflow-hidden bg-black">
      <div class="absolute inset-0">
        {/* Landscape couple jogging — keep faces visible */}
        <img
          src={IMGS.coupleJog}
          alt="Healthy active lifestyle"
          class="w-full h-full object-cover opacity-30"
          style="object-position: 50% 30%"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span class="tag-green mx-auto mb-6">
          <i class="fas fa-circle text-green-500" style="font-size:6px"></i>
          Applications Open — Limited Spots per Category
        </span>
        <h2 class="display-serif text-white mb-6" style="font-size:clamp(2.5rem,5.5vw,5rem); line-height:1.05;">
          Your audience is<br />waiting. Are you?
        </h2>
        <p class="text-gray-300 text-xl leading-relaxed mb-4 max-w-xl mx-auto" style="font-weight:300;">
          Every month you wait is a month your audience is buying peptides from someone else's brand.
        </p>
        <p class="text-gray-500 text-base mb-10">Apply today. Launch in weeks. Own your revenue.</p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href="/apply?type=business" class="btn-green text-base py-4 px-10 w-full sm:w-auto justify-center">
            I'm a Business — Apply Now
          </a>
          <a href="/apply?type=influencer" style="background:rgba(255,255,255,0.12);border:1.5px solid rgba(255,255,255,0.3);color:#fff;backdrop-filter:blur(8px);" class="btn-black text-base py-4 px-10 w-full sm:w-auto justify-center">
            I'm a Creator — Apply Now
          </a>
        </div>
        <p class="text-gray-600 text-sm">
          <i class="fas fa-lock text-xs mr-1"></i>5-minute application · 100% confidential · No commitment
        </p>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      // Nav scroll shadow
      const header = document.getElementById('site-header');
      if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

      // FAQ accordion
      function toggleFaq(i) {
        const body = document.getElementById('faq-body-' + i);
        const icon = document.getElementById('faq-icon-' + i);
        const isOpen = !body.classList.contains('hidden');
        // Close all
        document.querySelectorAll('.faq-body').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(el => el.textContent = '+');
        // Open clicked if was closed
        if (!isOpen) {
          body.classList.remove('hidden');
          icon.textContent = '−';
        }
      }
    ` }} />
  </>
)
