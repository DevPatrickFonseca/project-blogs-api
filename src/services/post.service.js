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

const putPost = async ({ id, title, content, userId }) => {
  const postToBeUpdate = await BlogPost.findByPk(id);

  if (!postToBeUpdate) {
    return { type: 400, data: { message: 'Post does not exist' } };
  }

  if (postToBeUpdate.userId !== userId) {
    return { type: 401, data: { message: 'Unauthorized user' } };
  }

  await BlogPost.update({ title, content }, { where: { id } });
  
  const updatedPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: 200, data: updatedPost };
};

const deletePost = async ({ id, userId }) => {
  const postToBeDelete = await BlogPost.findByPk(id);

  if (!postToBeDelete) {
    return { type: 404, data: { message: 'Post does not exist' } };
  }

  if (postToBeDelete.userId !== userId) {
    return { type: 401, data: { message: 'Unauthorized user' } };
  }

  await BlogPost.destroy({ where: { id } });
  
  const deletedPost = await BlogPost.findByPk(id);

  return { type: 204, data: deletedPost };
};

module.exports = {
  getPosts,
  getPostById,
  postPost,
  putPost,
  deletePost,
};

// Requirement completed with the help of Allex Thiago Santos Rosa
// https://github.com/AllexThiagoSR
// https://www.linkedin.com/in/allexthiagosantosrosa