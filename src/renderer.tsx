import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | Plug and Play Peptides` : 'Plug and Play Peptides — Launch Your Own Peptide Brand'}</title>
        <meta name="description" content="Partner with Plug and Play Peptides to launch your own branded peptide product line — sold compliantly through licensed physicians. For businesses and influencers." />
        <link rel="canonical" href="https://www.plugandplaypeptides.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Plug and Play Peptides" />
        <meta property="og:title" content={title ? `${title} | Plug and Play Peptides` : 'Plug and Play Peptides — Launch Your Own Peptide Brand'} />
        <meta property="og:description" content="Partner with Plug and Play Peptides to launch your own branded peptide product line — sold compliantly through licensed physicians. For businesses and influencers." />
        <meta property="og:url" content="https://www.plugandplaypeptides.com" />

        {/* Twitter/X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plugandplaypeptides" />
        <meta name="twitter:title" content={title ? `${title} | Plug and Play Peptides` : 'Plug and Play Peptides — Launch Your Own Peptide Brand'} />
        <meta name="twitter:description" content="Partner with Plug and Play Peptides to launch your own branded peptide product line — sold compliantly through licensed physicians. For businesses and influencers." />

        {/* Schema — Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Plug and Play Peptides",
          "url": "https://www.plugandplaypeptides.com",
          "logo": "https://www.plugandplaypeptides.com/favicon.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "partners@plugandplaypeptides.com",
            "contactType": "Partner Inquiries"
          }
        })}} />

        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='system-ui,sans-serif' font-size='18' font-weight='bold' fill='%234ade80'%3EP%3C/text%3E%3C/svg%3E" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="bg-white text-gray-900 antialiased">

        {/* ── NAV ── */}
        <header id="site-header" class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

              {/* Logo */}
              <a href="/" class="flex items-center gap-2.5 flex-shrink-0">
                <div class="w-7 h-7 rounded-md bg-black flex items-center justify-center">
                  <i class="fas fa-dna text-white text-xs"></i>
                </div>
                <span class="font-bold text-base tracking-tight text-gray-900">
                  plug<span class="text-green-600">&</span>play peptides
                </span>
              </a>

              {/* Desktop Nav */}
              <nav class="hidden md:flex items-center gap-8">
                <a href="/#how-it-works" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">How It Works</a>
                <a href="/#businesses" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">For Businesses</a>
                <a href="/#influencers" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">For Influencers</a>
                <a href="/#catalog" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Products</a>
                <a href="/cmo" class="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">CMO Suite</a>
              </nav>

              {/* CTA */}
              <div class="flex items-center gap-3">
                <a href="/apply" class="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                  Apply to Partner
                </a>
                <button id="mobile-toggle" onclick="document.getElementById('mobile-nav').classList.toggle('hidden')" class="md:hidden p-2 text-gray-500 hover:text-gray-900">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div id="mobile-nav" class="hidden md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
            <a href="/#how-it-works" class="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium">How It Works</a>
            <a href="/#businesses" class="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium">For Businesses</a>
            <a href="/#influencers" class="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium">For Influencers</a>
            <a href="/#catalog" class="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium">Products</a>
            <a href="/cmo" class="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium">CMO Suite</a>
            <a href="/apply" class="block mt-3 bg-black text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-gray-800 transition-colors">Apply to Partner</a>
          </div>
        </header>

        <main class="pt-16">
          {children}
        </main>

        {/* ── FOOTER ── */}
        <footer class="bg-gray-950 text-white pt-16 pb-10">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Main grid */}
            <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">

              {/* Brand + description */}
              <div class="md:col-span-4">
                <a href="/" class="flex items-center gap-2.5 mb-5">
                  <div class="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                    <i class="fas fa-dna text-black text-xs"></i>
                  </div>
                  <span class="font-bold text-base tracking-tight">
                    plug<span class="text-green-400">&</span>play peptides
                  </span>
                </a>
                <p class="text-gray-400 text-sm leading-relaxed mb-6" style="max-width:260px;">
                  The end-to-end white-label platform for brands and creators ready to enter the peptide market — legally, quickly, profitably.
                </p>
                <div class="flex gap-3">
                  {['instagram','twitter','linkedin','youtube'].map(s => (
                    <a href="#" class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-400 transition-colors">
                      <i class={`fab fa-${s} text-xs`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div class="md:col-span-2 md:col-start-6">
                <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Platform</p>
                <ul class="space-y-2.5">
                  {[
                    ['/#how-it-works','How It Works'],
                    ['/#businesses','For Businesses'],
                    ['/#influencers','For Influencers'],
                    ['/#catalog','Products'],
                    ['/cmo','CMO Suite'],
                    ['/apply','Apply Now'],
                  ].map(([href, label]) => (
                    <li><a href={href} class="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Legal links */}
              <div class="md:col-span-2">
                <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Legal</p>
                <ul class="space-y-2.5">
                  {[
                    ['/terms','Terms of Service'],
                    ['/privacy','Privacy Policy'],
                    ['/refund','Refund Policy'],
                    ['/agreement','Partner Agreement'],
                  ].map(([href, label]) => (
                    <li><a href={href} class="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div class="md:col-span-3">
                <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact &amp; Support</p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-envelope text-gray-600 text-xs mt-0.5 flex-shrink-0"></i>
                    <a href="mailto:help@plugandplaypeptides.com" class="text-sm text-gray-400 hover:text-white transition-colors break-all">help@plugandplaypeptides.com</a>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-phone text-gray-600 text-xs mt-0.5 flex-shrink-0"></i>
                    <a href="tel:+14156197661" class="text-sm text-gray-400 hover:text-white transition-colors">415-619-7661</a>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-clock text-gray-600 text-xs mt-0.5 flex-shrink-0"></i>
                    <span class="text-sm text-gray-500">Mon–Fri, 9am–5pm MT</span>
                  </li>
                  <li class="flex items-start gap-2 pt-1">
                    <i class="fas fa-map-marker-alt text-gray-600 text-xs mt-0.5 flex-shrink-0"></i>
                    <address class="text-sm text-gray-500 not-italic leading-relaxed">
                      1001 S Main St, Suite 12636<br />
                      Kalispell, MT 59901
                    </address>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom bar */}
            <div class="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p class="text-gray-600 text-xs mb-1">© 2026 Plug and Play Peptides, LLC. All rights reserved.</p>
                <p class="text-gray-700 text-xs">A Montana Limited Liability Company · 1001 S Main St, Suite 12636, Kalispell, MT 59901</p>
              </div>
              <div class="flex flex-wrap gap-4 items-center">
                <a href="/terms" class="text-gray-700 text-xs hover:text-gray-400 transition-colors">Terms</a>
                <a href="/privacy" class="text-gray-700 text-xs hover:text-gray-400 transition-colors">Privacy</a>
                <a href="/refund" class="text-gray-700 text-xs hover:text-gray-400 transition-colors">Refunds</a>
                <span class="text-gray-800 text-xs">|</span>
                <span class="text-gray-700 text-xs">Visa · Mastercard · Amex · Discover accepted</span>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  )
})
