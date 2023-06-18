const express = require('express');

const routers = express.Router();

const { postController } = require('../controllers');

const { tokenValidator } = require('../middlewares');
const { postValidator } = require('../middlewares');
const { updateValidator } = require('../middlewares');

routers.get('/', tokenValidator, postController.getPostController);
routers.get('/:id', tokenValidator, postController.getPostByIdController);

routers.post('/', tokenValidator, postValidator, postController.createPostController);

routers.put(
  '/:id', 
  tokenValidator,
  updateValidator,
  postController.updatePostController,
);

module.exports = routers;