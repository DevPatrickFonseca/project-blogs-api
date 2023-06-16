const { categoryService } = require('../services');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await categoryService
    .postCategory({ name });

  return res.status(type).json(data);
};

module.exports = {
  createCategoryController,
};