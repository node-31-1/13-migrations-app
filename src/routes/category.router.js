const { getAll, create, getOne, remove, update } = require('../controllers/category.controllers');
const express = require('express');

const categoryRouter = express.Router();

categoryRouter.route('/categories')
    .get(getAll)
    .post(create);

categoryRouter.route('/categories/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = categoryRouter;