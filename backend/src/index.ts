import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/scrape', async (req, res) => {
  try {
    const { data } = await axios.get('https://example.com');
    const $ = cheerio.load(data);
    const title = $('title').text();
    res.json({ title });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
