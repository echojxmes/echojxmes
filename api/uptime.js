import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  try {
    const raw = await kv.lrange('uptime_log', 0, -1);
    const checks = raw.map(r => typeof r === 'string' ? JSON.parse(r) : r);

    if (checks.length === 0) {
      return res.status(200).json({ status: 'unknown', upSince: Date.now() });
    }

    const chronological = [...checks].reverse();
    let upSince = chronological[0].timestamp;

    for (let i = 0; i < chronological.length; i++) {
      if (!chronological[i].isUp) {
        upSince = chronological[i + 1] ? chronological[i + 1].timestamp : Date.now();
      }
    }

    const latest = checks[0];
    res.setHeader('Cache-Control', 's-maxage=60');
    res.status(200).json({
      status: latest.isUp ? 'online' : 'down',
      upSince
    });
  } catch (err) {
    // returns the REAL error instead of a bare 500, so you can see what's wrong
    console.error('uptime API error:', err);
    res.status(500).json({ error: err.message });
  }
}
 