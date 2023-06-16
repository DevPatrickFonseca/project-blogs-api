const HTTP_ERROR_BAD_REQUEST = 400;

const categoryValidator = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_ERROR_BAD_REQUEST).json(
      {
        message: '"name" is required',
      },
    );
  }

  next();
};

module.exports = {
  categoryValidator,
};