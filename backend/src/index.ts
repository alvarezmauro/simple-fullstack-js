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

app.get('/api/example', async (req, res) => {
  try {
    res.json({ data: 'test' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get example data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
