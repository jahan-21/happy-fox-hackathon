const mongoose = require('mongoose');
const Student = require('./models/student');

mongoose.connect('mongodb://localhost:27017/students', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addAttendance = async () => {
  const students = await Student.find();

  for (let student of students) {
    student.attendance = [
      { subject: "Math", percentage: Math.floor(Math.random() * 11) + 85 },
      { subject: "Science", percentage: Math.floor(Math.random() * 11) + 80 },
      { subject: "English", percentage: Math.floor(Math.random() * 11) + 75 },
      { subject: "Computer", percentage: Math.floor(Math.random() * 11) + 90 },
      { subject: "History", percentage: Math.floor(Math.random() * 11) + 70 },
    ];
    await student.save();
  }

  console.log("✅ Attendance added to all students.");
  mongoose.disconnect();
};

addAttendance();
