import React, { useState } from 'react';
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
  Button,
  Stack,
} from '@mui/material';

const initialLeaveData = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    date: '2025-07-20',
    reason: 'Medical leave due to fever',
    type: 'ML',
    proof: 'aarav_medical.pdf',
    status: '',
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    date: '2025-07-18',
    reason: 'Participated in Tech Fest',
    type: 'OD',
    proof: 'kavya_techfest.docx',
    status: '',
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    date: '2025-07-19',
    reason: 'Medical consultation',
    type: 'ML',
    proof: '',
    status: '',
  },
  {
    name: 'Sneha Reddy',
    roll: '21IT104',
    date: '2025-07-21',
    reason: 'Presented paper in seminar',
    type: 'OD',
    proof: 'sneha_seminar.pdf',
    status: '',
  },
];

const LeaveApprovals = () => {
  const [leaveData, setLeaveData] = useState(initialLeaveData);

  const handleAction = (index, action) => {
    const updated = [...leaveData];
    updated[index].status = action;
    setLeaveData(updated);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Leave Approvals
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Roll No</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Reason</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Proof</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.roll}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.reason}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>
                  {data.proof ? (
                    <Link href={`/${data.proof}`} target="_blank" rel="noopener">
                      {data.proof}
                    </Link>
                  ) : '—'}
                </TableCell>
                <TableCell>
                  {data.status ? (
                    <Typography
                      color={data.status === 'Approved' ? 'green' : 'red'}
                      fontWeight="bold"
                    >
                      {data.status}
                    </Typography>
                  ) : 'Pending'}
                </TableCell>
                <TableCell>
                  <Stack direction="column" spacing={1}>
                    {data.type === 'ML' ? (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          disabled={data.status === 'Approved'}
                          onClick={() => handleAction(index, 'Approved')}
                        >
                          Approve ML
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          disabled={data.status === 'Rejected'}
                          onClick={() => handleAction(index, 'Rejected')}
                        >
                          Reject ML
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          disabled={data.status === 'Approved'}
                          onClick={() => handleAction(index, 'Approved')}
                        >
                          Approve OD
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          disabled={data.status === 'Rejected'}
                          onClick={() => handleAction(index, 'Rejected')}
                        >
                          Reject OD
                        </Button>
                      </>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaveApprovals;
