import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Container,
} from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Sample attendance data
  const sampleAttendance = [
    { subject: 'Mathematics', percentage: 85 },
    { subject: 'Physics', percentage: 92 },
    { subject: 'Programming', percentage: 78 },
    { subject: 'Digital Logic', percentage: 88 },
    { subject: 'Data Structures', percentage: 95 }
  ];

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/students')
      .then((response) => {
        // Add attendance data to each student
        const studentsWithAttendance = response.data.map(student => ({
          ...student,
          attendance: sampleAttendance
        }));
        setStudents(studentsWithAttendance);
      })
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
            <Grid key={index} sx={{ 
              width: { xs: '100%', sm: '50%', md: '25%' },
              display: 'inline-block',
              p: 1
            }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
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

          <Box display="flex" alignItems="center" gap={4} flexWrap="wrap">
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

          {selectedStudent.attendance && (
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                Subject-wise Attendance
              </Typography>
              <Box sx={{ width: '100%', height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={selectedStudent.attendance}
                    layout="vertical"
                    margin={{
                      top: 20,
                      right: 50,
                      left: 120,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]}
                      tickCount={6}
                      label={{ value: 'Attendance %', position: 'bottom', offset: 0 }}
                    />
                    <YAxis
                      dataKey="subject"
                      type="category"
                      tick={{ fontSize: 12 }}
                      width={100}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Attendance']}
                      cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                    />
                    <Legend verticalAlign="top" height={36} />
                    <Bar
                      dataKey="percentage"
                      fill="#2196f3"
                      name="Attendance %"
                      barSize={30}
                      radius={[0, 4, 4, 0]}
                      label={{ 
                        position: 'right',
                        formatter: (value) => `${value}%`,
                        fill: '#666',
                        fontSize: 12
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>

              {selectedStudent.attendance.some(sub => sub.percentage < 75) && (
                <Box 
                  mt={2} 
                  p={2} 
                  sx={{ 
                    backgroundColor: '#ffebee',
                    borderRadius: 1,
                    border: '1px solid #ef5350'
                  }}
                >
                  <Typography color="error" fontWeight="bold">
                    ⚠ Alert: One or more subjects have attendance below 75%!
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Paper>
      )}
    </Container>
  );
};

export default StudentProfiles;