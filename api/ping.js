import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const start = Date.now();
  let isUp = true;

  try {
    const response = await fetch('https://yourdomain.com', { method: 'HEAD' });
    isUp = response.ok;
  } catch {
    isUp = false;
  }

  const latency = Date.now() - start;
  const timestamp = Date.now();

  // store this check
  await kv.lpush('uptime_log', JSON.stringify({ timestamp, isUp, latency }));
  // keep only the last 500 checks (~ a couple days at 5-min intervals)
  await kv.ltrim('uptime_log', 0, 499);

  res.status(200).json({ isUp, latency });
}
 