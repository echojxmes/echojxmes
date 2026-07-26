import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  try {
    const count = await kv.incr('visitor_count');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ count });
  } catch (err) {
    console.error('visit API error:', err);
    res.status(500).json({ error: err.message });
  }
}
//a