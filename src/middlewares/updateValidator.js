const HTTP_ERROR_BAD_REQUEST = 400;

const updateValidator = async (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(HTTP_ERROR_BAD_REQUEST)
    .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  updateValidator,
};