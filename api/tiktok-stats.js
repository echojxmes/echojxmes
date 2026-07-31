export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.tiktok.com/@echojxmes', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await response.text();
    const match = html.match(/"followerCount":(\d+)/);
    const followers = match ? parseInt(match[1], 10) : null;

    res.setHeader('Cache-Control', 's-maxage=3600'); // cache 1hr so i don't hammer TikTok
    res.status(200).json({ followers });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch stats' });
  }
}
 