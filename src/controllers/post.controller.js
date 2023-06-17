const { postService } = require('../services');

const getPostController = async (req, res) => {
  const { type, data } = await postService
    .getPosts();

  return res.status(type).json(data);
};

module.exports = {
  getPostController,
};