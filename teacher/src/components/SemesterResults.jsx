import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  Collapse,
} from '@mui/material';

const students = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A' },
          { name: 'Physics', grade: 'B' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'B+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'B+' },
          { name: 'Java Programming', grade: 'A' },
          { name: 'Database Systems', grade: 'A+' },
          { name: 'Computer Architecture', grade: 'A' },
          { name: 'Operating Systems', grade: 'RA' },
        ],
        arrears: ['Operating Systems'],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A' },
          { name: 'Computer Networks', grade: 'B+' },
          { name: 'Web Technology', grade: 'A+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'RA' },
        ],
        arrears: ['Discrete Mathematics'],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'A' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'B+' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Kavya Iyer',
    roll: '21IT102',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A+' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'A' },
          { name: 'Java Programming', grade: 'A+' },
          { name: 'Database Systems', grade: 'A' },
          { name: 'Computer Architecture', grade: 'A' },
          { name: 'Operating Systems', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'A+' },
          { name: 'Software Engineering', grade: 'A+' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'A+' },
          { name: 'Cloud Computing', grade: 'A+' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Rohan Patel',
    roll: '21IT103',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'B' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'B+' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'B+' },
          { name: 'Python Programming', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'B' },
          { name: 'Java Programming', grade: 'A' },
          { name: 'Database Systems', grade: 'B+' },
          { name: 'Computer Architecture', grade: 'A' },
          { name: 'Operating Systems', grade: 'RA' },
        ],
        arrears: ['Operating Systems'],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'B+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'B+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A' },
          { name: 'Compiler Design', grade: 'B+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'B+' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Priya Gupta',
    roll: '21IT104',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A+' },
          { name: 'Physics', grade: 'A+' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'A+' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'A' },
          { name: 'Java Programming', grade: 'A+' },
          { name: 'Database Systems', grade: 'A' },
          { name: 'Computer Architecture', grade: 'A+' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'A+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'A' },
          { name: 'Cloud Computing', grade: 'A+' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Arjun Singh',
    roll: '21IT105',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B' },
          { name: 'Physics', grade: 'B+' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'B+' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'B+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'B' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'B+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'RA' },
          { name: 'Java Programming', grade: 'A' },
          { name: 'Database Systems', grade: 'B+' },
          { name: 'Computer Architecture', grade: 'B' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: ['Mathematics III'],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'B+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'B' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'RA' },
        ],
        arrears: ['Discrete Mathematics'],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A' },
          { name: 'Compiler Design', grade: 'B+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'B' },
          { name: 'Mobile App Development', grade: 'A' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Neha Verma',
    roll: '21IT106',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'A+' },
          { name: 'Python Programming', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'A' },
          { name: 'Java Programming', grade: 'A+' },
          { name: 'Database Systems', grade: 'A' },
          { name: 'Computer Architecture', grade: 'A+' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A' },
          { name: 'Computer Networks', grade: 'A+' },
          { name: 'Web Technology', grade: 'A' },
          { name: 'Software Engineering', grade: 'A+' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'A' },
          { name: 'Cloud Computing', grade: 'A+' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Vikram Joshi',
    roll: '21IT107',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'B+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'B+' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'B+' },
          { name: 'Python Programming', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'RA' },
          { name: 'Java Programming', grade: 'B+' },
          { name: 'Database Systems', grade: 'A' },
          { name: 'Computer Architecture', grade: 'B+' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: ['Mathematics III'],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'B+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'B+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'B' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A' },
          { name: 'Compiler Design', grade: 'B+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'B+' },
          { name: 'Mobile App Development', grade: 'A' },
        ],
        arrears: [],
      },
    ],
  },
  {
    name: 'Sanya Mehta',
    roll: '21IT108',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'A+' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'B+' },
          { name: 'Python Programming', grade: 'A+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'A' },
          { name: 'Java Programming', grade: 'A' },
          { name: 'Database Systems', grade: 'A+' },
          { name: 'Computer Architecture', grade: 'A+' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A+' },
          { name: 'Computer Networks', grade: 'A' },
          { name: 'Web Technology', grade: 'A+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A' },
          { name: 'Compiler Design', grade: 'A+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },

  // New Student 2
  {
    name: 'Manav Desai',
    roll: '21IT109',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'B' },
          { name: 'Engineering Graphics', grade: 'B+' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'B+' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'B+' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'B' },
          { name: 'Java Programming', grade: 'A' },
          { name: 'Database Systems', grade: 'B+' },
          { name: 'Computer Architecture', grade: 'A' },
          { name: 'Operating Systems', grade: 'RA' },
        ],
        arrears: ['Operating Systems'],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A' },
          { name: 'Computer Networks', grade: 'B+' },
          { name: 'Web Technology', grade: 'A' },
          { name: 'Software Engineering', grade: 'B' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'B+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A' },
        ],
        arrears: [],
      },
    ],
  },

  // New Student 3
  {
    name: 'Diya Nair',
    roll: '21IT110',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A' },
          { name: 'Physics', grade: 'A+' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 3',
        subjects: [
          { name: 'Mathematics III', grade: 'A' },
          { name: 'Java Programming', grade: 'A+' },
          { name: 'Database Systems', grade: 'A+' },
          { name: 'Computer Architecture', grade: 'A' },
          { name: 'Operating Systems', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 4',
        subjects: [
          { name: 'Design and Analysis of Algorithms', grade: 'A+' },
          { name: 'Computer Networks', grade: 'A+' },
          { name: 'Web Technology', grade: 'A+' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Discrete Mathematics', grade: 'A' },
        ],
        arrears: [],
      },
      {
        sem: 'Semester 5',
        subjects: [
          { name: 'Machine Learning', grade: 'A+' },
          { name: 'Compiler Design', grade: 'A+' },
          { name: 'Cloud Computing', grade: 'A' },
          { name: 'Professional Ethics', grade: 'A' },
          { name: 'Mobile App Development', grade: 'A+' },
        ],
        arrears: [],
      },
    ],
  },
];

const SemesterResults = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 130px)',
        p: 4,
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{ p: 4, width: '100%', maxWidth: 1200 }}>
        {!selectedStudent ? (
          <>
            <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
              Select a Student to View Semester Results
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {students.map((student, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      cursor: 'pointer',
                      backgroundColor: '#e3f2fd',
                      '&:hover': {
                        backgroundColor: '#bbdefb',
                      },
                    }}
                    onClick={() => setSelectedStudent(student)}
                  >
                    <Typography variant="h6">{student.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Roll No: {student.roll}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Box sx={{ mb: 2 }}>
              <Button variant="outlined" onClick={() => setSelectedStudent(null)}>
                ← Back to Students List
              </Button>
            </Box>
            <Typography variant="h5" gutterBottom>
              {selectedStudent.name} - {selectedStudent.roll}
            </Typography>
            {selectedStudent.results.map((sem, i) => (
              <Box
                key={i}
                sx={{
                  mt: 3,
                  p: 3,
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  backgroundColor: '#fafafa',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {sem.sem}
                </Typography>
                <Divider />
                <Grid container spacing={2} mt={1}>
                  {sem.subjects.map((subject, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Paper sx={{ p: 2, backgroundColor: '#fff' }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {subject.name}
                        </Typography>
                        <Typography variant="body2">Grade: {subject.grade}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
                {sem.arrears.length > 0 && (
                  <Box mt={2} sx={{ color: 'red' }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Arrears:
                    </Typography>
                    <ul style={{ margin: 0 }}>
                      {sem.arrears.map((sub, idx) => (
                        <li key={idx}>{sub}</li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Box>
            ))}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default SemesterResults;