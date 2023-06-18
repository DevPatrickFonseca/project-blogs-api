const HTTP_ERROR_BAD_REQUEST = 400;

const emailLoginValidator = (req, res, next) => {
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

const passwordLoginValidator = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: 'Some required fields are missing',
      }, 
    );
  }

  next();
};

module.exports = {
  emailLoginValidator,
  passwordLoginValidator,
};