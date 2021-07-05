// Store all SQL queries

const getConversionRates = "SELECT * FROM conversion_rates;";
const getConversionRateById = "SELECT * FROM conversion_rates WHERE id = $1";

module.exports = {
    getConversionRates,
    getConversionRateById,
};