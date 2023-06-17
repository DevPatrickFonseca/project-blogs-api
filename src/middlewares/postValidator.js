const HTTP_ERROR_BAD_REQUEST = 400;

const postValidator = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: 'Some required fields are missing',
      },
    );
  }

  next();
};

module.exports = {
  postValidator,
};