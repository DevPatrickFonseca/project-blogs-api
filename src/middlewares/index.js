const { categoryValidator } = require('./categoryValidator');
const { emailLoginValidator, passwordLoginValidator } = require('./loginValidator');
const { postValidator } = require('./postValidator');
const { tokenValidator } = require('./tokenValidator');
const { updateValidator } = require('./updateValidator');
const { 
  userValidator, 
  displayUserNameValidator, 
  emailUserValidator, 
  passwordUserValidator, 
} = require('./userValidator');

module.exports = {
  categoryValidator,
  emailLoginValidator,
  passwordLoginValidator,
  postValidator,
  tokenValidator,
  updateValidator,
  userValidator,
  displayUserNameValidator,
  emailUserValidator,
  passwordUserValidator,
};