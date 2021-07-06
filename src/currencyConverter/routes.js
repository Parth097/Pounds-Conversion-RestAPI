// Store the routes for the web

const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getConversionRates);
router.post('/', controller.addCurrency);

router.get('/:id', controller.getConversionRateById);
router.delete('/:id', controller.deleteCurrencyById);

module.exports= router;