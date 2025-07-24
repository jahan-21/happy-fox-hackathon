import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Grid,
  Container,
} from '@mui/material';

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
    phone: '8765432109',
    department: 'Information Technology',
    placeOfBirth: 'Chennai',
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    dob: '2003-03-18',
    email: 'rohan.patel@example.com',
    phone: '7654321098',
    department: 'Information Technology',
    placeOfBirth: 'Ahmedabad',
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
  },
];

const StudentProfiles = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Student Profiles
      </Typography>

      {!selectedStudent ? (
        <Grid container spacing={3}>
          {students.map((student, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={student.img}
                  alt={student.name}
                  sx={{ width: 70, height: 70, mb: 2 }}
                />
                <Typography variant="subtitle1" fontWeight="bold" align="center">
                  {student.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {student.roll}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => handleViewProfile(student)}
                >
                  View Profile
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Button variant="outlined" onClick={handleBack} sx={{ mb: 2 }}>
            ← Back to all students
          </Button>
          <Box display="flex" alignItems="center" gap={4}>
            <Avatar
              src={selectedStudent.img}
              alt={selectedStudent.name}
              sx={{ width: 100, height: 100 }}
            />
            <Box>
              <Typography variant="h6">{selectedStudent.name}</Typography>
              <Typography>Roll No: {selectedStudent.roll}</Typography>
              <Typography>Email: {selectedStudent.email}</Typography>
              <Typography>Phone: {selectedStudent.phone}</Typography>
              <Typography>DOB: {selectedStudent.dob}</Typography>
              <Typography>Department: {selectedStudent.department}</Typography>
              <Typography>Place of Birth: {selectedStudent.placeOfBirth}</Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default StudentProfiles;
