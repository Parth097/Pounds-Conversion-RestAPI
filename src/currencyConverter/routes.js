// Store the routes for the web

const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getConversionRates);
router.get('/:id', controller.getConversionRateById);

module.exports= router;