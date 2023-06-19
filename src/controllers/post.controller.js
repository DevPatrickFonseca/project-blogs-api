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

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { title, content } = req.body;

  const { type, data } = await postService
    .putPost({ id, title, content, userId });

  return res.status(type).json(data);
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { type, data } = await postService
    .deletePost({ id, userId });

  return res.status(type).json(data);
};

const searchPostController = async (req, res) => {
  const { q: searchTerm } = req.query;

  const { type, data } = await postService
    .searchPost(searchTerm);

  return res.status(type).json(data);
};

module.exports = {
  getPostController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
  searchPostController,
};