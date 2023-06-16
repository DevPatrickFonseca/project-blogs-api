const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, data } = await loginService.loginAuthorization({ email, password });

  return res.status(type).json(data);
};

module.exports = {
  login,
};