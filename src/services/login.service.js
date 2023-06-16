const { User } = require('../models');
const { createToken } = require('../utils/JWTGenerator');

const loginAuthorizationService = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!user) {
    return { 
      type: 400, 
      data: { message: 'Invalid fields' }, 
    };
  }

  const payload = {
    id: user.id,
    displayName: user.displayName,
  };
  
  const token = createToken(payload);
  
  return { type: 200, data: { token } };
};

module.exports = {
  loginAuthorizationService,
};

// Reference: 
// Trybe Live Lectures Module 3 - Chapter 6 - Day 4