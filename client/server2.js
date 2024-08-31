const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 5500;
const pool = require('./db')
// Middleware setup
app.use(cors());
app.use(express.json());


app.get('/todos1', async (req, res) => {
  try {
    const query = 'SELECT * FROM todo';
    const result = await pool.query(query);
    res.json(result.rows);
    console.log("rows:", result.rows);
    console.log("result: ",result);

  } catch (err) {
    console.error('Error fetching todos:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
