const express = require('express');

const { userController } = require('../controllers');
const { 
  userValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidator');

const routers = express.Router();

routers.post(
'/', 
userValidator,
displayNameValidator,
emailValidator,
passwordValidator,
userController.createUserController,
);

module.exports = routers;