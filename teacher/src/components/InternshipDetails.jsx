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

const internshipData = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    company: 'TCS',
    type: 'Virtual',
    duration: '2 months',
    status: 'Completed',
    description: 'Worked on frontend development',
    proof: 'internship_aarav.pdf',
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    company: 'Infosys',
    type: 'In-office',
    duration: '3 months',
    status: 'Ongoing',
    description: 'Backend API integration',
    proof: '',
  },
  {
    name: 'Rohit Mehta',
    roll: '21IT103',
    company: 'Wipro',
    type: 'Remote',
    duration: '1 month',
    status: 'Completed',
    description: 'Data analysis and reporting',
    proof: 'rohit_wipro.docx',
  },
];

const InternshipDetails = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Internship Details
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Student Name</b></TableCell>
              <TableCell><b>Roll No</b></TableCell>
              <TableCell><b>Company</b></TableCell>
              <TableCell><b>Internship Type</b></TableCell>
              <TableCell><b>Duration</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Proof</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {internshipData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.roll}</TableCell>
                <TableCell>{data.company}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.duration}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>
                  {data.proof ? (
                    <Link href={`/${data.proof}`} target="_blank" rel="noopener">
                      {data.proof}
                    </Link>
                  ) : (
                    data.status === 'Ongoing' ? 'Not Required' : 'N/A'
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

export default InternshipDetails;
