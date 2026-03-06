export const homePage = () => (
  <>
    {/* ═══════════════════════════════════════
        HERO — white bg, editorial type, bold CTA
    ═══════════════════════════════════════ */}
    <section class="section-white pt-20 pb-0 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top label */}
        <div class="flex justify-center mb-8">
          <span class="tag-green"><i class="fas fa-circle text-green-500" style="font-size:6px"></i>Physician-Supervised White-Label Peptides</span>
        </div>

        {/* Headline */}
        <h1 class="display-serif text-center text-gray-900 mb-6" style="font-size:clamp(2.8rem,6vw,5.5rem);">
          Your brand.<br />
          <em style="color:#16a34a">Their prescription.</em><br />
          Your revenue.
        </h1>

        <p class="text-center text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10" style="font-weight:400;">
          We give businesses and creators everything they need to launch a premium peptide brand — compliantly dispensed through licensed physicians.
        </p>

        {/* CTAs */}
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="/apply?type=business" class="btn-black w-full sm:w-auto justify-center">
            Apply as a Business
          </a>
          <a href="/apply?type=influencer" class="btn-outline-black w-full sm:w-auto justify-center">
            Apply as an Influencer
          </a>
        </div>

        {/* Trust strip */}
        <div class="flex flex-wrap items-center justify-center gap-6 pb-12 divider">
          {[
            { icon: 'fa-user-md', text: 'Board-Certified Physicians' },
            { icon: 'fa-flask', text: 'Licensed Compounding Pharmacies' },
            { icon: 'fa-shield-alt', text: 'HIPAA-Compliant Platform' },
            { icon: 'fa-rocket', text: 'Live in 2–4 Weeks' },
          ].map(item => (
            <div class="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <i class={`fas ${item.icon} text-green-500 text-xs`}></i>
              {item.text}
            </div>
          ))}
        </div>

        {/* Hero visual — mock dashboard */}
        <div class="max-w-4xl mx-auto mt-12 relative">
          {/* Browser chrome */}
          <div class="bg-gray-100 rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-gray-200 border-b-0">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 ml-2 border border-gray-200">
              app.plugandplaypeptides.com/<strong class="text-gray-600">yourbrand</strong>
            </div>
          </div>
          {/* Dashboard */}
          <div class="bg-white border border-gray-200 border-t-0 rounded-b-2xl p-6 shadow-xl">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Monthly Revenue', value: '$48,250', change: '+32%', up: true },
                { label: 'Active Patients', value: '1,847', change: '+18%', up: true },
                { label: 'Active Products', value: '12', change: 'Under your brand', up: null },
                { label: 'Reorder Rate', value: '76%', change: 'Industry-leading', up: null },
              ].map(s => (
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p class="text-xs text-gray-400 mb-1.5">{s.label}</p>
                  <p class="text-xl font-bold text-gray-900 leading-none mb-1">{s.value}</p>
                  <p class={`text-xs font-medium ${s.up === true ? 'text-green-600' : 'text-gray-400'}`}>{s.up === true ? '↑ ' : ''}{s.change}</p>
                </div>
              ))}
            </div>
            <div class="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium text-gray-700">3 new patient consultations approved today</span>
              </div>
              <span class="text-xs text-green-600 font-semibold">View →</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ═══════════════════════════════════════
        STATS — cream bg
    ═══════════════════════════════════════ */}
    <section class="section-cream py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-200">
          {[
            { value: '50+', label: 'Active Partner Brands' },
            { value: '98%', label: 'Partner Retention Rate' },
            { value: '2–4 wks', label: 'Average Time to Launch' },
            { value: '100%', label: 'Physician-Supervised' },
          ].map(s => (
            <div class="text-center md:px-8">
              <div class="stat-big mb-2">{s.value}</div>
              <p class="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        HOW IT WORKS — white
    ═══════════════════════════════════════ */}
    <section id="how-it-works" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="max-w-2xl mb-16">
          <span class="label-caps block mb-3">The Process</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            From application<br />to revenue.
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            We've built every piece of the infrastructure. You bring the audience — we handle everything else.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '01', icon: 'fa-file-signature', title: 'Apply & Onboard', body: 'Submit your 5-minute application. Our team reviews your brand and goals. Onboarding takes as little as 48 hours.' },
            { n: '02', icon: 'fa-palette', title: 'Brand Your Line', body: 'Choose from our peptide catalog. We custom-label products under your name, logo, and brand aesthetic.' },
            { n: '03', icon: 'fa-user-md', title: 'Physicians Activated', body: 'Our network of licensed physicians handles all patient consultations, prescriptions, and approvals.' },
            { n: '04', icon: 'fa-chart-line', title: 'Sell & Scale', body: 'Drive your audience to your branded patient portal. They consult, get approved, receive products. You earn.' },
          ].map(step => (
            <div class="card-cream p-6 relative overflow-hidden">
              <div class="step-num absolute -top-2 -right-1 select-none pointer-events-none">{step.n}</div>
              <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-5 relative z-10">
                <i class={`fas ${step.icon} text-green-600 text-sm`}></i>
              </div>
              <h3 class="font-bold text-gray-900 text-base mb-2 relative z-10">{step.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed relative z-10">{step.body}</p>
            </div>
          ))}
        </div>

        <div class="mt-10">
          <a href="/apply" class="btn-black">Start Your Application</a>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        FOR BUSINESSES — cream bg, split layout
    ═══════════════════════════════════════ */}
    <section id="businesses" class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span class="label-caps block mb-4">For Businesses & Brands</span>
            <h2 class="display-sans text-gray-900 mb-6" style="font-size:clamp(2rem,4vw,3rem);">
              White-label peptides.<br />Under your brand.
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed mb-8">
              Whether you run a wellness clinic, supplement company, medical spa, or health e-commerce store — we power your peptide line from formulation to fulfillment.
            </p>

            <ul class="space-y-5 mb-10">
              {[
                { icon: 'fa-flask', title: 'Full product catalog access', body: 'BPC-157, Semaglutide, Tirzepatide, TB-500, CJC-1295 and more — all available for white-labeling.' },
                { icon: 'fa-tag', title: 'Custom branding & packaging', body: 'Your logo. Your name. Your aesthetic. We design and produce all labeling and packaging.' },
                { icon: 'fa-balance-scale', title: 'Built-in legal compliance', body: 'Every product dispensed through our licensed physician network. Zero compliance risk on your end.' },
                { icon: 'fa-chart-bar', title: 'Industry-competitive margins', body: 'Earn significantly more than typical distribution models. Volume-based margin improvements.' },
                { icon: 'fa-headset', title: 'Dedicated partner support', body: 'A named account manager helps you launch, optimize campaigns, and grow your revenue.' },
              ].map(f => (
                <li class="flex gap-4">
                  <div class="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class={`fas ${f.icon} text-green-600 text-xs`}></i>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm mb-0.5">{f.title}</p>
                    <p class="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="/apply?type=business" class="btn-black">Apply as a Business</a>
          </div>

          {/* Right — use-case cards */}
          <div class="space-y-4">
            {[
              { emoji: '🏥', title: 'Wellness & Med Spas', sub: 'Add a peptide protocol menu alongside your existing services.', color: 'bg-violet-50 border-violet-100' },
              { emoji: '💊', title: 'Supplement Brands', sub: 'Expand beyond OTC — offer prescription peptides your customers are already searching for.', color: 'bg-amber-50 border-amber-100' },
              { emoji: '🏋️', title: 'Fitness & Performance', sub: 'Build a peptide brand around recovery, lean mass, and fat loss for a results-driven audience.', color: 'bg-sky-50 border-sky-100' },
              { emoji: '💻', title: 'Telehealth Platforms', sub: 'Integrate our physician network and dispensing infrastructure into your existing digital health flow.', color: 'bg-green-50 border-green-100' },
            ].map(c => (
              <div class={`card-clean p-5 border ${c.color}`} style="border-radius:14px;">
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-2xl">{c.emoji}</span>
                  <h4 class="font-bold text-gray-900 text-sm">{c.title}</h4>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed pl-10">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        FOR INFLUENCERS — white, split reversed
    ═══════════════════════════════════════ */}
    <section id="influencers" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Earnings table — left */}
          <div class="order-2 lg:order-1">
            <div class="card-clean p-6 md:p-8">
              <p class="label-caps mb-6">Estimated Monthly Earnings</p>
              <div class="space-y-3">
                {[
                  { tier: 'Micro Creator', range: '10K – 50K followers', orders: '50–150 orders', rev: '$5K – $18K / mo', bar: 12 },
                  { tier: 'Mid-Tier Creator', range: '50K – 500K followers', orders: '150–600 orders', rev: '$18K – $75K / mo', bar: 35 },
                  { tier: 'Macro Creator', range: '500K – 2M followers', orders: '600–2,500 orders', rev: '$75K – $300K / mo', bar: 65 },
                  { tier: 'Mega Creator', range: '2M+ followers', orders: '2,500+ orders', rev: '$300K+ / mo', bar: 100 },
                ].map((t, i) => (
                  <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div class="flex items-center justify-between mb-2">
                      <div>
                        <p class="font-semibold text-gray-900 text-sm">{t.tier}</p>
                        <p class="text-xs text-gray-400">{t.range} · {t.orders}</p>
                      </div>
                      <span class="font-bold text-gray-900 text-sm text-right">{t.rev}</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-1.5">
                      <div class="bg-green-500 h-1.5 rounded-full" style={`width:${t.bar}%`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <p class="text-xs text-gray-400 mt-4">* Estimates based on average conversion rates. Individual results vary.</p>
            </div>
          </div>

          {/* Right — copy */}
          <div class="order-1 lg:order-2">
            <span class="label-caps block mb-4">For Influencers & Creators</span>
            <h2 class="display-sans text-gray-900 mb-6" style="font-size:clamp(2rem,4vw,3rem);">
              Stop promoting<br />other brands.
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed mb-8">
              Your audience already trusts you on health. With Plug & Play Peptides, <strong class="text-gray-900">you own the brand</strong> — and you keep the margins that used to go to someone else.
            </p>

            <ul class="space-y-5 mb-10">
              {[
                { icon: 'fa-bolt', title: 'Launch in 2–4 weeks', body: 'Brand creation, physician onboarding, patient portal — all handled by us.' },
                { icon: 'fa-percentage', title: 'Industry-leading margins', body: 'Earn 5–10x what typical affiliate commissions pay. These are your products.' },
                { icon: 'fa-repeat', title: 'Recurring subscription revenue', body: 'Peptide protocols require monthly refills. Build a subscription income stream from your audience.' },
                { icon: 'fa-shield-alt', title: 'Zero legal liability', body: 'All products prescribed by licensed doctors. You promote — they prescribe. Clean and compliant.' },
              ].map(f => (
                <li class="flex gap-4">
                  <div class="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class={`fas ${f.icon} text-green-600 text-xs`}></i>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm mb-0.5">{f.title}</p>
                    <p class="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="/apply?type=influencer" class="btn-black">Apply as a Creator</a>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        PRODUCT CATALOG — cream
    ═══════════════════════════════════════ */}
    <section id="catalog" class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span class="label-caps block mb-3">Product Portfolio</span>
            <h2 class="display-sans text-gray-900" style="font-size:clamp(2rem,4vw,3rem);">
              A catalog built for<br />every audience.
            </h2>
          </div>
          <p class="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right">
            From longevity to weight management to performance recovery — 20+ compounds available for white-labeling.
          </p>
        </div>

        {/* Product pills row */}
        <div class="flex flex-wrap gap-2.5 mb-10">
          {[
            { name: 'Semaglutide', cat: 'Weight Management', hot: true },
            { name: 'Tirzepatide', cat: 'Weight Management', hot: true },
            { name: 'BPC-157', cat: 'Recovery', hot: false },
            { name: 'TB-500', cat: 'Recovery', hot: false },
            { name: 'CJC-1295 / Ipamorelin', cat: 'Anti-Aging', hot: false },
            { name: 'PT-141', cat: 'Sexual Health', hot: false },
            { name: 'Sermorelin', cat: 'Longevity', hot: false },
            { name: 'Epithalon', cat: 'Longevity', hot: false },
            { name: 'Melanotan II', cat: 'Tanning', hot: false },
            { name: 'NAD+', cat: 'Energy', hot: false },
            { name: 'Thymosin Alpha-1', cat: 'Immune', hot: false },
            { name: '+ 9 more', cat: '', hot: false },
          ].map(p => (
            <span class="product-pill">
              {p.hot && <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
              <span class="font-semibold text-gray-900">{p.name}</span>
              {p.cat && <span class="text-gray-400">· {p.cat}</span>}
            </span>
          ))}
        </div>

        {/* Featured cards */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              name: 'Semaglutide',
              cat: 'Weight Management',
              badge: 'Top Seller',
              badgeColor: 'bg-amber-100 text-amber-700',
              desc: 'GLP-1 receptor agonist for sustainable weight loss. The single most in-demand peptide in the consumer health market right now.',
              icon: 'fa-weight',
            },
            {
              name: 'BPC-157',
              cat: 'Recovery & Healing',
              badge: 'High Repeat Rate',
              badgeColor: 'bg-green-100 text-green-700',
              desc: 'Body Protection Compound for accelerated tissue repair, gut healing, and injury recovery. Loved by athletes and biohackers alike.',
              icon: 'fa-heartbeat',
            },
            {
              name: 'CJC-1295 / Ipamorelin',
              cat: 'Anti-Aging & Longevity',
              badge: 'Growing Trend',
              badgeColor: 'bg-violet-100 text-violet-700',
              desc: 'GH secretagogue combination for lean mass preservation, improved sleep quality, fat reduction, and cellular rejuvenation.',
              icon: 'fa-dna',
            },
          ].map(p => (
            <div class="card-clean p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <i class={`fas ${p.icon} text-green-600`}></i>
                </div>
                <span class={`text-xs font-semibold px-3 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
              </div>
              <p class="label-caps mb-1">{p.cat}</p>
              <h3 class="font-bold text-gray-900 text-lg mb-3">{p.name}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div class="mt-8 flex items-center gap-4">
          <a href="/apply" class="btn-outline-black">Request Full Catalog</a>
          <span class="text-sm text-gray-400">No commitment required</span>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        WHY US — white, 3-col features
    ═══════════════════════════════════════ */}
    <section id="why-us" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="max-w-2xl mb-16">
          <span class="label-caps block mb-3">Why Plug & Play Peptides</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3rem);">
            Built for the<br />people selling health.
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            The peptide market is one of the fastest-growing segments in health. We're the only end-to-end white-label platform that lets you enter it cleanly, compliantly, and profitably.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: 'fa-user-md', title: 'Licensed Physician Network', body: 'Every product flows through board-certified physicians in our network. Prescriptions, consultations, dispensing — all managed.' },
            { icon: 'fa-flask', title: 'Pharmaceutical-Grade Quality', body: 'Sourced exclusively from licensed, inspected compounding pharmacies. COAs available for every batch. No shortcuts.' },
            { icon: 'fa-laptop-medical', title: 'Branded Patient Portal', body: 'Your audience shops at your URL. A fully white-labeled telehealth portal with your name, logo, and brand.' },
            { icon: 'fa-shipping-fast', title: 'Nationwide Fulfillment', body: 'Discreet, temperature-controlled shipping direct to patients across the US with real-time order tracking.' },
            { icon: 'fa-graduation-cap', title: 'Partner Education Library', body: 'Medical content, compliance guides, marketing assets, and messaging templates — everything you need to sell confidently.' },
            { icon: 'fa-expand-arrows-alt', title: 'Scales With You', body: 'From 10 orders to 10,000 a month — the infrastructure handles it. Your support team grows with your volume.' },
          ].map(f => (
            <div class="p-6">
              <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                <i class={`fas ${f.icon} text-green-600 text-sm`}></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Compliance callout */}
        <div class="mt-12 bg-gray-950 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <i class="fas fa-shield-alt text-green-400 text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-white font-bold text-lg mb-2">100% compliant. Your liability is zero.</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Every product is prescribed by a licensed physician and dispensed by an FDA-registered compounding pharmacy. Our legal team monitors the regulatory landscape continuously — so your brand never has to.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 md:flex-col">
            {['Licensed Pharmacies', 'Board-Certified MDs', 'HIPAA Compliant', 'State-Licensed'].map(b => (
              <span class="inline-flex items-center gap-1.5 bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
                <i class="fas fa-check text-green-400" style="font-size:9px"></i>{b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        TESTIMONIALS — cream
    ═══════════════════════════════════════ */}
    <section class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="max-w-xl mb-14">
          <span class="label-caps block mb-3">Partner Stories</span>
          <h2 class="display-sans text-gray-900" style="font-size:clamp(2rem,4vw,3rem);">
            What partners<br />are saying.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "I launched my peptide brand in under 3 weeks. First month was $22K in revenue. My audience was already asking for this — Plug & Play made it real.",
              name: 'Alex M.',
              role: 'Fitness Creator, 800K followers',
              initial: 'A',
            },
            {
              quote: "We added $45K/month in recurring revenue to our med spa without hiring a single new staff member. The physician network handles all the clinical work.",
              name: 'Dr. Sarah K.',
              role: 'Medical Spa Owner, Miami FL',
              initial: 'S',
            },
            {
              quote: "The compliance structure is bulletproof. Every patient sees a doctor. I just promote my brand and earn — it's a completely hands-off income stream.",
              name: 'Jordan T.',
              role: 'Biohacking Creator, 1.2M followers',
              initial: 'J',
            },
          ].map(t => (
            <div class="card-clean p-6 md:p-8">
              <div class="flex mb-4">
                {[1,2,3,4,5].map(() => <span class="text-amber-400 text-sm mr-0.5">★</span>)}
              </div>
              <p class="text-gray-700 text-base leading-relaxed mb-6">"{t.quote}"</p>
              <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p class="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        FINAL CTA — black
    ═══════════════════════════════════════ */}
    <section class="section-black py-24">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span class="tag-green mb-6 mx-auto"><i class="fas fa-circle text-green-500" style="font-size:6px"></i>Applications Open</span>
        <h2 class="display-serif text-white mb-6 mx-auto block" style="font-size:clamp(2.5rem,5vw,4.5rem);">
          Ready to launch<br />your peptide brand?
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Join 50+ brands and creators already earning with their own white-label peptide lines. Applications take less than 5 minutes.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/apply?type=business" class="btn-green w-full sm:w-auto justify-center">
            <i class="fas fa-building"></i> I'm a Business
          </a>
          <a href="/apply?type=influencer" class="btn-outline-black w-full sm:w-auto justify-center" style="border-color:#fff;color:#fff;" onmouseover="this.style.background='#fff';this.style.color='#111'" onmouseout="this.style.background='transparent';this.style.color='#fff'">
            <i class="fas fa-star"></i> I'm a Creator
          </a>
        </div>
        <p class="text-gray-600 text-sm mt-6">
          <i class="fas fa-lock text-xs mr-1"></i>Confidential application · No commitment required
        </p>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      // Scroll shadow for nav
      const header = document.getElementById('site-header');
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
      });

      // Fade-up on scroll
      const fadeEls = document.querySelectorAll('.fade-up');
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
      }, { threshold: 0.1 });
      fadeEls.forEach(el => obs.observe(el));
    ` }} />
  </>
)
