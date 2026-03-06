// All image URLs sourced from image_search tool (license-filtered)
const IMGS = {
  heroAthlete: 'https://sspark.genspark.ai/cfimages?u1=ZdowuU602ahWL4IcSs5hMShhG1QbJ0YZFvtHBh32Mec03d0%2BmXNE2Wtxv7tw3HV1UhItixvyFrDuzKnV%2FhFmgIubCydpsDvWB9v0C%2BlqZvjxhJj8Xjngy%2FmV49P4970zhsOAzUDsp18Jx%2BuceLgVCk7ZCJh4NUEzvPLYIAfLJceksLMCCo9CLAJYRic%3D&u2=eVUZt9TGwAzZCnnY&width=2560',
  coupleJog: 'https://sspark.genspark.ai/cfimages?u1=YlOOMyA3N8i%2Fzj2uekkQlVklXzjPq%2FRgVZj7zL66tQqaHoTOrVNGatm3go3W7h2MjW9tzBwMJoCB%2BJ%2FeQuCK6m8kAx1eO%2FW%2B9qnTC%2BxDHPtxuA%3D%3D&u2=R03jZHwAEMg8fKLz&width=2560',
  creatorWoman: 'https://sspark.genspark.ai/cfimages?u1=eEf1KxscPQXV%2F5SIVb3w%2Fw4Leotk6%2BFuY7muE%2FOBwq9u%2F6qrJDvVjLLl4o8AfV4tB4OnpkT25hJ0zFh6nYOuYKfwJvoucjpKCZbzi5b5LUEOGg%3D%3D&u2=mbVXo%2BVqexsSj1jC&width=2560',
  creatorMan: 'https://sspark.genspark.ai/cfimages?u1=JSOQyYk%2FBbS8csUbiHaKTp7ZCjTUS7%2BStjkgBvW6gnWxyqHI9M%2Bd6AwcP6i2HcQnBvHP2snAPfAaeYtmkYbcaF66ubWJqNjEuoojEDsdnjM%2BUA%3D%3D&u2=tQGTQJ7ot9JtaMYS&width=2560',
  doctorTelehealth: 'https://sspark.genspark.ai/cfimages?u1=BQnS04fN7YRxdMstKz5TMSAI7yp58IQbp6Z29nFozDsFIZRvHukIF7XjbxrUJPv7muoQZ85kw65Vcux5rFX%2FgYJQA5N2s8sIKf%2F8wAo%2Fh1Hq5w%3D%3D&u2=tC9P5GGTcIYRSP1J&width=2560',
  doctorFemale: 'https://sspark.genspark.ai/cfimages?u1=Hoin65eiqZ0oMAQoq5ABA7X9Bn%2B4t8e%2BDh%2FyipUGJFMXaZt92nNxqUBXBBVk6rz3Oykuqzeqei4KynA6BDmovBVaKptcG%2BZediiNfHeeVCHaGg%3D%3D&u2=s695TUWMqzau4tWq&width=2560',
  medSpa: 'https://sspark.genspark.ai/cfimages?u1=tuHgjNrdFR%2BvpEL0pv%2Bdgh7o321cO0mSUNSAiD3XrCWwwCVHWeBz7GKP%2BVVer034Pe7y1FQNcsxhB8NVV63PUd5zIWGtdXg4ldL24YWsVtva0DX1G9yDc5bpjX8fn8ERJj7qgbDBVYW5AvPE1a6RGIYVz2Cz0VmyVyUFu2cVb4y57hkbv4UFvvefxg%3D%3D&u2=IhmJUJyZEm8nfDoS&width=2560',
  womanSmiling: 'https://sspark.genspark.ai/cfimages?u1=2jjgGW47VW50pEzJKshJj1lQ7pg8Re3i%2Fqs8tu6JDS6zWgK470LMao%2FAUH8SVQExMG0XIBGxOwYG14%2BuxQZgE1j%2BOKRi01z4u66ms8FF9o0fXA%3D%3D&u2=ABarFACbt16CiY8J&width=2560',
  coupleSport: 'https://sspark.genspark.ai/cfimages?u1=nDjtvHtqLJc9YeJ2rjT4gfB0Ufr1jgGgfRfbKjXcdd246hUJTW938KPZE%2F%2B49Ak0%2BqGP41I40AcFckX4Q7ZqdOHcsqUfKRlyZbgVfYqTb4BCwhnerbY%2FxBwCigw5kqgLxMpHERrFAraaINNrdakgXagFB4rDqUI%3D&u2=K3DVyzlSrZh6uQlR&width=2560',
  influencerTripod: 'https://sspark.genspark.ai/cfimages?u1=AY73JZRcY7b6B7AYxKvRKi62CmryShXlDLZmd90HmUtx2s1PboS8%2F8znwZ7CR5pBwwHsc7N%2Ft5p6%2BbO9i5rNYNfDzGs5AW3WbN1GD%2B40cugjTQ%3D%3D&u2=WZphExal%2BUAfUfRl&width=2560',
}

