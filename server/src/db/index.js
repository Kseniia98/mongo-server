const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/fd_mongo";

mongoose.connect(uri).catch(console.error);

module.exports = {
  User: require("./models/user"),
  Msg: require("./models/message"),
};