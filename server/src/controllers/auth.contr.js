const createHttpError = require("http-errors");
const { findByEmail, createUser } = require("../services/user.service");
const bcrypt = require('bcrypt');
const { createAccessToken } = require("../services/token.service");

class AuthController {
  registerUser = async (req, res, next) => {
    try {
      const data = req.body;
      const createdUser = await createUser(data)

      res.status(200).send({ data: createdUser })
    } catch (error) {
      next(error)
    }
  };

  loginUser = async (req, res, next) => {
    try {
      //LOGIN PART
      const data = req.body;

      if(!data.email || !data.password){
        throw createHttpError(400, 'Invalid login or password')
      }

      const foundUser = (await findByEmail(data.email)).toObject();

      if(!foundUser){
        throw createHttpError(400, 'Invalid login or password')
      }

      const isPassValid = await bcrypt.compare(data.password, foundUser.password);

      if(!isPassValid){
        throw createHttpError(400, 'Invalid login or password')
      }
      //TOKEN PART
      foundUser.password = undefined;

      const accessToken = await createAccessToken({id: foundUser._id, email: foundUser.email});

      res.status(200).send( {data: foundUser, token: {access: accessToken}})
    } catch (error) {
      next(error)
    }
  };
}

module.exports = new AuthController();