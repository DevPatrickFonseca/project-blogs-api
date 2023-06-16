const { loginService } = require('../services');

const loginAuthorizationController = async (req, res) => {
  const { email, password } = req.body;
  const { type, data } = await loginService.loginAuthorizationService({ email, password });

  return res.status(type).json(data);
};

module.exports = {
  loginAuthorizationController,
};