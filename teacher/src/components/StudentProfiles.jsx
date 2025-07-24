import React from 'react';
import { Box, Typography, Paper, Avatar, Button, Grid, Container } from '@mui/material';

const students = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sneha Reddy',
    roll: '21IT104',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Pranav Menon',
    roll: '21IT105',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Diya Kapoor',
    roll: '21IT106',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    name: 'Vikram Joshi',
    roll: '21IT107',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Aisha Khan',
    roll: '21IT108',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    name: 'Harsh Verma',
    roll: '21IT109',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    name: 'Meera Das',
    roll: '21IT110',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

const StudentProfiles = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Student Profiles
      </Typography>
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
              <Button variant="contained" size="small" sx={{ mt: 2 }}>
                View Profile
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StudentProfiles;
