// Store the routes for the web

const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getConversionRates);

module.exports= router;