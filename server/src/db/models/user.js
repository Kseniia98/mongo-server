const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { SALT_ROUNDS } = require("../../constants");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 32,
  },
  lastname: {
    type: "String",
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      enum: ["USA", "Canada", "Brasil", "Mexico", "Cuba"],
    },
  },
  createdAt: {
    type: Date,
  },
  email: {
    type: String, 
    required: true,
    unique: true,
    min: 7,
    max: 48,
  },
  password: {
    type: String, // TEXT
    required: true,
    set: (password) => {
      const pass_hash = bcrypt.hashSync(password, SALT_ROUNDS);

      return pass_hash;
    },
  },
});

module.exports = mongoose.model("users", userSchema);