import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './config/db.js';
import products from './data/products.js';

// Connection to MongoDB
DBConnection();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));