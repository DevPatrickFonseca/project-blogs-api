const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!allPosts) {
    return { 
      type: 500, 
      data: { message: 'No registered posts' }, 
    };
  }
  
  return { type: 200, data: allPosts };
};

module.exports = {
  getPosts,
};
