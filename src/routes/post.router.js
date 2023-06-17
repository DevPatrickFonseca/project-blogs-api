const express = require('express');

const routers = express.Router();

const { postController } = require('../controllers');

const { tokenValidator } = require('../middlewares/tokenValidator');

routers.get('/', tokenValidator, postController.getPostController);
routers.get('/:id', tokenValidator, postController.getPostByIdController);

module.exports = routers;