import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | Plug and Play Peptides` : 'Plug and Play Peptides — Launch Your Own Peptide Brand'}</title>
        <meta name="description" content="Partner with Plug and Play Peptides to launch your own branded peptide product line — sold compliantly through licensed physicians. For businesses and influencers." />
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
            <a href="/apply" class="block mt-3 bg-black text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-gray-800 transition-colors">Apply to Partner</a>
          </div>
        </header>

        <main class="pt-16">
          {children}
        </main>

        {/* ── FOOTER ── */}
        <footer class="bg-gray-950 text-white pt-16 pb-10">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">

              <div class="md:col-span-5">
                <a href="/" class="flex items-center gap-2.5 mb-5">
                  <div class="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                    <i class="fas fa-dna text-black text-xs"></i>
                  </div>
                  <span class="font-bold text-base tracking-tight">
                    plug<span class="text-green-400">&</span>play peptides
                  </span>
                </a>
                <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
                  The end-to-end white-label platform for brands and creators ready to enter the peptide market — legally, quickly, profitably.
                </p>
                <div class="flex gap-4 mt-6">
                  {['instagram','twitter','linkedin','youtube'].map(s => (
                    <a href="#" class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-400 transition-colors">
                      <i class={`fab fa-${s} text-xs`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div class="md:col-span-3 md:col-start-7">
                <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Partners</p>
                <ul class="space-y-2.5">
                  {[['/#how-it-works','How It Works'],['/#businesses','For Businesses'],['/#influencers','For Influencers'],['/#catalog','Products'],['/apply','Apply Now']].map(([href, label]) => (
                    <li><a href={href} class="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>

              <div class="md:col-span-3">
                <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</p>
                <ul class="space-y-2.5">
                  <li><a href="mailto:partners@plugandplaypeptides.com" class="text-sm text-gray-400 hover:text-white transition-colors">partners@plugandplaypeptides.com</a></li>
                  <li><a href="/apply" class="text-sm text-gray-400 hover:text-white transition-colors">Partner Inquiries</a></li>
                </ul>
              </div>
            </div>

            <div class="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p class="text-gray-600 text-xs">© 2026 Plug and Play Peptides. All rights reserved.</p>
              <p class="text-gray-700 text-xs max-w-md text-right leading-relaxed">All peptide products are dispensed exclusively through licensed, board-certified physicians via our compounding pharmacy network.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
})
