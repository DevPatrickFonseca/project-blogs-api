const { postService } = require('../services');

const getPostController = async (req, res) => {
  const { type, data } = await postService
    .getPosts();

  return res.status(type).json(data);
};

const gePostByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await postService
    .getPostById(Number(id));

  return res.status(type).json(data);
};

module.exports = {
  getPostController,
  gePostByIdController,
};