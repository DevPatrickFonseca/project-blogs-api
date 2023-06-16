const { userService } = require('../services');

const getUsersController = async (req, res) => {
  const { type, data } = await userService
    .getUsers();

  return res.status(type).json(data);
};

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, data } = await userService
    .postUser({ displayName, email, password, image });

  return res.status(type).json(data);
};

module.exports = {
  createUserController,
  getUsersController,
};