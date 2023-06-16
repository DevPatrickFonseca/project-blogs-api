const express = require('express');

const routers = express.Router();

const { userController } = require('../controllers');

const { tokenValidator } = require('../middlewares/tokenValidator');
const { 
  userValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidator');

routers.get('/', tokenValidator, userController.getUsersController);
routers.get('/:id', tokenValidator, userController.getUserByIdController);

routers.post(
'/', 
userValidator,
displayNameValidator,
emailValidator,
passwordValidator,
userController.createUserController,
);

module.exports = routers;