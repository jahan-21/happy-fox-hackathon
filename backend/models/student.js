const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  roll: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  img: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  placeOfBirth: {
    type: String,
    required: true,
    trim: true
  },
  attendance: {
    type: [attendanceSchema],
    required: true,
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one attendance record is required'
    }
  }
});

// Add index for better query performance
studentSchema.index({ roll: 1 }, { unique: true });
studentSchema.index({ department: 1 });

module.exports = mongoose.model('Student', studentSchema);