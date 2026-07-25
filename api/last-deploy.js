export default async function handler(req, res) {
  try {
    const token = process.env.VERCEL_TOKEN;
    const projectId = process.env.VERCEL_PROJECT_ID;
    const response = await fetch(`https://api.vercel.com/v6/deployments?projectId=${projectId}&limit=1`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300');
    res.status(200).json({ createdAt: data.deployments?.[0]?.createdAt || null });
  } catch {
    res.status(500).json({ error: 'failed' });
  }
}