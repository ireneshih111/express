const handleError = (res, message = "", statusCode = 400) => {
  res.status(statusCode).send({
    status: "fail",
    message,
  });
};

module.exports = handleError;
