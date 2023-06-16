const express = require('express');

const { loginController } = require('../controllers');

const { emailValidator, passwordValidator } = require('../middlewares/loginValidator');

const routers = express.Router();

routers.post('/', emailValidator, passwordValidator, loginController.login);

module.exports = routers;