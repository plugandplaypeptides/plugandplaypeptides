// Image sourced from image_search tool (license-filtered)
const HERO_IMG = 'https://sspark.genspark.ai/cfimages?u1=ZdowuU602ahWL4IcSs5hMShhG1QbJ0YZFvtHBh32Mec03d0%2BmXNE2Wtxv7tw3HV1UhItixvyFrDuzKnV%2FhFmgIubCydpsDvWB9v0C%2BlqZvjxhJj8Xjngy%2FmV49P4970zhsOAzUDsp18Jx%2BuceLgVCk7ZCJh4NUEzvPLYIAfLJceksLMCCo9CLAJYRic%3D&u2=eVUZt9TGwAzZCnnY&width=2560'

export const applyPage = () => (
  <>
    {/* Apply page hero banner */}
    <section class="relative h-56 md:h-72 overflow-hidden bg-black">
      <img src={HERO_IMG} alt="Health and vitality" class="w-full h-full object-cover object-center opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
      <div class="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <span class="tag-green mx-auto mb-4"><span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block mr-1"></span>Applications Open</span>
          <h1 class="display-serif text-white" style="font-size:clamp(2rem,5vw,3.5rem);">Apply to Partner</h1>
          <p class="text-gray-300 mt-2 text-base">Takes 5 minutes · Response within 48 hours</p>
        </div>
      </div>
    </section>

    <section class="section-white py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Context panel ── */}
          <div class="lg:sticky lg:top-24">
            <span class="label-caps block mb-4">Why apply now?</span>
            <h2 class="display-sans text-gray-900 mb-5" style="font-size:clamp(1.8rem,3vw,2.5rem);">
              The brands that win<br />this market are applying<br /><span style="color:#16a34a">today.</span>
            </h2>
            <p class="text-gray-500 text-base leading-relaxed mb-8">
              We accept a limited number of partners per niche and geography. Once a category is at capacity, we close applications. Don't let a competitor own your audience's peptide purchases.
            </p>

            {/* What happens next */}
            <div class="space-y-5 mb-10">
              {[
                { n: '1', title: 'We review your application', body: 'Our partnership team assesses your brand, audience, and goals within 48 hours.' },
                { n: '2', title: 'Intro call — 20 minutes', body: "Quick discovery call to understand your vision and walk you through the platform." },
                { n: '3', title: 'Your brand goes live', body: 'Once approved, your branded patient portal and product line launches in 2–4 weeks.' },
              ].map(step => (
                <div class="flex gap-4">
                  <div class="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm mb-0.5">{step.title}</p>
                    <p class="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div class="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p class="label-caps mb-3">Our commitments to you</p>
              <ul class="space-y-2">
                {[
                  'Application is 100% confidential',
                  'No exclusivity or commitment required',
                  'Dedicated partner manager assigned',
                  'Full compliance handled by our team',
                ].map(item => (
                  <li class="flex items-center gap-2 text-sm text-gray-600">
                    <i class="fas fa-check text-green-500 text-xs flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social proof */}
            <div class="mt-6 flex items-center gap-3">
              <div class="flex -space-x-2">
                {['bg-gray-800','bg-gray-600','bg-gray-700','bg-gray-900'].map((c,i) => (
                  <div class={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['A','J','S','K'][i]}
                  </div>
                ))}
              </div>
              <p class="text-sm text-gray-500"><strong class="text-gray-900">50+ brands</strong> already partnered</p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            {/* Type Tabs */}
            <div class="flex p-1 bg-gray-100 rounded-xl mb-7 gap-1">
              <button id="btn-business" onclick="selectType('business')"
                class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 bg-white text-gray-900 shadow-sm">
                <i class="fas fa-building text-xs"></i>Business / Brand
              </button>
              <button id="btn-influencer" onclick="selectType('influencer')"
                class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-500 hover:text-gray-700">
                <i class="fas fa-star text-xs"></i>Creator / Influencer
              </button>
            </div>

            <form id="apply-form" class="space-y-5">
              <input type="hidden" id="partner-type" name="partnerType" value="business" />

              {/* Name row */}
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">First name <span class="text-green-500">*</span></label>
                  <input type="text" name="firstName" required placeholder="John" class="input-clean" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Last name <span class="text-green-500">*</span></label>
                  <input type="text" name="lastName" required placeholder="Doe" class="input-clean" />
                </div>
              </div>

              {/* Email & Phone */}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Email <span class="text-green-500">*</span></label>
                  <input type="email" name="email" required placeholder="you@yourbrand.com" class="input-clean" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" class="input-clean" />
                </div>
              </div>

              {/* ── BUSINESS FIELDS ── */}
              <div id="business-fields">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Business / Brand name <span class="text-green-500">*</span></label>
                    <input type="text" name="businessName" placeholder="Acme Wellness LLC" class="input-clean" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Business type <span class="text-green-500">*</span></label>
                    <select name="businessType" class="input-clean">
                      <option value="">Select...</option>
                      <option>Wellness / Med Spa Clinic</option>
                      <option>Supplement Brand</option>
                      <option>Fitness / Gym Brand</option>
                      <option>Telehealth Company</option>
                      <option>Health E-Commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Website / Social URL</label>
                  <input type="url" name="website" placeholder="https://yourbrand.com" class="input-clean" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Monthly customer volume</label>
                  <select name="monthlyVolume" class="input-clean">
                    <option value="">Select range...</option>
                    <option>Under 100 / month</option>
                    <option>100 – 500 / month</option>
                    <option>500 – 2,000 / month</option>
                    <option>2,000 – 10,000 / month</option>
                    <option>10,000+ / month</option>
                  </select>
                </div>
              </div>

              {/* ── INFLUENCER FIELDS ── */}
              <div id="influencer-fields" class="hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Primary platform <span class="text-green-500">*</span></label>
                    <select name="platform" class="input-clean">
                      <option value="">Select...</option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>YouTube</option>
                      <option>Twitter / X</option>
                      <option>Podcast</option>
                      <option>Multiple Platforms</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Total followers <span class="text-green-500">*</span></label>
                    <select name="followers" class="input-clean">
                      <option value="">Select range...</option>
                      <option>10K – 50K</option>
                      <option>50K – 200K</option>
                      <option>200K – 500K</option>
                      <option>500K – 2M</option>
                      <option>2M+</option>
                    </select>
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Content niche <span class="text-green-500">*</span></label>
                  <select name="niche" class="input-clean">
                    <option value="">Select...</option>
                    <option>Fitness & Bodybuilding</option>
                    <option>Biohacking & Longevity</option>
                    <option>Weight Loss & Nutrition</option>
                    <option>Anti-Aging & Wellness</option>
                    <option>Men's Health</option>
                    <option>Women's Health</option>
                    <option>Medical / Healthcare</option>
                    <option>Lifestyle & Health</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Profile URL <span class="text-green-500">*</span></label>
                  <input type="url" name="profileUrl" placeholder="https://instagram.com/yourhandle" class="input-clean" />
                </div>
              </div>

              {/* Products of interest */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Products of interest <span class="text-gray-400 font-normal">(select all that apply)</span></label>
                <div class="grid grid-cols-2 gap-2">
                  {['Semaglutide', 'Tirzepatide', 'BPC-157', 'TB-500', 'CJC-1295 / Ipamorelin', 'PT-141', 'Sermorelin', 'Epithalon', 'Full Catalog'].map(p => (
                    <label class="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors group">
                      <input type="checkbox" name="products" value={p} class="flex-shrink-0" />
                      <span class="text-sm text-gray-600 group-hover:text-gray-900">{p}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your goals</label>
                <textarea name="message" rows={4} placeholder="Describe your audience, what you want to achieve, and any questions you have..." class="input-clean"></textarea>
              </div>

              {/* Referral */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about us?</label>
                <select name="referralSource" class="input-clean">
                  <option value="">Select...</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Google Search</option>
                  <option>Referral / Friend</option>
                  <option>Podcast</option>
                  <option>Conference / Event</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Legal agreement */}
              <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <label class="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="agree" required class="mt-0.5 flex-shrink-0" />
                  <span class="text-gray-500 text-xs leading-relaxed">
                    I understand that Plug & Play Peptides operates through licensed physicians and compounding pharmacies. All product dispensing is subject to physician approval. I agree to promote products truthfully and in compliance with applicable laws.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" id="submit-btn" class="btn-black w-full justify-center py-4 text-base rounded-xl" style="border-radius:14px;">
                Submit Application
              </button>

              <p class="text-center text-gray-400 text-xs">
                <i class="fas fa-lock text-xs mr-1"></i>Confidential · No commitment required
              </p>
            </form>

            {/* Success state */}
            <div id="success-message" class="hidden text-center py-16 px-6">
              <div class="w-16 h-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mx-auto mb-5">
                <i class="fas fa-check text-green-600 text-xl"></i>
              </div>
              <h3 class="font-bold text-gray-900 text-2xl mb-3">Application received.</h3>
              <p class="text-gray-500 mb-2">Our team will reach out within <strong class="text-gray-900">48 business hours</strong>.</p>
              <p class="text-gray-400 text-sm mb-8">Check your inbox — we'll send a confirmation shortly.</p>
              <a href="/" class="btn-outline-black">Back to Home</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      // Pre-select from URL
      (function(){
        const t = new URLSearchParams(window.location.search).get('type');
        if (t === 'influencer') selectType('influencer');
      })();

      function selectType(type) {
        const bb = document.getElementById('btn-business');
        const bi = document.getElementById('btn-influencer');
        const bf = document.getElementById('business-fields');
        const inf = document.getElementById('influencer-fields');
        document.getElementById('partner-type').value = type;

        if (type === 'business') {
          bb.classList.add('bg-white','text-gray-900','shadow-sm');
          bb.classList.remove('text-gray-500');
          bi.classList.remove('bg-white','text-gray-900','shadow-sm');
          bi.classList.add('text-gray-500');
          bf.classList.remove('hidden');
          inf.classList.add('hidden');
        } else {
          bi.classList.add('bg-white','text-gray-900','shadow-sm');
          bi.classList.remove('text-gray-500');
          bb.classList.remove('bg-white','text-gray-900','shadow-sm');
          bb.classList.add('text-gray-500');
          inf.classList.remove('hidden');
          bf.classList.add('hidden');
        }
      }

      document.getElementById('apply-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Submitting...';
        btn.disabled = true;
        try {
          const res = await fetch('/api/apply', { method: 'POST', body: new FormData(this) });
          const data = await res.json();
          if (data.success) {
            document.getElementById('apply-form').classList.add('hidden');
            document.getElementById('success-message').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } catch(err) {
          btn.innerHTML = 'Submit Application';
          btn.disabled = false;
          alert('Something went wrong. Please try again.');
        }
      });

      // Nav scroll shadow
      const header = document.getElementById('site-header');
      if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));
    ` }} />
  </>
)
