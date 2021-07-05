// Store all SQL queries

const getConversionRates = "SELECT * FROM conversion_rates;";
const getConversionRateById = "SELECT * FROM conversion_rates WHERE id = $1";
const checkNameExists = "SELECT c FROM conversion_rates c WHERE c.name = $1";
const addCurrency = "INSERT INTO conversion_rates (name, rate, amount, result) VALUES ($1, $2, $3, $4)";

module.exports = {
    getConversionRates,
    getConversionRateById,
    checkNameExists,
    addCurrency,
}; 