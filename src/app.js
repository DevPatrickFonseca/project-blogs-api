const express = require('express');
const { loginRouter, userRouter } = require('./routes');

const app = express();
require('express-async-errors');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
