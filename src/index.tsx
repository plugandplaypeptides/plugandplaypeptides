import { Hono } from 'hono'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { homeV2Page } from './pages/home_v2'
import { applyPage } from './pages/apply'
import { cmoPage } from './pages/cmo'
import { privacyPage } from './pages/privacy'
import { termsPage } from './pages/terms'
import { agreementPage } from './pages/agreement'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

app.use(renderer)

// Home Page
app.get('/', (c) => {
  return c.render(homePage(), { title: '' })
})

// Home V2 — New design system (preview only)
app.get('/home-v2', (c) => {
  return c.render(homeV2Page(), { title: 'Home V2 Preview' })
})

// CMO Marketing Suite Page
app.get('/cmo', (c) => {
  return c.render(cmoPage(), { title: 'The CMO Marketing Suite' })
})

// Apply / Partner Page
app.get('/apply', (c) => {
  return c.render(applyPage(), { title: 'Apply as a Partner' })
})

// Legal pages
app.get('/privacy', (c) => {
  return c.render(privacyPage(), { title: 'Privacy Policy' })
})

app.get('/terms', (c) => {
  return c.render(termsPage(), { title: 'Terms of Service' })
})

app.get('/refund', (c) => {
  return c.render(refundPage(), { title: 'Refund & Cancellation Policy' })
})

app.get('/agreement', (c) => {
  return c.render(agreementPage(), { title: 'Partner Agreement' })
})

// Form submission handler
app.post('/api/apply', async (c) => {
  const body = await c.req.parseBody()
  return c.json({
    success: true,
    message: "Application received! We'll be in touch within 48 hours."
  })
})

export default app
