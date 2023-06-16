const { userService } = require('../services');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, data } = await userService.postUser({ displayName, email, password, image });

  return res.status(type).json(data);
};

module.exports = {
  createUserController,
};