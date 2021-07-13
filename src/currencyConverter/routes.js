// Store the routes for the web

const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getConversionRates);
router.post('/', controller.addCurrency);
router.get('/result', controller.updateResult);

router.get('/:id', controller.getConversionRateById);
router.put('/:id', controller.updateAmount);
router.delete('/:id', controller.deleteCurrencyById);

module.exports= router;