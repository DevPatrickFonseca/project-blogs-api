const { User } = require('../models');
const { createToken } = require('../utils/JWTGenerator');

const getUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  if (!allUsers) {
    return { 
      type: 500, 
      data: { message: 'No registered users' }, 
    };
  }
  
  return { type: 200, data: allUsers };
};

const getUserById = async (id) => {
  const userId = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  if (!userId) {
    return { 
      type: 404, 
      data: { message: 'User does not exist' }, 
    };
  }
  
  return { type: 200, data: userId };
};

const postUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return { 
      type: 409, 
      data: { message: 'User already registered' }, 
    };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const payload = {
    id: newUser.id,
    displayName: newUser.displayName,
  };
  
  const token = createToken(payload);
  
  return { type: 201, data: { token } };
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
};
