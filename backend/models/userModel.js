const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  RegNum: {
    type: String,
    required: [true, "Please enter your Reg number"],
  },
  PhoneNum: {
    type: Number,
    required: [true, "Please enter your Phone number"],
  },
  PhoneNum2: {
    type: Number,
    required: [true, "Please enter your Second Phone number"],
  },
  SchoolAddress: {
    type: String,
    required: [true, "Please enter your School Address"],
  },
  HomeAddress: {
    type: String,
    required: [true, "Please enter your Home Address"],
  },
  HomeAddress2: {
    type: String,
    required: [true, "Please enter your Second Home Address"],
  },
  SchoolContact: {
    type: Number,
    required: [true, "Please enter your School Emergency number"],
  },
  SchoolContact2: {
    type: Number,
    required: [true, "Please enter your Second Emergency number"],
  },
  HomeContact: {
    type: Number,
    required: [true, "Please enter your Home Phone number"],
  },
  HomeContact2: {
    type: Number,
    required: [true, "Please enter your Second Home Phone number"],
  },
  joined: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('User', userSchema)