// Store the business logic for the routes

const pool = require('../../db');
const queries = require('./queries');

const getConversionRates = (req, res) =>{
    pool.query(queries.getConversionRates, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getConversionRateById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getConversionRateById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getConversionRates,
    getConversionRateById,
};