const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Get all students with attendance data
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().lean();
    // Transform data to ensure consistent structure
    const transformedStudents = students.map(student => ({
      ...student,
      attendance: student.attendance || [] // Ensure attendance array exists
    }));
    res.json(transformedStudents);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;