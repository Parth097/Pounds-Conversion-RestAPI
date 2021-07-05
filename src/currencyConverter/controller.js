// Store the business logic for the routes

const pool = require('../../db');

const getConversionRates = (req, res) =>{
    pool.query("SELECT * FROM conversion_rates", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getConversionRates,
};