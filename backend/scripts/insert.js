const mongoose = require('mongoose');
const Student = require('../models/student');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/happyfox', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};
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
    attendance: [
      { subject: 'Maths', percentage: 85 },
      { subject: 'DBMS', percentage: 92 },
      { subject: 'OS', percentage: 78 },
      { subject: 'CN', percentage: 68 },
      { subject: 'SE', percentage: 88 },
    ],
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    dob: '2003-02-20',
    email: 'kavya.iyer@example.com',
    phone: '9876543211',
    department: 'Information Technology',
    placeOfBirth: 'Chennai',
    attendance: [
      { subject: 'Maths', percentage: 90 },
      { subject: 'DBMS', percentage: 88 },
      { subject: 'OS', percentage: 72 },
      { subject: 'CN', percentage: 79 },
      { subject: 'SE', percentage: 95 },
    ],
  },
  {
    name: 'Rohan Verma',
    roll: '21IT103',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    dob: '2003-03-10',
    email: 'rohan.verma@example.com',
    phone: '9876543212',
    department: 'Information Technology',
    placeOfBirth: 'Delhi',
    attendance: [
      { subject: 'Maths', percentage: 65 },
      { subject: 'DBMS', percentage: 80 },
      { subject: 'OS', percentage: 72 },
      { subject: 'CN', percentage: 74 },
      { subject: 'SE', percentage: 90 },
    ],
  },
  {
    name: 'Sneha Nair',
    roll: '21IT104',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    dob: '2003-04-25',
    email: 'sneha.nair@example.com',
    phone: '9876543213',
    department: 'Information Technology',
    placeOfBirth: 'Kochi',
    attendance: [
      { subject: 'Maths', percentage: 92 },
      { subject: 'DBMS', percentage: 85 },
      { subject: 'OS', percentage: 95 },
      { subject: 'CN', percentage: 91 },
      { subject: 'SE', percentage: 88 },
    ],
  },
  {
    name: 'Rahul Mehta',
    roll: '21IT105',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    dob: '2003-05-12',
    email: 'rahul.mehta@example.com',
    phone: '9876543214',
    department: 'Information Technology',
    placeOfBirth: 'Ahmedabad',
    attendance: [
      { subject: 'Maths', percentage: 78 },
      { subject: 'DBMS', percentage: 82 },
      { subject: 'OS', percentage: 88 },
      { subject: 'CN', percentage: 93 },
      { subject: 'SE', percentage: 70 },
    ],
  },
  {
    name: 'Ishita Rao',
    roll: '21IT106',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    dob: '2003-06-30',
    email: 'ishita.rao@example.com',
    phone: '9876543215',
    department: 'Information Technology',
    placeOfBirth: 'Bangalore',
    attendance: [
      { subject: 'Maths', percentage: 89 },
      { subject: 'DBMS', percentage: 67 },
      { subject: 'OS', percentage: 72 },
      { subject: 'CN', percentage: 94 },
      { subject: 'SE', percentage: 91 },
    ],
  },
  {
    name: 'Aditya Desai',
    roll: '21IT107',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    dob: '2003-07-18',
    email: 'aditya.desai@example.com',
    phone: '9876543216',
    department: 'Information Technology',
    placeOfBirth: 'Pune',
    attendance: [
      { subject: 'Maths', percentage: 73 },
      { subject: 'DBMS', percentage: 76 },
      { subject: 'OS', percentage: 70 },
      { subject: 'CN', percentage: 60 },
      { subject: 'SE', percentage: 85 },
    ],
  },
  {
    name: 'Neha Patil',
    roll: '21IT108',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    dob: '2003-08-09',
    email: 'neha.patil@example.com',
    phone: '9876543217',
    department: 'Information Technology',
    placeOfBirth: 'Nagpur',
    attendance: [
      { subject: 'Maths', percentage: 95 },
      { subject: 'DBMS', percentage: 91 },
      { subject: 'OS', percentage: 96 },
      { subject: 'CN', percentage: 89 },
      { subject: 'SE', percentage: 94 },
    ],
  },
  {
    name: 'Yash Gupta',
    roll: '21IT109',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    dob: '2003-09-27',
    email: 'yash.gupta@example.com',
    phone: '9876543218',
    department: 'Information Technology',
    placeOfBirth: 'Jaipur',
    attendance: [
      { subject: 'Maths', percentage: 82 },
      { subject: 'DBMS', percentage: 77 },
      { subject: 'OS', percentage: 79 },
      { subject: 'CN', percentage: 64 },
      { subject: 'SE', percentage: 87 },
    ],
  },
  {
    name: 'Ananya Sen',
    roll: '21IT110',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    dob: '2003-10-14',
    email: 'ananya.sen@example.com',
    phone: '9876543219',
    department: 'Information Technology',
    placeOfBirth: 'Kolkata',
    attendance: [
      { subject: 'Maths', percentage: 74 },
      { subject: 'DBMS', percentage: 81 },
      { subject: 'OS', percentage: 69 },
      { subject: 'CN', percentage: 88 },
      { subject: 'SE', percentage: 75 },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Student.deleteMany();
    console.log('Existing data cleared');
    
    // Insert new data
    const insertedStudents = await Student.insertMany(students);
    console.log(`${insertedStudents.length} students inserted`);
    
    // Verify data
    const count = await Student.countDocuments();
    console.log(`Total students in DB: ${count}`);
    
    // Check first student's attendance
    const sampleStudent = await Student.findOne();
    console.log('Sample student attendance:', sampleStudent.attendance);
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    mongoose.disconnect();
    console.log('Disconnected from DB');
  }
};