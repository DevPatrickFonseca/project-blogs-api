const { postService } = require('../services');

const getPostController = async (req, res) => {
  const { type, data } = await postService
    .getPosts();

  return res.status(type).json(data);
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await postService
    .getPostById(Number(id));

  return res.status(type).json(data);
};

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { type, data } = await postService
    .postPost({ title, content, userId: id, categoryIds });

  return res.status(type).json(data);
};

module.exports = {
  getPostController,
  getPostByIdController,
  createPostController,
};