const mongoose = require('mongoose');
const Student = require('../models/student');

mongoose.connect('mongodb://127.0.0.1:27017/happyfox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    dob: '2003-02-20',
    email: 'kavya.iyer@example.com',
    phone: '9876543211',
    department: 'Information Technology',
    placeOfBirth: 'Chennai',
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
  },
];

Student.insertMany(students)
  .then(() => {
    console.log('All students inserted');
    mongoose.disconnect();
  })
  .catch((err) => console.error('Error inserting:', err));
