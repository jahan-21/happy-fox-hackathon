// scripts/insert.js
const mongoose = require('mongoose');
const Student = require('../models/student'); // adjust the path if needed

const students = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    dob: '2003-01-15',
    email: 'aarav.sharma@example.com',
    phone: '9876543210',
    department: 'Information Technology',
    placeOfBirth: 'Mumbai',
  },
  // ... other student objects
];

const MONGO_URI = 'mongodb://localhost:27017/happyfox'; // your DB URI

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Student.deleteMany(); // Optional: clears old entries
    await Student.insertMany(students);
    console.log('Students inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
  });
