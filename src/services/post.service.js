const { BlogPost, User, Category, PostCategory } = require('../models');

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

const hasCategory = async (categoryIds) => {
  const categoryPost = await Category.findAll({ where: { id: categoryIds } });
  
  return categoryPost.length === categoryIds.length;
};

const postPost = async ({ title, content, userId, categoryIds }) => {
  if (!(await hasCategory(categoryIds))) {
    return { 
      type: 400, data: { message: 'one or more "categoryIds" not found' }, 
    };
  }

  const newPost = await BlogPost.create({ title, content, userId });

  await PostCategory
  .bulkCreate(categoryIds.map((categoryId) => ({ categoryId, postId: newPost.id })));

  return { type: 201, data: newPost };
};

module.exports = {
  getPosts,
  getPostById,
  postPost,
};

// Requirement completed with the help of Allex Thiago Santos Rosa
// https://github.com/AllexThiagoSR
// https://www.linkedin.com/in/allexthiagosantosrosa