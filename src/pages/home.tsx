export const homePage = () => (
  <>
    {/* ===== HERO SECTION ===== */}
    <section class="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-700/10 rounded-full blur-3xl"></div>
        {/* DNA helix dots */}
        <div class="absolute top-20 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full"></div>
        <div class="absolute top-32 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full"></div>
        <div class="absolute top-48 left-1/5 w-3 h-3 bg-emerald-300/20 rounded-full"></div>
        <div class="absolute bottom-32 right-1/4 w-2 h-2 bg-teal-500/30 rounded-full"></div>
        <div class="absolute bottom-48 right-1/3 w-1 h-1 bg-emerald-400/40 rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <i class="fas fa-certificate mr-2 text-xs"></i>
              Physician-Supervised • White-Label Ready
            </div>
            <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span class="text-white">Launch Your Own</span><br />
              <span class="gradient-text">Peptide Brand</span><br />
              <span class="text-white">In Weeks, Not Years</span>
            </h1>
            <p class="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Partner with Plug & Play Peptides to sell premium peptide products under <strong class="text-white">your brand name</strong> — dispensed compliantly through licensed physicians. No lab. No compliance headaches. Just revenue.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/apply" class="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center">
                <i class="fas fa-rocket mr-2"></i>
                Apply to Partner
              </a>
              <a href="/#how-it-works" class="btn-outline font-bold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center">
                <i class="fas fa-play-circle mr-2"></i>
                See How It Works
              </a>
            </div>
            <div class="flex items-center gap-6 mt-8">
              <div class="flex -space-x-2">
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">B</div>
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">I</div>
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">F</div>
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">+</div>
              </div>
              <p class="text-slate-400 text-sm"><span class="text-white font-semibold">50+ brands & influencers</span> already partnered</p>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div class="hidden lg:block">
            <div class="relative">
              <div class="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 glow-green">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <p class="text-slate-400 text-xs uppercase tracking-wider">Your Brand Dashboard</p>
                    <h3 class="text-white font-bold text-lg mt-1">Performance Overview</h3>
                  </div>
                  <div class="tag-pill px-3 py-1 rounded-full text-xs font-medium">
                    <i class="fas fa-circle text-xs mr-1" style="color:#10b981"></i> Live
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="stat-card rounded-xl p-4">
                    <p class="text-slate-400 text-xs mb-1">Monthly Revenue</p>
                    <p class="text-white text-2xl font-bold">$48,250</p>
                    <p class="text-emerald-400 text-xs mt-1"><i class="fas fa-arrow-up mr-1"></i>+32% this month</p>
                  </div>
                  <div class="stat-card rounded-xl p-4">
                    <p class="text-slate-400 text-xs mb-1">Active Patients</p>
                    <p class="text-white text-2xl font-bold">1,847</p>
                    <p class="text-emerald-400 text-xs mt-1"><i class="fas fa-arrow-up mr-1"></i>+18% this month</p>
                  </div>
                  <div class="stat-card rounded-xl p-4">
                    <p class="text-slate-400 text-xs mb-1">Products Active</p>
                    <p class="text-white text-2xl font-bold">12</p>
                    <p class="text-slate-400 text-xs mt-1">Under your brand</p>
                  </div>
                  <div class="stat-card rounded-xl p-4">
                    <p class="text-slate-400 text-xs mb-1">Reorder Rate</p>
                    <p class="text-white text-2xl font-bold">76%</p>
                    <p class="text-emerald-400 text-xs mt-1"><i class="fas fa-star mr-1"></i>Industry leading</p>
                  </div>
                </div>

                <div class="bg-slate-900/60 rounded-xl p-4">
                  <p class="text-slate-400 text-xs mb-3">Recent Orders</p>
                  {[
                    { product: 'BPC-157 Pro', customer: 'Patient #2847', status: 'Dispensed', amount: '$189' },
                    { product: 'Semaglutide', customer: 'Patient #2846', status: 'Processing', amount: '$345' },
                    { product: 'TB-500 Elite', customer: 'Patient #2845', status: 'Dispensed', amount: '$220' },
                  ].map((order) => (
                    <div class="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                      <div>
                        <p class="text-white text-xs font-medium">{order.product}</p>
                        <p class="text-slate-500 text-xs">{order.customer}</p>
                      </div>
                      <div class="text-right">
                        <p class="text-white text-xs font-semibold">{order.amount}</p>
                        <span class={`text-xs ${order.status === 'Dispensed' ? 'text-emerald-400' : 'text-amber-400'}`}>{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badges */}
              <div class="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <i class="fas fa-shield-alt mr-1"></i>FDA Compliant
              </div>
              <div class="absolute -bottom-4 -left-4 bg-slate-800 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <i class="fas fa-tag mr-1"></i>Your Brand, Your Margins
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== STATS BAR ===== */}
    <section class="bg-slate-800/50 border-y border-slate-700/50 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Active Partners', icon: 'fa-handshake' },
            { value: '98%', label: 'Partner Retention Rate', icon: 'fa-heart' },
            { value: '2–4 Wks', label: 'Average Launch Time', icon: 'fa-rocket' },
            { value: '100%', label: 'Physician-Supervised', icon: 'fa-user-md' },
          ].map((stat) => (
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                <i class={`fas ${stat.icon} text-emerald-400 text-lg`}></i>
              </div>
              <div class="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div class="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== HOW IT WORKS ===== */}
    <section id="how-it-works" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <i class="fas fa-map mr-2 text-xs"></i>Simple Process
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            From Application to <span class="gradient-text">Revenue</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            We've built the entire infrastructure so you don't have to. Just bring your audience — we handle everything else.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {[
            {
              step: '01',
              icon: 'fa-file-alt',
              title: 'Apply & Onboard',
              desc: 'Submit your application. Our team reviews your brand, audience, and goals. Onboarding takes as little as 48 hours.',
            },
            {
              step: '02',
              icon: 'fa-palette',
              title: 'Brand Your Line',
              desc: 'Choose from our curated peptide catalog. We custom-label everything under your brand name, logo, and aesthetic.',
            },
            {
              step: '03',
              icon: 'fa-user-md',
              title: 'Physician Network Activated',
              desc: 'Our licensed physician network reviews and approves patient consultations, ensuring full compliance at every step.',
            },
            {
              step: '04',
              icon: 'fa-chart-line',
              title: 'Sell & Scale',
              desc: 'Drive your audience to your branded portal. Patients consult with doctors, get approved, and receive products. You earn.',
            },
          ].map((item, i) => (
            <div class="card-hover bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center relative">
              <div class="text-slate-700 text-6xl font-black absolute top-4 right-4 leading-none select-none">{item.step}</div>
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                <i class={`fas ${item.icon} text-emerald-400 text-xl`}></i>
              </div>
              <h3 class="text-white font-bold text-lg mb-3 relative z-10">{item.title}</h3>
              <p class="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

        <div class="text-center mt-12">
          <a href="/apply" class="btn-primary text-white font-bold px-10 py-4 rounded-xl text-base inline-flex items-center">
            <i class="fas fa-arrow-right mr-2"></i>
            Start Your Application
          </a>
        </div>
      </div>
    </section>

    {/* ===== FOR BUSINESSES ===== */}
    <section id="for-businesses" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <i class="fas fa-building mr-2 text-xs"></i>For Businesses
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
              White-Label Peptides<br /><span class="gradient-text">Under Your Brand</span>
            </h2>
            <p class="text-slate-300 text-lg leading-relaxed mb-8">
              Whether you run a wellness clinic, supplement brand, medical spa, or health-focused e-commerce store — we power your peptide line from end to end.
            </p>
            <div class="space-y-4 mb-8">
              {[
                { icon: 'fa-flask', title: 'Full Product Catalog Access', desc: 'BPC-157, TB-500, Semaglutide, Tirzepatide, PT-141, and more — all available for white-labeling.' },
                { icon: 'fa-tag', title: 'Custom Branding & Packaging', desc: 'Your logo, your name, your aesthetic. We handle all label design and packaging production.' },
                { icon: 'fa-balance-scale', title: 'Built-In Legal & Compliance', desc: 'Every product dispensed through our licensed physician network. Zero compliance risk for you.' },
                { icon: 'fa-chart-bar', title: 'Revenue Share Model', desc: 'Competitive margins on every unit sold. The more you scale, the better your margins get.' },
                { icon: 'fa-headset', title: 'Dedicated Partner Support', desc: 'A dedicated account manager to help you launch, optimize, and grow your peptide revenue.' },
              ].map((feature) => (
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class={`fas ${feature.icon} text-emerald-400 text-sm`}></i>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">{feature.title}</h4>
                    <p class="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/apply?type=business" class="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center">
              <i class="fas fa-building mr-2"></i>Apply as a Business
            </a>
          </div>

          {/* Business Visual */}
          <div class="space-y-4">
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 card-hover">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <i class="fas fa-spa text-white"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold">Wellness Clinics</h4>
                  <p class="text-slate-400 text-sm">Add peptides to your existing service menu</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Offer clients anti-aging, recovery, and weight management peptide protocols — prescribed on-site or via telehealth integration.</p>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 card-hover">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <i class="fas fa-shopping-bag text-white"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold">Supplement Brands</h4>
                  <p class="text-slate-400 text-sm">Expand beyond OTC with prescription peptides</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Complement your existing product line with physician-dispensed peptides. Give your customers the clinical-grade options they're already asking for.</p>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 card-hover">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                  <i class="fas fa-dumbbell text-white"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold">Fitness & Performance</h4>
                  <p class="text-slate-400 text-sm">Recovery, muscle growth, and fat loss protocols</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">From BPC-157 recovery to GH secretagogues for lean mass — build a full performance peptide brand your audience trusts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== FOR INFLUENCERS ===== */}
    <section id="for-influencers" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Influencer Visual */}
          <div class="order-2 lg:order-1">
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 glow-green">
              <h3 class="text-white font-bold text-xl mb-6">Your Potential Monthly Earnings</h3>
              <div class="space-y-4">
                {[
                  { tier: 'Micro (10K–50K followers)', orders: '50–150', monthly: '$5,000–$18,000', color: 'from-slate-500 to-slate-600' },
                  { tier: 'Mid-Tier (50K–500K)', orders: '150–600', monthly: '$18,000–$75,000', color: 'from-emerald-600 to-teal-600' },
                  { tier: 'Macro (500K–2M)', orders: '600–2,500', monthly: '$75,000–$300,000', color: 'from-emerald-500 to-green-500' },
                  { tier: 'Mega (2M+ followers)', orders: '2,500+', monthly: '$300,000+', color: 'from-amber-500 to-orange-500' },
                ].map((tier) => (
                  <div class="bg-slate-900/60 rounded-xl p-4">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-slate-300 text-sm font-medium">{tier.tier}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-slate-500 text-xs">Est. Monthly Orders</p>
                        <p class="text-white font-semibold text-sm">{tier.orders}</p>
                      </div>
                      <div class="text-right">
                        <p class="text-slate-500 text-xs">Est. Monthly Revenue</p>
                        <p class={`font-bold text-sm bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`} style="background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent">{tier.monthly}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p class="text-slate-500 text-xs mt-4 text-center">*Estimates based on average conversion rates. Actual results vary.</p>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <i class="fas fa-star mr-2 text-xs"></i>For Influencers & Creators
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Monetize Your Audience<br /><span class="gradient-text">With Your Own Brand</span>
            </h2>
            <p class="text-slate-300 text-lg leading-relaxed mb-8">
              Stop promoting other people's products. With Plug & Play Peptides, <strong class="text-white">you own the brand</strong>. Your audience buys <em>your</em> peptides — and you keep the margins.
            </p>
            <div class="space-y-4 mb-8">
              {[
                { icon: 'fa-bolt', title: 'Launch in 2–4 Weeks', desc: 'We handle brand creation, physician onboarding, and compliance so you can launch fast.' },
                { icon: 'fa-percentage', title: 'Industry-High Margins', desc: 'Earn significantly more than affiliate commissions. These are YOUR products at YOUR margins.' },
                { icon: 'fa-link', title: 'Custom-Branded Patient Portal', desc: 'Your audience shops at your branded URL. Seamless, professional, and physician-backed.' },
                { icon: 'fa-repeat', title: 'Recurring Revenue', desc: 'Peptide protocols require monthly refills. Build a subscription-based income stream from your audience.' },
                { icon: 'fa-shield-alt', title: 'Full Legal Protection', desc: 'All products dispensed by licensed doctors. You promote — they prescribe. Zero liability for you.' },
              ].map((feature) => (
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class={`fas ${feature.icon} text-emerald-400 text-sm`}></i>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">{feature.title}</h4>
                    <p class="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/apply?type=influencer" class="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center">
              <i class="fas fa-star mr-2"></i>Apply as an Influencer
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ===== WHY US ===== */}
    <section id="why-us" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <i class="fas fa-trophy mr-2 text-xs"></i>Our Advantage
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why <span class="gradient-text">Plug & Play Peptides?</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            The peptide market is booming. We've built the only end-to-end white-label platform that lets you tap into it — legally and profitably.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: 'fa-user-md',
              title: 'Licensed Physician Network',
              desc: 'Every peptide order flows through board-certified physicians in our network. Prescriptions, consultations, and dispensing — all handled.',
              color: 'from-emerald-500 to-teal-600',
            },
            {
              icon: 'fa-flask',
              title: 'Pharmaceutical-Grade Products',
              desc: 'All compounds sourced from licensed, inspected compounding pharmacies. COAs available for every batch. No compromise on quality.',
              color: 'from-teal-500 to-cyan-600',
            },
            {
              icon: 'fa-cogs',
              title: 'Full-Stack Infrastructure',
              desc: 'Branded patient portal, telehealth integration, CRM, order management, and partner dashboard — all included. No tech required.',
              color: 'from-emerald-600 to-green-700',
            },
            {
              icon: 'fa-shipping-fast',
              title: 'Nationwide Fulfillment',
              desc: 'Discreet, professional packaging shipped directly to patients across the US with real-time tracking and temperature control.',
              color: 'from-sky-500 to-blue-600',
            },
            {
              icon: 'fa-graduation-cap',
              title: 'Partner Education Portal',
              desc: 'Access our library of medical content, marketing materials, and educational resources to confidently promote your brand.',
              color: 'from-violet-500 to-purple-600',
            },
            {
              icon: 'fa-expand-arrows-alt',
              title: 'Scale Without Limits',
              desc: 'Our infrastructure handles 10 orders or 10,000 orders a month. As you grow, your dedicated support team grows with you.',
              color: 'from-amber-500 to-orange-600',
            },
          ].map((item) => (
            <div class="card-hover bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <div class={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center mb-4`} style={`background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.25))`}>
                <i class={`fas ${item.icon} text-emerald-400 text-xl`}></i>
              </div>
              <h3 class="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Compliance Banner */}
        <div class="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-2xl p-8 text-center">
          <i class="fas fa-shield-alt text-emerald-400 text-3xl mb-4 block"></i>
          <h3 class="text-white font-bold text-2xl mb-3">100% Compliant. 100% Protected.</h3>
          <p class="text-slate-300 max-w-2xl mx-auto mb-4">
            Every product in our catalog is dispensed through licensed compounding pharmacies and prescribed by board-certified physicians — following all FDA and DEA guidelines. Our legal team monitors the regulatory landscape so your business stays protected.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-4">
            {['Licensed Compounding Pharmacies', 'Board-Certified Physicians', 'HIPAA Compliant Technology', 'State-Licensed Operations'].map((badge) => (
              <div class="tag-pill px-4 py-2 rounded-full text-sm font-medium">
                <i class="fas fa-check-circle mr-2"></i>{badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ===== PRODUCT CATALOG PREVIEW ===== */}
    <section class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <i class="fas fa-vials mr-2 text-xs"></i>Product Portfolio
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            A Catalog Built for <span class="gradient-text">Every Audience</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            From longevity to weight loss to performance — our catalog covers the most in-demand peptide protocols.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Semaglutide', category: 'Weight Management', icon: 'fa-weight', badge: 'Top Seller', badgeColor: 'bg-amber-500', desc: 'GLP-1 receptor agonist for sustainable weight loss. The #1 most-requested peptide in the market.' },
            { name: 'Tirzepatide', category: 'Weight Management', icon: 'fa-fire', badge: 'Hot', badgeColor: 'bg-rose-500', desc: 'Dual GIP/GLP-1 agonist for superior weight reduction with improved metabolic outcomes.' },
            { name: 'BPC-157', category: 'Recovery & Healing', icon: 'fa-heartbeat', badge: 'Popular', badgeColor: 'bg-emerald-500', desc: 'Body Protection Compound for accelerated tissue repair, gut healing, and injury recovery.' },
            { name: 'TB-500', category: 'Recovery & Performance', icon: 'fa-running', badge: '', badgeColor: '', desc: 'Thymosin Beta-4 for enhanced muscle recovery, reduced inflammation, and improved flexibility.' },
            { name: 'CJC-1295 / Ipamorelin', category: 'Anti-Aging & Longevity', icon: 'fa-dna', badge: 'Trending', badgeColor: 'bg-violet-500', desc: 'Growth hormone secretagogue stack for lean mass, fat loss, improved sleep, and anti-aging.' },
            { name: 'PT-141', category: 'Sexual Health', icon: 'fa-heart', badge: '', badgeColor: '', desc: 'Bremelanotide for sexual health and libido enhancement in both men and women.' },
            { name: 'Sermorelin', category: 'Anti-Aging', icon: 'fa-clock', badge: '', badgeColor: '', desc: 'GH-releasing hormone analog for improved sleep, body composition, and vitality.' },
            { name: 'Epithalon', category: 'Longevity', icon: 'fa-infinity', badge: 'New', badgeColor: 'bg-teal-500', desc: 'Telomere-activating tetrapeptide for cellular rejuvenation and longevity optimization.' },
            { name: 'Melanotan II', category: 'Tanning & Libido', icon: 'fa-sun', badge: '', badgeColor: '', desc: 'Alpha-MSH analog for UV-protective melanin production and libido enhancement.' },
          ].map((product) => (
            <div class="card-hover bg-slate-800/40 border border-slate-700 rounded-2xl p-5 relative">
              {product.badge && (
                <span class={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{product.badge}</span>
              )}
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <i class={`fas ${product.icon} text-emerald-400`}></i>
                </div>
                <div>
                  <h4 class="text-white font-bold">{product.name}</h4>
                  <span class="text-emerald-400/70 text-xs">{product.category}</span>
                </div>
              </div>
              <p class="text-slate-400 text-sm leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>

        <div class="text-center mt-10">
          <p class="text-slate-400 mb-4">Full catalog includes 20+ products. More added quarterly.</p>
          <a href="/apply" class="btn-outline font-bold px-8 py-3 rounded-xl text-sm inline-flex items-center">
            <i class="fas fa-list mr-2"></i>Request Full Catalog
          </a>
        </div>
      </div>
    </section>

    {/* ===== TESTIMONIALS ===== */}
    <section class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <i class="fas fa-quote-left mr-2 text-xs"></i>Partner Voices
          </div>
          <h2 class="text-4xl font-extrabold text-white mb-4">
            What Our Partners <span class="gradient-text">Are Saying</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "I launched my own peptide brand in under 3 weeks. The first month I did $22K in revenue. My audience was already asking for this — Plug & Play just made it real.",
              name: 'Alex M.',
              role: 'Fitness Influencer, 800K Followers',
              avatar: 'A',
              gradient: 'from-emerald-400 to-teal-500',
            },
            {
              quote: "We integrated their platform into our med spa and added $45K/month in recurring revenue without hiring a single new staff member. The physician network handles everything.",
              name: 'Dr. Sarah K.',
              role: 'Medical Spa Owner, Miami FL',
              avatar: 'S',
              gradient: 'from-violet-400 to-purple-500',
            },
            {
              quote: "I was skeptical about compliance, but their legal structure is bulletproof. Every patient goes through a doctor. I just promote and earn — it's a completely hands-off income stream.",
              name: 'Jordan T.',
              role: 'Biohacking Creator, 1.2M Followers',
              avatar: 'J',
              gradient: 'from-amber-400 to-orange-500',
            },
          ].map((t) => (
            <div class="testimonial-card rounded-2xl p-6 card-hover">
              <div class="flex mb-4">
                {[1,2,3,4,5].map(() => <i class="fas fa-star text-amber-400 text-sm mr-0.5"></i>)}
              </div>
              <p class="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div class="flex items-center gap-3">
                <div class={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{t.avatar}</div>
                <div>
                  <p class="text-white font-semibold text-sm">{t.name}</p>
                  <p class="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== FINAL CTA ===== */}
    <section class="py-24 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-br from-emerald-900/30 via-slate-800 to-teal-900/30 border border-emerald-500/20 rounded-3xl p-12 glow-green">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-dna text-white text-2xl"></i>
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Launch<br /><span class="gradient-text">Your Peptide Brand?</span>
          </h2>
          <p class="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Join the growing network of businesses and influencers earning with their own white-label peptide lines. Applications take less than 5 minutes.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply?type=business" class="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center">
              <i class="fas fa-building mr-2"></i>I'm a Business
            </a>
            <a href="/apply?type=influencer" class="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1">
              <i class="fas fa-star mr-2"></i>I'm an Influencer
            </a>
          </div>
          <p class="text-slate-500 text-sm mt-6">
            <i class="fas fa-lock mr-1"></i>
            Your application is confidential. No commitment required.
          </p>
        </div>
      </div>
    </section>
  </>
)
