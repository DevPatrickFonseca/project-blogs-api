const { userService } = require('../services');

const getUsersController = async (req, res) => {
  const { type, data } = await userService
    .getUsers();

  return res.status(type).json(data);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await userService
    .getUserById(Number(id));

  return res.status(type).json(data);
};

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, data } = await userService
    .postUser({ displayName, email, password, image });

  return res.status(type).json(data);
};

const deleteUserController = async (req, res) => {
  const { id } = req.user;
  const { type, data } = await userService
    .deleteUser(id);

  return res.status(type).json(data);
};

module.exports = {
  createUserController,
  getUsersController,
  getUserByIdController,
  deleteUserController,
};