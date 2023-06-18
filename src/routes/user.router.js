const express = require('express');

const routers = express.Router();

const { userController } = require('../controllers');

const { tokenValidator } = require('../middlewares');
const { 
  userValidator,
  displayUserNameValidator,
  emailUserValidator,
  passwordUserValidator,
} = require('../middlewares');

routers.get('/', tokenValidator, userController.getUsersController);
routers.get('/:id', tokenValidator, userController.getUserByIdController);

routers.post(
  '/', 
  userValidator,
  displayUserNameValidator,
  emailUserValidator,
  passwordUserValidator,
  userController.createUserController,
);

routers.delete('/me', tokenValidator, userController.deleteUserController);

module.exports = routers;