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

const addCurrency = (req, res) =>{
    const {name, rate, amount, result} = req.body;
    // Need to make sure that multiple of the same currency is not added. Check to see if name exists.
    pool.query(queries.checkNameExists, [name], (error, results) =>{
        if (results.rows.length) {
            res.send("ERR: Currency Already Exists!");
        }
        // If the currecny dosent exists, then add to the db.
        pool.query(queries.addCurrency, [name, rate, amount, result], (error, results) => {
            if (error) throw error;
            res.status(201).end("Currency added!");
            console.log("Currency added logged");
        })
    });
};


module.exports = {
    getConversionRates,
    getConversionRateById,
    addCurrency,
};