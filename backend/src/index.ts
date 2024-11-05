import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/example', async (req, res) => {
  try {
    res.json({ data: ['item 1', 'item 2', 'item 3'] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
