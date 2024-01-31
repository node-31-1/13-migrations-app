const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const categoryRouter = require('./category.router');
const genreRouter = require('./genre.router');
const actorRouter = require('./actor.router');
const router = express.Router();

// colocar las rutas aquí
router.use(productRouter);
router.use(movieRouter);
router.use(categoryRouter);
router.use(genreRouter);
router.use(actorRouter);

module.exports = router;
