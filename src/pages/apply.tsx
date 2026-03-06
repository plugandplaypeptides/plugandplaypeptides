export const applyPage = () => (
  <>
    {/* ===== APPLY HERO ===== */}
    <section class="hero-bg py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center tag-pill rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <i class="fas fa-rocket mr-2 text-xs"></i>Partner Application
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Apply to Become a<br /><span class="gradient-text">Plug & Play Partner</span>
        </h1>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto">
          Complete the form below and our team will review your application and reach out within <strong class="text-white">48 hours</strong>.
        </p>

        <div class="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: 'fa-clock', text: '5-Minute Application' },
            { icon: 'fa-lock', text: '100% Confidential' },
            { icon: 'fa-headset', text: 'Dedicated Partner Manager' },
          ].map((item) => (
            <div class="flex items-center gap-2 text-slate-300 text-sm">
              <i class={`fas ${item.icon} text-emerald-400`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== APPLY FORM ===== */}
    <section class="py-16 bg-slate-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Type Selector */}
        <div class="flex gap-4 mb-8 p-1 bg-slate-800 rounded-xl">
          <button
            id="btn-business"
            onclick="selectType('business')"
            class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-emerald-600 text-white"
          >
            <i class="fas fa-building"></i>Business / Brand
          </button>
          <button
            id="btn-influencer"
            onclick="selectType('influencer')"
            class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 text-slate-400 hover:text-white"
          >
            <i class="fas fa-star"></i>Influencer / Creator
          </button>
        </div>

        {/* Form */}
        <form id="apply-form" class="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6">
          <input type="hidden" id="partner-type" name="partnerType" value="business" />

          {/* Name Row */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-slate-300 text-sm font-medium mb-2">First Name <span class="text-emerald-400">*</span></label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="John"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <label class="block text-slate-300 text-sm font-medium mb-2">Last Name <span class="text-emerald-400">*</span></label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Doe"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-slate-300 text-sm font-medium mb-2">Email Address <span class="text-emerald-400">*</span></label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@yourbrand.com"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <label class="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Business Fields */}
          <div id="business-fields">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-slate-300 text-sm font-medium mb-2">Business / Brand Name <span class="text-emerald-400">*</span></label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your Brand LLC"
                  class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
                />
              </div>
              <div>
                <label class="block text-slate-300 text-sm font-medium mb-2">Business Type <span class="text-emerald-400">*</span></label>
                <select
                  name="businessType"
                  class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
                >
                  <option value="" class="text-slate-500">Select type...</option>
                  <option value="wellness-clinic">Wellness / Med Spa Clinic</option>
                  <option value="supplement-brand">Supplement Brand</option>
                  <option value="fitness-gym">Fitness / Gym Brand</option>
                  <option value="telehealth">Telehealth Company</option>
                  <option value="ecommerce">Health E-Commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div class="mt-6">
              <label class="block text-slate-300 text-sm font-medium mb-2">Website / Social Media URL</label>
              <input
                type="url"
                name="website"
                placeholder="https://yourbrand.com"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>

            <div class="mt-6">
              <label class="block text-slate-300 text-sm font-medium mb-2">Monthly Customer Volume (estimate)</label>
              <select
                name="monthlyVolume"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
              >
                <option value="">Select range...</option>
                <option value="under-100">Under 100 customers/month</option>
                <option value="100-500">100–500 customers/month</option>
                <option value="500-2000">500–2,000 customers/month</option>
                <option value="2000-10000">2,000–10,000 customers/month</option>
                <option value="over-10000">10,000+ customers/month</option>
              </select>
            </div>
          </div>

          {/* Influencer Fields */}
          <div id="influencer-fields" class="hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-slate-300 text-sm font-medium mb-2">Primary Platform <span class="text-emerald-400">*</span></label>
                <select
                  name="platform"
                  class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
                >
                  <option value="">Select platform...</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="podcast">Podcast</option>
                  <option value="multiple">Multiple Platforms</option>
                </select>
              </div>
              <div>
                <label class="block text-slate-300 text-sm font-medium mb-2">Total Follower Count <span class="text-emerald-400">*</span></label>
                <select
                  name="followers"
                  class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
                >
                  <option value="">Select range...</option>
                  <option value="10k-50k">10K – 50K</option>
                  <option value="50k-200k">50K – 200K</option>
                  <option value="200k-500k">200K – 500K</option>
                  <option value="500k-2m">500K – 2M</option>
                  <option value="2m+">2M+</option>
                </select>
              </div>
            </div>

            <div class="mt-6">
              <label class="block text-slate-300 text-sm font-medium mb-2">Primary Content Niche <span class="text-emerald-400">*</span></label>
              <select
                name="niche"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
              >
                <option value="">Select niche...</option>
                <option value="fitness">Fitness & Bodybuilding</option>
                <option value="biohacking">Biohacking & Longevity</option>
                <option value="weight-loss">Weight Loss & Nutrition</option>
                <option value="anti-aging">Anti-Aging & Wellness</option>
                <option value="mens-health">Men's Health</option>
                <option value="womens-health">Women's Health</option>
                <option value="medical">Medical / Healthcare</option>
                <option value="lifestyle">Lifestyle & Health</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="mt-6">
              <label class="block text-slate-300 text-sm font-medium mb-2">Profile / Channel URL <span class="text-emerald-400">*</span></label>
              <input
                type="url"
                name="profileUrl"
                placeholder="https://instagram.com/yourhandle"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Products of Interest */}
          <div>
            <label class="block text-slate-300 text-sm font-medium mb-3">Products of Interest (select all that apply)</label>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Semaglutide', 'Tirzepatide', 'BPC-157', 'TB-500',
                'CJC-1295 / Ipamorelin', 'PT-141', 'Sermorelin', 'Epithalon', 'Other / Full Catalog'
              ].map((product) => (
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="products"
                    value={product}
                    class="w-4 h-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span class="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{product}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Goals / Message */}
          <div>
            <label class="block text-slate-300 text-sm font-medium mb-2">Tell Us About Your Goals</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe your audience, what you're looking to achieve with a peptide brand, and any questions you have..."
              class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200 resize-none"
            ></textarea>
          </div>

          {/* How did you hear? */}
          <div>
            <label class="block text-slate-300 text-sm font-medium mb-2">How did you hear about us?</label>
            <select
              name="referralSource"
              class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200"
            >
              <option value="">Select...</option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="google">Google Search</option>
              <option value="referral">Referral / Friend</option>
              <option value="podcast">Podcast</option>
              <option value="conference">Conference / Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Agreement */}
          <div class="bg-slate-900/60 rounded-xl p-4">
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                required
                class="w-4 h-4 mt-0.5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500 cursor-pointer flex-shrink-0"
              />
              <span class="text-slate-400 text-xs leading-relaxed">
                I understand that Plug & Play Peptides operates through licensed physicians and compounding pharmacies. All product dispensing is subject to physician approval and prescription. I agree to promote products truthfully and in compliance with applicable laws. I consent to being contacted regarding my application.
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="submit-btn"
            class="btn-primary w-full text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2"
          >
            <i class="fas fa-paper-plane"></i>
            Submit My Application
          </button>

          <p class="text-center text-slate-500 text-xs">
            <i class="fas fa-lock mr-1"></i>
            Your application is 100% confidential. No commitment required.
          </p>
        </form>

        {/* Success Message (hidden) */}
        <div id="success-message" class="hidden bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-10 text-center mt-4">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-emerald-400 text-2xl"></i>
          </div>
          <h3 class="text-white font-bold text-2xl mb-3">Application Received!</h3>
          <p class="text-slate-300 mb-2">Thank you for applying to partner with Plug & Play Peptides.</p>
          <p class="text-slate-400 text-sm mb-6">Our team will review your application and reach out within <strong class="text-white">48 business hours</strong>.</p>
          <a href="/" class="btn-primary text-white font-semibold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
            <i class="fas fa-home"></i>Return Home
          </a>
        </div>
      </div>
    </section>

    {/* ===== TRUST SECTION ===== */}
    <section class="py-16 bg-slate-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-white font-bold text-xl mb-8">What Happens After You Apply?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'fa-envelope-open-text', step: '1', title: 'Application Review', desc: 'Our partnership team reviews your application within 48 hours.' },
            { icon: 'fa-phone-alt', step: '2', title: 'Intro Call', desc: 'We schedule a quick 20-minute discovery call to understand your goals.' },
            { icon: 'fa-rocket', step: '3', title: 'Launch in 2–4 Weeks', desc: 'Once approved, your brand is live and generating revenue within weeks.' },
          ].map((item) => (
            <div class="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <i class={`fas ${item.icon} text-emerald-400`}></i>
              </div>
              <h4 class="text-white font-semibold mb-2">{item.title}</h4>
              <p class="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== JS for form behavior ===== */}
    <script dangerouslySetInnerHTML={{ __html: `
      // Pre-select type from URL query param
      (function() {
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type === 'influencer') selectType('influencer');
      })();

      function selectType(type) {
        const btnBusiness = document.getElementById('btn-business');
        const btnInfluencer = document.getElementById('btn-influencer');
        const businessFields = document.getElementById('business-fields');
        const influencerFields = document.getElementById('influencer-fields');
        const partnerType = document.getElementById('partner-type');

        if (type === 'business') {
          btnBusiness.classList.add('bg-emerald-600', 'text-white');
          btnBusiness.classList.remove('text-slate-400');
          btnInfluencer.classList.remove('bg-emerald-600', 'text-white');
          btnInfluencer.classList.add('text-slate-400');
          businessFields.classList.remove('hidden');
          influencerFields.classList.add('hidden');
          partnerType.value = 'business';
        } else {
          btnInfluencer.classList.add('bg-emerald-600', 'text-white');
          btnInfluencer.classList.remove('text-slate-400');
          btnBusiness.classList.remove('bg-emerald-600', 'text-white');
          btnBusiness.classList.add('text-slate-400');
          influencerFields.classList.remove('hidden');
          businessFields.classList.add('hidden');
          partnerType.value = 'influencer';
        }
      }

      document.getElementById('apply-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Submitting...';
        btn.disabled = true;

        const formData = new FormData(this);

        try {
          const response = await fetch('/api/apply', {
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          if (data.success) {
            document.getElementById('apply-form').classList.add('hidden');
            document.getElementById('success-message').classList.remove('hidden');
            window.scrollTo({ top: document.getElementById('success-message').offsetTop - 100, behavior: 'smooth' });
          }
        } catch (err) {
          btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Submit My Application';
          btn.disabled = false;
          alert('Something went wrong. Please try again or email us directly.');
        }
      });
    ` }} />
  </>
)
