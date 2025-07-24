// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Insert multiple students
router.post('/insert', async (req, res) => {
  try {
    const data = req.body;
    await Student.insertMany(data);
    res.status(200).json({ message: 'Students inserted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
