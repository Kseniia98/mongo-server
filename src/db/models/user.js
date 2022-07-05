const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
    minLength: 3,
    maxLength: 32,
  },
  lastname: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number,
    min: 18,
    max: 100,
  },
  address: {
    city: {
      required: false,
      type: String,
    },
    country: {
      type: String,
      enum: ["USA", "Canada", "Brasil", "Mexico", "Cuba"],
    }
  },
  created_at: {
    type: Date,
  }
});

const User = mongoose.model('users', userSchema)

module.exports = User;