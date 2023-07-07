const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react-review', 
});

module.exports = pool;
