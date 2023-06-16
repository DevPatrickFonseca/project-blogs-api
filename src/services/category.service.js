const { Category } = require('../models');

const postCategory = async ({ name }) => {
  const category = await Category.findOne({
    attributes: ['id', 'name'],
    where: { name },
  });

  if (category) {
    return { 
      type: 409, 
      data: { message: 'Category already registered' }, 
    };
  }

  const newCategory = await Category.create({ name });
  
  return { type: 201, data: newCategory };
};

module.exports = {
  postCategory,
};
