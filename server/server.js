const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const pool = require('./db')
const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Check database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client:', err.stack);
    console.log('Database connection failed.');
    return;
  }

  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      console.error('Error executing query:', err.stack);
      console.log('Database connection established, but query execution failed.');
    } else {
      console.log('Database connected successfully.');
      console.log('Current timestamp from the database:', result.rows[0].now);
    }
  });
});

// Define routes
app.get('/numbers', (req, res) => {
  const numbers = Array.from({ length: 100 }, (_, i) => {
    const number = i + 1;
    let result = '';

    if (number % 3 === 0) {
      result += 'divisible by three';
    }
    if (number % 5 === 0) {
      if (result) result += ' ';
      result += 'divisible by five';
    }

    return result || number;
  });
  res.json(numbers);
});

app.get('/todos', async (req, res) => {
  try {
    const query = 'SELECT * FROM todo';
    const result = await pool.query(query);
    // res.json(result.rows);
    console.log("rows:", result.rows);
    console.log("result: ",result);
  } catch (err) {

    console.error('Error fetching todos:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
