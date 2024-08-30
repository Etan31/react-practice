const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});