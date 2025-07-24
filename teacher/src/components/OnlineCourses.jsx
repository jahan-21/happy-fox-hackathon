import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';

const courseData = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    course: 'React Basics',
    platform: 'Coursera',
    status: 'Completed',
    certificate: 'aarav_react.pdf',
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    course: 'Python for Everybody',
    platform: 'edX',
    status: 'Ongoing',
    certificate: '',
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    course: 'Machine Learning',
    platform: 'Udemy',
    status: 'Completed',
    certificate: 'rohan_ml.pdf',
  },
];

const OnlineCourses = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Online Course Completion Details
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Student Name</b></TableCell>
              <TableCell><b>Roll No</b></TableCell>
              <TableCell><b>Course Name</b></TableCell>
              <TableCell><b>Platform</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Certificate</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.roll}</TableCell>
                <TableCell>{data.course}</TableCell>
                <TableCell>{data.platform}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>
                  {data.status === 'Completed' && data.certificate ? (
                    <Link href={`/${data.certificate}`} target="_blank" rel="noopener">
                      {data.certificate}
                    </Link>
                  ) : (
                    ''
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OnlineCourses;
