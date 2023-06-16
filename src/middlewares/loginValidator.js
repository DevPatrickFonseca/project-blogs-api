const HTTP_ERROR_BAD_REQUEST = 400;

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: 'Some required fields are missing',
      },
    );
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: 'Some required fields are missing',
      }, 
    );
  }

  // if (password.length < 6) {
  //   return res.status(HTTP_ERROR_BAD_REQUEST).json(
  //     {
  //       message: '"password" length must be at least 6 characters long',
  //     },
  //   );
  // }

  next();
};

module.exports = {
  emailValidator,
  passwordValidator,
};