export const homePage = () => (
  <>

    {/* ═══════════════════════════════════
        HERO — Bold headline + benefit tabs
    ═══════════════════════════════════ */}
    <section class="section-white pt-20 pb-0">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Headline block */}
        <div class="max-w-4xl mb-14">
          <p class="text-gray-700 text-lg font-semibold mb-4" style="letter-spacing:0.01em;">
            All of the profit. <em style="color:#16a34a;">None of the headaches.</em>
          </p>
          <h1 class="display-serif text-gray-900 mb-6" style="font-size:clamp(2.2rem,4.5vw,5rem); line-height:1.15;">
            Your <em><span id="rotating-word" style="display:inline-block; min-width:3ch; color:#16a34a;">patients</span></em> are<br />
            already buying peptides.<br />
            Just not from you.<br />
            <em style="color:#16a34a;">Until now...</em>
          </h1>

          <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              const words = ['patients', 'followers', 'members'];
              let index = 0;
              const el = document.getElementById('rotating-word');
              if (!el) return;
              setInterval(function() {
                el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateY(-8px)';
                setTimeout(function() {
                  index = (index + 1) % words.length;
                  el.textContent = words[index];
                  el.style.transform = 'translateY(8px)';
                  el.style.opacity = '0';
                  requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                      el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                      el.style.opacity = '1';
                      el.style.transform = 'translateY(0)';
                    });
                  });
                }, 350);
              }, 2200);
            })();
          ` }} />
          <p class="text-gray-700 text-xl" style="font-weight:400; max-width:36rem;">
            Launch your own physician-supervised peptide brand — effortlessly. We handle everything from compliance to fulfillment.
          </p>
        </div>

        {/* Benefit tabs — Hims-style */}
        <div class="border-b border-gray-200 mb-0">
          <div class="flex gap-0 overflow-x-auto" id="hero-tabs" style="scrollbar-width:none;">
            {[
              { id: 0, label: 'Your own company' },
              { id: 1, label: 'Physician network' },
              { id: 2, label: 'Effortless launch' },
              { id: 3, label: 'For businesses' },
              { id: 4, label: 'For creators' },
            ].map(tab => (
              <button
                class="hero-tab flex-shrink-0 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent transition-colors whitespace-nowrap hover:text-gray-900"
                id={`tab-btn-${tab.id}`}
                onclick={`switchTab(${tab.id})`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels */}
        <div class="relative" style="min-height:420px;">

          {/* Tab 0 — Your own company */}
          <div class="hero-panel grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14" id="panel-0">
            <div>
              <span class="label-caps block mb-4">White-Label, Fully Yours</span>
              <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">
                Your logo.<br />Your name.<br />Your patients.
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Every touchpoint — packaging, patient portal, order emails — carries your brand. Your customers never see our name.
              </p>
              <a href="/apply" class="btn-black">Get Started →</a>
            </div>
            <div class="rounded-3xl overflow-hidden h-80 lg:h-96">
              <img
                src={IMGS.medSpa}
                alt="Branded wellness clinic"
                class="w-full h-full object-cover"
                style="object-position:50% 50%"
              />
            </div>
          </div>

          {/* Tab 1 — Physician network */}
          <div class="hero-panel hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14" id="panel-1">
            <div>
              <span class="label-caps block mb-4">Real Medicine. Real Doctors.</span>
              <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">
                Board-certified<br />physicians in<br />all 50 states.
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Every patient gets a real consultation. Our physicians review health history, write valid prescriptions, and monitor outcomes. You never touch the clinical side.
              </p>
              <a href="/apply" class="btn-black">Get Started →</a>
            </div>
            <div class="rounded-3xl overflow-hidden h-80 lg:h-96">
              <img
                src={IMGS.doctorFemale}
                alt="Board-certified physician"
                class="w-full h-full object-cover"
                style="object-position:50% 22%"
              />
            </div>
          </div>

          {/* Tab 2 — Effortless launch */}
          <div class="hero-panel hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14" id="panel-2">
            <div>
              <span class="label-caps block mb-4">Plug & Play — Literally</span>
              <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">
                Live in weeks.<br />Not months.<br />Not years.
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Brand build-out, physician onboarding, patient portal, fulfillment setup — all done for you. You focus on your audience. We handle everything else.
              </p>
              <a href="/apply" class="btn-black">Get Started →</a>
            </div>
            <div class="rounded-3xl overflow-hidden h-80 lg:h-96">
              <img
                src={IMGS.doctorTelehealth}
                alt="Easy setup process"
                class="w-full h-full object-cover"
                style="object-position:45% 28%"
              />
            </div>
          </div>

          {/* Tab 3 — For businesses */}
          <div class="hero-panel hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14" id="panel-3">
            <div>
              <span class="label-caps block mb-4">Med Spas · Clinics · Wellness Brands</span>
              <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">
                A new revenue line.<br />No new staff.<br />No new overhead.
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Plug a peptide revenue line into your existing business. Your patients buy under your brand — we handle everything behind the scenes.
              </p>
              <a href="/apply?type=business" class="btn-black">Apply as a Business →</a>
            </div>
            <div class="rounded-3xl overflow-hidden h-80 lg:h-96">
              <img
                src={IMGS.coupleJog}
                alt="Successful wellness business"
                class="w-full h-full object-cover"
                style="object-position:50% 30%"
              />
            </div>
          </div>

          {/* Tab 4 — For creators */}
          <div class="hero-panel hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14" id="panel-4">
            <div>
              <span class="label-caps block mb-4">Influencers · Coaches · Content Creators</span>
              <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">
                Stop building<br />someone else's brand<br />with your audience.
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Your followers trust you. Turn that trust into recurring revenue with your own peptide line — doctor-prescribed, shipped direct, branded as you.
              </p>
              <a href="/apply?type=influencer" class="btn-black">Apply as a Creator →</a>
            </div>
            <div class="rounded-3xl overflow-hidden h-80 lg:h-96">
              <img
                src={IMGS.creatorWoman}
                alt="Content creator with own brand"
                class="w-full h-full object-cover"
                style="object-position:50% 18%"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      function switchTab(id) {
        document.querySelectorAll('.hero-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.hero-tab').forEach(b => {
          b.classList.remove('text-gray-900','border-gray-900');
          b.classList.add('text-gray-400','border-transparent');
        });
        document.getElementById('panel-' + id).classList.remove('hidden');
        const btn = document.getElementById('tab-btn-' + id);
        btn.classList.remove('text-gray-400','border-transparent');
        btn.classList.add('text-gray-900','border-gray-900');
      }
      switchTab(0);
    ` }} />

    {/* ═══════════════════════════════════
        SOCIAL PROOF TICKER
    ═══════════════════════════════════ */}
    <div class="bg-black border-t border-gray-800 py-4 overflow-hidden">
      <div class="marquee-wrap">
        <div class="marquee-track text-gray-400 text-sm font-medium">
          {[
            '✦  50+ Active Partner Brands',
            '✦  Physician Network in All 50 States',
            '✦  Launch in 2–4 Weeks',
            '✦  Your Logo. Your Brand. Your Revenue.',
            '✦  Licensed Compounding Pharmacies',
            '✦  HIPAA-Compliant Platform',
            '✦  Board-Certified Physicians',
            '✦  FDA-Registered Pharmacies',
            '✦  50+ Active Partner Brands',
            '✦  Physician Network in All 50 States',
            '✦  Launch in 2–4 Weeks',
            '✦  Your Logo. Your Brand. Your Revenue.',
            '✦  Licensed Compounding Pharmacies',
            '✦  HIPAA-Compliant Platform',
            '✦  Board-Certified Physicians',
            '✦  FDA-Registered Pharmacies',
          ].map(t => <span class="flex-shrink-0">{t}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)}
        </div>
      </div>
    </div>

    {/* ═══════════════════════════════════
        HOW IT WORKS — clean numbered steps
    ═══════════════════════════════════ */}
    <section id="how-it-works" class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="label-caps block mb-3">Simple Process</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            How it works.
          </h2>
          <p class="text-gray-700 text-lg">From zero to revenue. No lab, no compliance team, no prior medical experience needed.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { n: '01', emoji: '📝', title: 'Apply in 5 minutes', body: 'Tell us about your brand or audience. Our team reviews within 48 hours. No gatekeeping — if you have an audience, you qualify.' },
            { n: '02', emoji: '🏷️', title: 'We build your brand', body: 'Custom labels, branded patient portal, your URL — all designed and built for you. No minimum order quantities.' },
            { n: '03', emoji: '👨‍⚕️', title: 'Doctors handle everything clinical', body: 'Our physician network reviews every patient consultation, writes prescriptions, and approves orders. Zero clinical responsibility on your end.' },
            { n: '04', emoji: '💸', title: 'You promote. We fulfill. You earn.', body: 'Drive your audience to your branded portal. We handle fulfillment, customer service, and reorders. You collect recurring revenue.' },
          ].map(step => (
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
              <div class="step-num absolute top-2 right-3 pointer-events-none select-none">{step.n}</div>
              <div class="text-3xl mb-4 relative z-10">{step.emoji}</div>
              <h3 class="font-bold text-gray-900 text-base mb-3 relative z-10 leading-snug">{step.title}</h3>
              <p class="text-gray-700 text-sm leading-relaxed relative z-10">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        WHO IT'S BUILT FOR — cream grid
        (mirrors fusehealth "Who Fuse Is Built For")
    ═══════════════════════════════════ */}
    <section class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="label-caps block mb-3">Partner Types</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            Who Plug & Play<br />is built for.
          </h2>
          <p class="text-gray-700 text-lg">If you have an audience that trusts you on health, you're already qualified.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { img: IMGS.creatorWoman, imgPos: '50% 18%', label: 'Influencers & Creators', desc: 'Turn your audience trust into a recurring revenue stream.' },
            { img: IMGS.medSpa,       imgPos: '50% 50%', label: 'Med Spas & Clinics',    desc: 'Add a high-margin revenue line with zero new overhead.' },
            { img: IMGS.coupleJog,    imgPos: '50% 30%', label: 'Fitness & Wellness Brands', desc: 'Your audience already wants this. Now you can offer it.' },
            { img: IMGS.womanSmiling, imgPos: '50% 18%', label: 'Coaches & Educators',   desc: 'Monetize the health advice your audience already follows.' },
          ].map(a => (
            <div class="relative rounded-2xl overflow-hidden group cursor-pointer" style="height:260px;">
              <img
                src={a.img}
                alt={a.label}
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={`object-position:${a.imgPos}`}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-bold text-sm leading-tight mb-1">{a.label}</p>
                <p class="text-gray-300 text-xs leading-snug">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: IMGS.influencerTripod, imgPos: '50% 30%', label: 'E-commerce Brands',              desc: 'Add a compliant peptide SKU to your existing store.' },
            { img: IMGS.heroAthlete,      imgPos: '60% 28%', label: 'Longevity & Biohacking Communities', desc: 'Own the category your community is already obsessed with.' },
            { img: IMGS.coupleSport,      imgPos: '50% 18%', label: 'Health Apps & Platforms',         desc: 'Layer physician-prescribed peptides into your existing user base.' },
          ].map(a => (
            <div class="relative rounded-2xl overflow-hidden group cursor-pointer" style="height:220px;">
              <img
                src={a.img}
                alt={a.label}
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={`object-position:${a.imgPos}`}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-bold text-sm leading-tight mb-1">{a.label}</p>
                <p class="text-gray-300 text-xs leading-snug">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        THREE ESSENTIAL SYSTEMS
        (mirrors fusehealth "Three Essential Systems Built In")
    ═══════════════════════════════════ */}
    <section class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="label-caps block mb-3">Infrastructure</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            Three essential systems.<br />All built in.
          </h2>
          <p class="text-gray-700 text-lg">Everything you need to run a compliant peptide brand — none of the complexity.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* System 1 — Pharmacy Network */}
          <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-2xl">🏥</span>
            </div>
            <h3 class="font-bold text-gray-900 text-xl mb-3 leading-snug">Integrated Pharmacy Network</h3>
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              Direct routing to FDA-registered compounding pharmacies. Prescriptions are reviewed, compounded, and fulfilled automatically — no manual coordination required.
            </p>
            <div class="space-y-2">
              {['FDA-registered pharmacies only', 'Temperature-controlled shipping', 'COAs on every batch', 'Nationwide coverage'].map(f => (
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <span class="text-green-500 font-bold">✓</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* System 2 — Physician Network */}
          <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-2xl">👨‍⚕️</span>
            </div>
            <h3 class="font-bold text-gray-900 text-xl mb-3 leading-snug">Licensed Providers Nationwide</h3>
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              Instant access to board-certified physicians in all 50 states. Async review enables legal prescribing without appointments, calls, or clinic overhead on your end.
            </p>
            <div class="space-y-2">
              {['Board-certified specialists', 'All 50 states covered', 'Async consultations', 'Real prescriptions, real medicine'].map(f => (
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <span class="text-green-500 font-bold">✓</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* System 3 — HIPAA CRM */}
          <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div class="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-2xl">🔒</span>
            </div>
            <h3 class="font-bold text-gray-900 text-xl mb-3 leading-snug">HIPAA-Compliant CRM</h3>
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              A fully compliant patient experience paired with a built-in CRM. Manage intake, approvals, messaging, records, and the full patient lifecycle from one dashboard.
            </p>
            <div class="space-y-2">
              {['HIPAA-compliant platform', 'Branded patient portal', 'Automated reorder reminders', 'Real-time sales dashboard'].map(f => (
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <span class="text-green-500 font-bold">✓</span> {f}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        EVERYTHING YOU NEED TO LAUNCH
        (mirrors fusehealth pricing page features grid)
    ═══════════════════════════════════ */}
    <section class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="label-caps block mb-3">What's Included</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3.25rem);">
            Everything you need<br />to launch and scale.
          </h2>
          <p class="text-gray-700 text-lg">We give brands the compliant infrastructure to sell peptides end to end.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: '🏷️',
              title: 'White-Label Brand Portal',
              desc: 'A fully white-labeled patient experience with your branding, domain, and products. Your patients never see our name — just yours, end to end.',
            },
            {
              icon: '💊',
              title: 'Peptide Catalog Access',
              desc: 'Instant access to a compliant peptide catalog with clear product details, dosing options, and eligibility rules. Weight loss, recovery, longevity, and more.',
            },
            {
              icon: '📋',
              title: 'Checkout & Intake Flow',
              desc: 'A streamlined intake and checkout flow that captures patient info, routes cases correctly, and converts without friction.',
            },
            {
              icon: '🩺',
              title: 'Provider Coverage Built In',
              desc: 'Integrated physician coverage to review, approve, and prescribe. No need to source or manage clinicians separately — ever.',
            },
            {
              icon: '📦',
              title: 'Shipping & Fulfillment',
              desc: 'End-to-end fulfillment with compliant shipping, tracking, and logistics handled automatically after prescription approval.',
            },
            {
              icon: '📊',
              title: 'Admin Dashboard & Reporting',
              desc: 'A centralized dashboard to manage orders, patients, and performance with real-time visibility and actionable insights.',
            },
          ].map(f => (
            <div class="bg-white rounded-2xl p-7 border border-gray-100">
              <div class="text-3xl mb-4">{f.icon}</div>
              <h3 class="font-bold text-gray-900 text-base mb-2 leading-snug">{f.title}</h3>
              <p class="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        OPPORTUNITY — market stats
    ═══════════════════════════════════ */}
    <section class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="label-caps block mb-4">From weight loss, longevity, to recovery & performance...</span>
            <h2 class="display-sans text-gray-900 mb-6" style="font-size:clamp(2.8rem,5vw,4.5rem);">
              The peptide market<br />is <span style="color:#16a34a">exploding.</span>
            </h2>
            <p class="text-gray-800 text-lg leading-relaxed mb-8">
              Millions of people are buying peptides online, oftentimes unsafely with no medical supervision.
            </p>

            <div class="space-y-4 mb-8">
              {[
                { stat: '$8.4B', label: 'Peptide therapeutics market projected by 2028' },
                { stat: '340%', label: 'Increase in peptide searches 2022–2025' },
                { stat: '76%', label: 'Of patients reorder within 60 days' },
              ].map(s => (
                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span class="text-2xl font-extrabold text-green-600" style="letter-spacing:-0.03em;">{s.stat}</span>
                  <span class="text-gray-800 text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            <p class="text-gray-800 text-lg leading-relaxed font-medium">
              The brands and creators who get in now — with a physician-supervised, white-label platform — will own this space for the next decade.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2 rounded-2xl overflow-hidden h-72">
              <img
                src={IMGS.coupleJog}
                alt="Active healthy couple jogging"
                class="w-full h-full object-cover"
                style="object-position: 50% 30%"
              />
            </div>
            <div class="rounded-2xl overflow-hidden h-56">
              <img
                src={IMGS.womanSmiling}
                alt="Happy wellness patient"
                class="w-full h-full object-cover"
                style="object-position: 50% 20%"
              />
            </div>
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
        PRODUCT CATALOG
    ═══════════════════════════════════ */}
    <section id="catalog" class="section-cream py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span class="label-caps block mb-3">Product Portfolio</span>
            <h2 class="display-sans text-gray-900" style="font-size:clamp(2rem,4vw,3rem);">
              The products your audience<br />already wants to buy.
            </h2>
          </div>
          <p class="text-gray-700 text-sm max-w-xs">All sourced from licensed compounding pharmacies. COAs available on every batch.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              img: IMGS.coupleSport,
              imgPos: '50% 18%',
              name: 'Weight Management',
              products: 'Semaglutide · Tirzepatide',
              badge: '🔥 Highest Demand',
              badgeBg: 'bg-amber-50 border-amber-200 text-amber-700',
              desc: 'GLP-1 and GIP/GLP-1 agonists for sustainable, medically-supervised weight loss. The #1 most requested category — and the highest LTV product in the market.',
            },
            {
              img: IMGS.heroAthlete,
              imgPos: '60% 28%',
              name: 'Recovery & Performance',
              products: 'BPC-157 · TB-500 · CJC-1295',
              badge: '💪 High Reorder Rate',
              badgeBg: 'bg-green-50 border-green-200 text-green-700',
              desc: 'Tissue repair, injury recovery, and growth hormone optimization. Perfect for fitness brands, sports medicine practices, and performance-focused creators.',
            },
            {
              img: IMGS.womanSmiling,
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
                <p class="text-gray-700 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div class="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
          <div>
            <p class="font-semibold text-gray-900 mb-1">Plus 9 more compounds in the full catalog</p>
            <p class="text-gray-700 text-sm">PT-141 · Melanotan II · Thymosin Alpha-1 · Ipamorelin · MOTS-c · and more. New compounds added quarterly.</p>
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
        TESTIMONIALS
    ═══════════════════════════════════ */}
    <section class="section-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-14">
          <span class="label-caps block mb-3">Partner Results</span>
          <h2 class="display-sans text-gray-900 mb-4" style="font-size:clamp(2rem,4vw,3rem);">
            Real people.<br />Real revenue.
          </h2>
          <p class="text-gray-700">Here's what partners say after launching their brands with us.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              quote: "I was skeptical. I thought launching a peptide brand would take a year and cost six figures. Instead I was live in 3 weeks. Month one: $22,400.",
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
            <div class="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <span class={`text-xs font-bold px-3 py-1.5 rounded-full border inline-block mb-5 ${t.resultColor}`}>{t.result}</span>
              <p class="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div class="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div class="w-10 h-10 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">{t.initial}</div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p class="text-gray-500 text-xs">{t.role}</p>
                </div>
                <div class="ml-auto flex">{[1,2,3,4,5].map(() => <span class="text-amber-400 text-sm">★</span>)}</div>
              </div>
            </div>
          ))}
        </div>

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
              <p class="text-white text-2xl md:text-3xl font-bold leading-tight mb-2" style="font-family:'DM Serif Display',serif;font-style:italic;">"This is the most profitable thing I've ever added to my business."</p>
              <p class="text-gray-300 text-sm">— Wellness Brand Owner, Austin TX · Joined 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FAQ
    ═══════════════════════════════════ */}
    <section class="section-cream py-24">
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
              a: 'There is no upfront cost to launch. No setup fees, no inventory purchase, no minimum order requirements. Our revenue comes from product margin — which means we\'re highly incentivized to help you succeed.',
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
            <div class="faq-item border border-gray-200 rounded-xl overflow-hidden bg-white">
              <button class="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors" onclick={`toggleFaq(${i})`}>
                <span>{faq.q}</span>
                <span class="faq-icon text-gray-400 text-lg flex-shrink-0 ml-4" id={`faq-icon-${i}`}>+</span>
              </button>
              <div class="faq-body hidden px-5 pb-5" id={`faq-body-${i}`}>
                <p class="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════
        FINAL CTA
    ═══════════════════════════════════ */}
    <section class="relative py-32 overflow-hidden bg-black">
      <div class="absolute inset-0">
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
          Ready to build the<br />future of care?
        </h2>
        <p class="text-gray-300 text-xl leading-relaxed mb-4 max-w-xl mx-auto" style="font-weight:300;">
          Go live fast with built-in prescribing, compliance, and fulfillment — all under your brand.
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
      const header = document.getElementById('site-header');
      if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

      function toggleFaq(i) {
        const body = document.getElementById('faq-body-' + i);
        const icon = document.getElementById('faq-icon-' + i);
        const isOpen = !body.classList.contains('hidden');
        document.querySelectorAll('.faq-body').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(el => el.textContent = '+');
        if (!isOpen) {
          body.classList.remove('hidden');
          icon.textContent = '−';
        }
      }
    ` }} />
  </>
)
