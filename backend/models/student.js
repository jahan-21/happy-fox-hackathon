const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  img: String,
  dob: String,
  email: String,
  phone: String,
  department: String,
  placeOfBirth: String,
});

module.exports = mongoose.model('Student', studentSchema);
