const { categoryService } = require('../services');

const getCategoriesController = async (req, res) => {
  const { type, data } = await categoryService
    .getCategories();

  return res.status(type).json(data);
};

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await categoryService
    .postCategory({ name });

  return res.status(type).json(data);
};

module.exports = {
  createCategoryController,
  getCategoriesController,
};