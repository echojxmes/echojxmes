import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const raw = await kv.lrange('uptime_log', 0, -1);
  const checks = raw.map(r => JSON.parse(r));

  if (checks.length === 0) {
    return res.status(200).json({ status: 'unknown', upSince: Date.now() });
  }

  const latest = checks[0]; // most recent check (list is newest-first from lpush)

  // find the most recent "down" event, scanning oldest -> newest
  const chronological = [...checks].reverse();
  let upSince = chronological[0].timestamp; // fallback: first ever check

  for (let i = 0; i < chronological.length; i++) {
    if (!chronological[i].isUp) {
      // uptime resets right after this down event
      upSince = chronological[i + 1] ? chronological[i + 1].timestamp : Date.now();
    }
  }

  res.setHeader('Cache-Control', 's-maxage=60');
  res.status(200).json({
    status: latest.isUp ? 'online' : 'down',
    upSince
  });
}

