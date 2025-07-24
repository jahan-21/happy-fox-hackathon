import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Grid,
  Container,
} from '@mui/material';
import axios from 'axios';

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/students') // Replace with your actual backend URL
      .then((response) => setStudents(response.data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

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
