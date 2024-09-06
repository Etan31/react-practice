const { Pool } = require('pg');

// Create a new Pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'interview',
  password: 'Tumbaga.111',
  port: 5432,
});

module.exports = pool;
