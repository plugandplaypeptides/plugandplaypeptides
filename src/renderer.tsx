import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | Plug and Play Peptides` : 'Plug and Play Peptides — White-Label Peptide Solutions'}</title>
        <meta name="description" content="Partner with Plug and Play Peptides to launch your own branded peptide product line — sold compliantly through licensed physicians." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', sans-serif; }
          .gradient-text {
            background: linear-gradient(135deg, #10b981, #059669, #0d9488);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hero-bg {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2027 100%);
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
          }
          .nav-link {
            position: relative;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #10b981;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after { width: 100%; }
          .btn-primary {
            background: linear-gradient(135deg, #10b981, #059669);
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background: linear-gradient(135deg, #059669, #047857);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
          }
          .btn-outline {
            border: 2px solid #10b981;
            color: #10b981;
            transition: all 0.3s ease;
          }
          .btn-outline:hover {
            background: #10b981;
            color: white;
            transform: translateY(-2px);
          }
          .step-connector::after {
            content: '';
            position: absolute;
            top: 24px;
            left: calc(50% + 40px);
            width: calc(100% - 80px);
            height: 2px;
            background: linear-gradient(90deg, #10b981, #059669);
          }
          @media (max-width: 768px) {
            .step-connector::after { display: none; }
          }
          .glow-green {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
          }
          .tag-pill {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #10b981;
          }
          .section-divider {
            border-top: 1px solid rgba(255,255,255,0.07);
          }
          .mobile-menu { display: none; }
          .mobile-menu.open { display: block; }
          input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
          }
          .testimonial-card {
            background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.9));
            border: 1px solid rgba(16, 185, 129, 0.15);
          }
          .stat-card {
            background: linear-gradient(135deg, rgba(16,185,129,0.05), rgba(5,150,105,0.1));
            border: 1px solid rgba(16, 185, 129, 0.2);
          }
        `}</style>
      </head>
      <body class="bg-slate-900 text-white">
        {/* Navigation */}
        <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <a href="/" class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                  <i class="fas fa-dna text-white text-sm"></i>
                </div>
                <span class="font-bold text-lg">
                  <span class="text-white">Plug & Play</span>
                  <span class="gradient-text"> Peptides</span>
                </span>
              </a>
              <div class="hidden md:flex items-center space-x-8">
                <a href="/#how-it-works" class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors">How It Works</a>
                <a href="/#for-businesses" class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors">For Businesses</a>
                <a href="/#for-influencers" class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors">For Influencers</a>
                <a href="/#why-us" class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors">Why Us</a>
                <a href="/apply" class="btn-primary text-white font-semibold px-5 py-2 rounded-lg text-sm">Apply Now</a>
              </div>
              <button id="mobile-toggle" class="md:hidden text-slate-300 hover:text-white" onclick="document.getElementById('mobile-nav').classList.toggle('open')">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          <div id="mobile-nav" class="mobile-menu md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
            <a href="/#how-it-works" class="block text-slate-300 hover:text-emerald-400 py-2 text-sm font-medium">How It Works</a>
            <a href="/#for-businesses" class="block text-slate-300 hover:text-emerald-400 py-2 text-sm font-medium">For Businesses</a>
            <a href="/#for-influencers" class="block text-slate-300 hover:text-emerald-400 py-2 text-sm font-medium">For Influencers</a>
            <a href="/#why-us" class="block text-slate-300 hover:text-emerald-400 py-2 text-sm font-medium">Why Us</a>
            <a href="/apply" class="block btn-primary text-center text-white font-semibold px-5 py-2 rounded-lg text-sm">Apply Now</a>
          </div>
        </nav>
        <main class="pt-16">
          {children}
        </main>
        {/* Footer */}
        <footer class="bg-slate-950 border-t border-slate-800 py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div class="col-span-1 md:col-span-2">
                <a href="/" class="flex items-center space-x-2 mb-4">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                    <i class="fas fa-dna text-white text-sm"></i>
                  </div>
                  <span class="font-bold text-lg">
                    <span class="text-white">Plug & Play</span>
                    <span class="gradient-text"> Peptides</span>
                  </span>
                </a>
                <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Empowering brands and influencers to launch physician-supervised peptide product lines — compliantly, quickly, and profitably.
                </p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-slate-500 hover:text-emerald-400 transition-colors"><i class="fab fa-instagram text-lg"></i></a>
                  <a href="#" class="text-slate-500 hover:text-emerald-400 transition-colors"><i class="fab fa-twitter text-lg"></i></a>
                  <a href="#" class="text-slate-500 hover:text-emerald-400 transition-colors"><i class="fab fa-linkedin text-lg"></i></a>
                  <a href="#" class="text-slate-500 hover:text-emerald-400 transition-colors"><i class="fab fa-youtube text-lg"></i></a>
                </div>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Partners</h4>
                <ul class="space-y-2">
                  <li><a href="/#for-businesses" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">For Businesses</a></li>
                  <li><a href="/#for-influencers" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">For Influencers</a></li>
                  <li><a href="/#how-it-works" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">How It Works</a></li>
                  <li><a href="/apply" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Apply Now</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul class="space-y-2">
                  <li><a href="/apply" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Partner Inquiries</a></li>
                  <li><a href="mailto:partners@plugandplaypeptides.com" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors">partners@plugandplaypeptides.com</a></li>
                </ul>
              </div>
            </div>
            <div class="section-divider pt-6 flex flex-col md:flex-row items-center justify-between">
              <p class="text-slate-500 text-xs">© 2026 Plug and Play Peptides. All rights reserved.</p>
              <p class="text-slate-600 text-xs mt-2 md:mt-0">All peptide products are dispensed only through licensed, board-certified physicians.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
})
