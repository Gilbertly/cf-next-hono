import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { handle } from 'hono/vercel'

export const runtime = 'edge'
const app = new Hono().basePath('/api')

app.use('/*', cors())

app.get('/hello', async (c) => {
  const start = performance.now()
  let greeting: string;

  const query = c.req.query('q');

  if (!query) {
    greeting = 'Hello from Cloudflare workers!';
  } else {
    greeting = `Hello ${query} from Cloudflare workers!`
  }

  const end = performance.now()
  const duration = end - start;
  console.log(`Req took ${duration.toFixed(4)} ms`)

  return c.json({
    message: `${greeting} (${duration.toFixed(4)} ms)`,
  });
})

export const GET = handle(app)
export default app as never