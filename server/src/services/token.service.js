const jwt = require("jsonwebtoken");

function createToken(data, secret, expiresIn) {
  return jwt.sign({ ...data, iat: Date.now() }, secret, { expiresIn });
}

module.exports.createAccessToken = async (user) => {
  return createToken(user, process.env.ACCESS_SECRET, proccess.env.ACCESS_EXPIRES);
};

module.exports.createRefreshToken = async () => {
  return createToken(user, process.env.REFRESH_SECRET, proccess.env.REFRESH_EXPIRES);
};

module.exports.verifyAccessToken = async (token) => {
  return jwt.verify(token, process.env.ACCESS_SECRET);
}