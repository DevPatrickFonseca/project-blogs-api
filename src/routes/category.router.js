const express = require('express');

const routers = express.Router();

const { categoryController } = require('../controllers');
const { tokenValidator } = require('../middlewares/tokenValidator');

const { categoryValidator } = require('../middlewares/categoryValidator');

routers.get('/', tokenValidator, categoryController.getCategoriesController);

routers.post('/', tokenValidator, categoryValidator, categoryController.createCategoryController);

module.exports = routers;