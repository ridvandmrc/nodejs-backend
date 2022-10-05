const generalLog = (req, res, next) => {
  console.log("Request handled: ", Date.now());
  next()
};


module.exports = generalLog