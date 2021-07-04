// Connecting to the database

const Pool = require('pg').Pool;

const pool = new pool({
    user: "psharma",
    host: "localhost",
    database: "conversion_rates",
    password: "Kushboo",
    posrt: 3000,
});

module.exports = pool;