const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./models/student');

dotenv.config();

const students = [
  {
    name: 'Abinaya M',
    roll: '21IT101',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    dob: '2005-05-25',
    email: 'abi@example.com',   
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
    name: 'Avinya ',
    roll: '21IT102',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    dob: '200-03-10',
    email: 'avinya@example.com',
    phone: '8765432109',
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
    name: 'Jahan Krithick P',
    roll: '21IT103',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    dob: '2003-03-18',
    email: 'jahan@example.com',
    phone: '7654321098',
    department: 'Information Technology',
    placeOfBirth: 'Ahmedabad',
    attendance: [
      { subject: 'Maths', percentage: 65 },
      { subject: 'DBMS', percentage: 80 },
      { subject: 'OS', percentage: 72 },
      { subject: 'CN', percentage: 74 },
      { subject: 'SE', percentage: 90 },
    ],
  },
  {
    name: 'Sneha Reddy',
    roll: '21IT104',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    dob: '2003-04-10',
    email: 'sneha.reddy@example.com',
    phone: '9988776655',
    department: 'Information Technology',
    placeOfBirth: 'Hyderabad',
    attendance: [
      { subject: 'Maths', percentage: 92 },
      { subject: 'DBMS', percentage: 85 },
      { subject: 'OS', percentage: 95 },
      { subject: 'CN', percentage: 91 },
      { subject: 'SE', percentage: 88 },
    ],
  },
  {
    name: 'Pranav Menon',
    roll: '21IT105',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    dob: '2003-05-25',
    email: 'pranav.menon@example.com',
    phone: '9123456780',
    department: 'Information Technology',
    placeOfBirth: 'Kochi',
    attendance: [
      { subject: 'Maths', percentage: 78 },
      { subject: 'DBMS', percentage: 82 },
      { subject: 'OS', percentage: 88 },
      { subject: 'CN', percentage: 93 },
      { subject: 'SE', percentage: 70 },
    ],
  },
  {
    name: 'Diya Kapoor',
    roll: '21IT106',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    dob: '2003-06-11',
    email: 'diya.kapoor@example.com',
    phone: '9988665544',
    department: 'Information Technology',
    placeOfBirth: 'Delhi',
    attendance: [
      { subject: 'Maths', percentage: 89 },
      { subject: 'DBMS', percentage: 67 },
      { subject: 'OS', percentage: 72 },
      { subject: 'CN', percentage: 94 },
      { subject: 'SE', percentage: 91 },
    ],
  },
  {
    name: 'Vikram Joshi',
    roll: '21IT107',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    dob: '2003-07-09',
    email: 'vikram.joshi@example.com',
    phone: '8877665544',
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
    name: 'Aisha Khan',
    roll: '21IT108',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    dob: '2003-08-22',
    email: 'aisha.khan@example.com',
    phone: '7766554433',
    department: 'Information Technology',
    placeOfBirth: 'Lucknow',
    attendance: [
      { subject: 'Maths', percentage: 95 },
      { subject: 'DBMS', percentage: 91 },
      { subject: 'OS', percentage: 96 },
      { subject: 'CN', percentage: 89 },
      { subject: 'SE', percentage: 94 },
    ],
  },
  {
    name: 'Harsh Verma',
    roll: '21IT109',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    dob: '2003-09-30',
    email: 'harsh.verma@example.com',
    phone: '6655443322',
    department: 'Information Technology',
    placeOfBirth: 'Bhopal',
    attendance: [
      { subject: 'Maths', percentage: 82 },
      { subject: 'DBMS', percentage: 77 },
      { subject: 'OS', percentage: 79 },
      { subject: 'CN', percentage: 64 },
      { subject: 'SE', percentage: 87 },
    ],
  },
  {
    name: 'Meera Das',
    roll: '21IT110',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    dob: '2003-10-12',
    email: 'meera.das@example.com',
    phone: '5544332211',
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

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Student.deleteMany({});
    await Student.insertMany(students);
    console.log('Student data with attendance seeded!');
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
