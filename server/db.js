const Pool = require("pg").Pool;

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'interview',
   password: 'Tumbaga.111',
   port: 5432,
}) ;
module.exports = pool;