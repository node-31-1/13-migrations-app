const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use(productRouter);
router.use(movieRouter);

module.exports = router;
