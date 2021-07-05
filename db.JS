// Connecting to the database

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "psharma",
    host: "localhost",
    database: "conversion_rates",
    password: "kushboo",
    port: 3000,
});

module.exports = pool;