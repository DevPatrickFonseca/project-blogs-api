const express = require('express');

const routers = express.Router();

const { postController } = require('../controllers');

const { tokenValidator } = require('../middlewares/tokenValidator');
const { postValidator } = require('../middlewares/postValidator');

routers.get('/', tokenValidator, postController.getPostController);
routers.get('/:id', tokenValidator, postController.getPostByIdController);

routers.post('/', tokenValidator, postValidator, postController.createPostController);

module.exports = routers;