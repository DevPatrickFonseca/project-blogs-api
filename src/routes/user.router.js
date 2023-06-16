const express = require('express');

const routers = express.Router();

const { userController } = require('../controllers');
const { 
  userValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidator');
const { tokenValidator } = require('../middlewares/tokenValidator');

routers.get('/', tokenValidator, userController.getUsersController);

routers.post(
'/', 
userValidator,
displayNameValidator,
emailValidator,
passwordValidator,
userController.createUserController,
);

module.exports = routers;