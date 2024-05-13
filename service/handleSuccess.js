const handleSuccess = (res, data, message = "") => {
  res.send({
    status: "success",
    data,
    message,
  });
};

module.exports = handleSuccess;
