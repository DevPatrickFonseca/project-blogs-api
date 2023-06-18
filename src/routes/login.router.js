const express = require('express');

const { loginController } = require('../controllers');

const { 
  emailLoginValidator, 
  passwordLoginValidator, 
} = require('../middlewares');

const routers = express.Router();

routers.post(
'/', 
emailLoginValidator, 
passwordLoginValidator, 
loginController.loginAuthorizationController,
);

module.exports = routers;