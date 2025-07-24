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

const eventData = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    event: 'Hackathon 2024',
    role: 'Team Lead',
    status: 'Participated',
    certificate: 'aarav_hackathon.pdf',
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    event: 'Coding Sprint',
    role: 'Member',
    status: 'Winner',
    certificate: 'kavya_coding.pdf',
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    event: 'Designathon',
    role: 'Member',
    status: 'Participated',
    certificate: '',
  },
];

const EventParticipation = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Event Participation Details
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Student Name</b></TableCell>
              <TableCell><b>Roll No</b></TableCell>
              <TableCell><b>Event Name</b></TableCell>
              <TableCell><b>Role</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Certificate</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.roll}</TableCell>
                <TableCell>{data.event}</TableCell>
                <TableCell>{data.role}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>
                  {data.certificate ? (
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

export default EventParticipation;
