const { User } = require('../models');

const HTTP_ERROR_CONFLICT = 409;
const HTTP_ERROR_BAD_REQUEST = 400;

const userValidator = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return res.status(HTTP_ERROR_CONFLICT).json(
      {
        message: 'User already registered',
      },
    );
  }

  next();
};

const displayNameValidator = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: '"displayName" length must be at least 8 characters long',
      },
    );
  }

  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const emailPattern = regex.test(email);

  if (!email) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: '"email" must be a valid email',
      },
    );
  }

  if (!emailPattern) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: '"email" must be a valid email',
      }, 
    );
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: '"password" length must be at least 6 characters long',
      },
    );
  }

  next();
};

module.exports = {
  userValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
};