import { Hono } from 'hono'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { applyPage } from './pages/apply'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.svg', serveStatic({ path: './public/favicon.svg' }))

app.use(renderer)

// Home Page
app.get('/', (c) => {
  return c.render(homePage(), { title: '' })
})

// Apply / Partner Page
app.get('/apply', (c) => {
  return c.render(applyPage(), { title: 'Apply as a Partner' })
})

// Form submission handler
app.post('/api/apply', async (c) => {
  const body = await c.req.parseBody()
  // In production, connect this to email (Resend/SendGrid) or a database
  return c.json({
    success: true,
    message: "Application received! We'll be in touch within 48 hours."
  })
})

export default app
