const loggignfUrl = (req, res, next) => {
  console.log(req.url);
  next();
};
const loggignParamas = (req, res, next) => {
  console.log(req.params);
  next();
};

module.exports = {
  loggignfUrl,
  loggignParamas,
};
