export default async function handler(req, res) {
  try {
    const today = new Date().toISOString().slice(0, 10);

    const response = await fetch(
      `https://api-web.nhle.com/v1/standings/${today}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch standings" });
  }
}
