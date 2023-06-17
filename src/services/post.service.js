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

const getPostById = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!postId) {
    return { 
      type: 404, 
      data: { message: 'Post does not exist' }, 
    };
  }
  
  return { type: 200, data: postId };
};

module.exports = {
  getPosts,
  getPostById,
};
