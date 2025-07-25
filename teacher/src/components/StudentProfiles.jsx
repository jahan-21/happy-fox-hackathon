import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Container,
  Grid,
  alpha,
  useTheme
} from '@mui/material';
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
  const theme = useTheme();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/students')
      .then((response) => {
        setStudents(response.data);
        setError('');
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        setError('Failed to load student data. Please try again later.');
      });
  }, []);

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          mb: 4,
          textAlign: 'center',
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            background: theme.palette.primary.main,
            margin: '16px auto 0',
            borderRadius: '2px'
          }
        }}
      >
        Student Profiles
      </Typography>

      {error && (
        <Box sx={{ 
          backgroundColor: theme.palette.error.light, 
          color: theme.palette.error.contrastText,
          p: 2,
          mb: 3,
          borderRadius: 1,
          textAlign: 'center'
        }}>
          {error}
        </Box>
      )}

      {!selectedStudent ? (
        <Grid container spacing={3} justifyContent="center">
          {students.map((student, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderRadius: '12px',
                  border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Avatar
                  src={student.img}
                  alt={student.name}
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2,
                    border: `3px solid ${theme.palette.primary.main}`,
                  }}
                />
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  align="center"
                  color="text.primary"
                >
                  {student.name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  align="center"
                  sx={{ mb: 2 }}
                >
                  {student.roll}
                </Typography>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  sx={{
                    mt: 'auto',
                    fontWeight: 600,
                    px: 3,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    }
                  }}
                  onClick={() => handleViewProfile(student)}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper 
          elevation={0}
          sx={{ 
            p: 4,
            borderRadius: '12px',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2],
            border: `1px solid ${theme.palette.divider}`
          }}
        >
          <Button 
            variant="text"
            startIcon={<span>←</span>}
            onClick={handleBack}
            sx={{
              mb: 3,
              color: theme.palette.primary.main,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              }
            }}
          >
            Back to Students
          </Button>

          <Box 
            display="flex" 
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            gap={4}
            sx={{
              p: 3,
              borderRadius: '8px',
              backgroundColor: alpha(theme.palette.primary.light, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
              mb: 4
            }}
          >
            <Avatar
              src={selectedStudent.img}
              alt={selectedStudent.name}
              sx={{ 
                width: 120, 
                height: 120,
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                {selectedStudent.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Roll No:</strong> {selectedStudent.roll}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Email:</strong> {selectedStudent.email}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Phone:</strong> {selectedStudent.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>DOB:</strong> {selectedStudent.dob}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Department:</strong> {selectedStudent.department}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Place of Birth:</strong> {selectedStudent.placeOfBirth}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {selectedStudent.attendance && selectedStudent.attendance.length > 0 ? (
            <Box>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  '&:before': {
                    content: '""',
                    display: 'inline-block',
                    width: '4px',
                    height: '20px',
                    backgroundColor: theme.palette.primary.main,
                    marginRight: '12px',
                    borderRadius: '2px'
                  }
                }}
              >
                Attendance Summary
              </Typography>
              
              <Box sx={{ height: 400, mt: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedStudent.attendance}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                    <Legend />
                    <Bar 
                      dataKey="percentage" 
                      fill={theme.palette.primary.main} 
                      name="Attendance %"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>

              {selectedStudent.attendance.some(sub => sub.percentage < 75) && (
                <Box 
                  mt={3} 
                  p={2} 
                  sx={{ 
                    backgroundColor: alpha(theme.palette.error.light, 0.1),
                    borderRadius: '8px',
                    border: `1px solid ${theme.palette.error.light}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Typography color="error" fontWeight={600}>
                    ⚠ Attendance Warning: Below 75% in some subjects
                  </Typography>
                </Box>
              )}
            </Box>
          ) : (
            <Box sx={{ 
              backgroundColor: theme.palette.warning.light,
              p: 2,
              borderRadius: 1,
              textAlign: 'center'
            }}>
              <Typography color="text.secondary">
                No attendance records available for this student
              </Typography>
            </Box>
          )}
        </Paper>
      )}
    </Container>
  );
};

export default StudentProfiles;