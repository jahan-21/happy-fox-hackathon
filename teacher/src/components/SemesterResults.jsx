import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Container,
  Divider,
} from '@mui/material';

// Grade to point mapping
const getGradePoint = (grade) => {
  switch (grade) {
    case 'O': return 10;
    case 'A+': return 9;
    case 'A': return 8;
    case 'B+': return 7;
    case 'B': return 6;
    case 'RA': return 0;
    default: return 0;
  }
};

// Subject credit mapping
const getCredits = (subjectName) => {
  const creditMap = {
    'Mathematics I': 4,
    'Physics': 3,
    'Programming in C': 3,
    'Engineering Graphics': 4,
    'EVS': 3,
    'Mathematics II': 4,
    'Chemistry': 3,
    'Data Structures': 3,
    'Digital Logic': 3,
    'Python Programming': 3,
    'Mathematics III': 4,
    'Java Programming': 3,
    'Database Systems': 3,
    'Computer Architecture': 3,
    'Operating Systems': 3,
    'Design and Analysis of Algorithms': 4,
    'Computer Networks': 3,
    'Web Technology': 3,
    'Software Engineering': 3,
    'Discrete Mathematics': 4,
    'Machine Learning': 3,
    'Compiler Design': 4,
    'Cloud Computing': 3,
    'Professional Ethics': 2,
    'Mobile App Development': 3
  };
  return creditMap[subjectName] || 3;
};

// SGPA calculator
const calculateSGPA = (subjects) => {
  let totalCredits = 0;
  let totalGradePoints = 0;

  subjects.forEach(subject => {
    const credits = getCredits(subject.name);
    const gradePoint = getGradePoint(subject.grade);
    totalCredits += credits;
    totalGradePoints += (credits * gradePoint);
  });

  return totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 'N/A';
};

// CGPA calculator
const calculateCGPA = (results) => {
  let totalCredits = 0;
  let totalGradePoints = 0;

  results.forEach(sem => {
    sem.subjects.forEach(subject => {
      const credits = getCredits(subject.name);
      const gradePoint = getGradePoint(subject.grade);
      totalCredits += credits;
      totalGradePoints += (credits * gradePoint);
    });
  });

  return totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 'N/A';
};

// Sample student data
const students = [
  {
    name: 'Aarav Sharma',
    roll: '21IT101',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'O' },
          { name: 'Physics', grade: 'A+' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'B+' },
          { name: 'EVS', grade: 'O' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'A+' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'O' }
        ]
      }
    ]
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
          { name: 'Programming in C', grade: 'B+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B+' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'B+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'O' },
          { name: 'Python Programming', grade: 'A' }
        ]
      }
    ]
  },
  {
    name: 'Ritika Das',
    roll: '21IT103',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B+' },
          { name: 'Physics', grade: 'B' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'O' },
          { name: 'EVS', grade: 'A' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'O' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A' }
        ]
      }
    ]
  },
  {
    name: 'Vikram Raj',
    roll: '21IT104',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A' },
          { name: 'Physics', grade: 'RA' },
          { name: 'Programming in C', grade: 'B' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B+' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'B' },
          { name: 'Data Structures', grade: 'B+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A' }
        ]
      }
    ]
  },
  {
    name: 'Sneha Nair',
    roll: '21IT105',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'O' },
          { name: 'Physics', grade: 'O' },
          { name: 'Programming in C', grade: 'O' },
          { name: 'Engineering Graphics', grade: 'O' },
          { name: 'EVS', grade: 'O' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'O' },
          { name: 'Chemistry', grade: 'O' },
          { name: 'Data Structures', grade: 'O' },
          { name: 'Digital Logic', grade: 'O' },
          { name: 'Python Programming', grade: 'O' }
        ]
      }
    ]
  },
  {
    name: 'Harsh Verma',
    roll: '21IT106',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'A+' },
          { name: 'Data Structures', grade: 'B+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A' }
        ]
      }
    ]
  },
  // New students added below
  {
    name: 'Priya Patel',
    roll: '21IT107',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A+' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'B+' },
          { name: 'Engineering Graphics', grade: 'A+' },
          { name: 'EVS', grade: 'O' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'B+' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'A+' },
          { name: 'Python Programming', grade: 'B+' }
        ]
      }
    ]
  },
  {
    name: 'Rahul Mehta',
    roll: '21IT108',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'O' },
          { name: 'Physics', grade: 'A+' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'B' },
          { name: 'EVS', grade: 'A+' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'B+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'O' }
        ]
      }
    ]
  },
  {
    name: 'Ananya Gupta',
    roll: '21IT109',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'B' },
          { name: 'Physics', grade: 'B+' },
          { name: 'Programming in C', grade: 'A' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'B+' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A' },
          { name: 'Chemistry', grade: 'A+' },
          { name: 'Data Structures', grade: 'O' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'A+' }
        ]
      }
    ]
  },
  {
    name: 'Arjun Singh',
    roll: '21IT110',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'A' },
          { name: 'Physics', grade: 'A' },
          { name: 'Programming in C', grade: 'B+' },
          { name: 'Engineering Graphics', grade: 'RA' },
          { name: 'EVS', grade: 'A+' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'B+' },
          { name: 'Chemistry', grade: 'A' },
          { name: 'Data Structures', grade: 'A' },
          { name: 'Digital Logic', grade: 'B+' },
          { name: 'Python Programming', grade: 'A' }
        ]
      }
    ]
  },
  {
    name: 'Ishita Banerjee',
    roll: '21IT111',
    results: [
      {
        sem: 'Semester 1',
        subjects: [
          { name: 'Mathematics I', grade: 'O' },
          { name: 'Physics', grade: 'O' },
          { name: 'Programming in C', grade: 'A+' },
          { name: 'Engineering Graphics', grade: 'A' },
          { name: 'EVS', grade: 'O' }
        ]
      },
      {
        sem: 'Semester 2',
        subjects: [
          { name: 'Mathematics II', grade: 'A+' },
          { name: 'Chemistry', grade: 'O' },
          { name: 'Data Structures', grade: 'A+' },
          { name: 'Digital Logic', grade: 'A' },
          { name: 'Python Programming', grade: 'O' }
        ]
      }
    ]
  }
];

const SemesterResults = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Semester Results
      </Typography>

      {/* Student selection */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {students.map((student, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: selectedStudent?.roll === student.roll ? '#bbdefb' : '#e3f2fd',
                cursor: 'pointer',
                textAlign: 'center',
              }}
              onClick={() => setSelectedStudent(student)}
            >
              <Typography variant="h6" fontWeight="bold">
                {student.name}
              </Typography>
              <Typography variant="body2">{student.roll}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Student results */}
      {selectedStudent && (
        <Box>
          <Typography variant="h5" gutterBottom>
            {selectedStudent.name}'s Results
          </Typography>

          {/* CGPA Box */}
          <Box sx={{ mb: 3, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Overall CGPA: {calculateCGPA(selectedStudent.results)}
            </Typography>
          </Box>

          {selectedStudent.results.map((sem, semIndex) => (
            <Paper key={semIndex} elevation={2} sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>{sem.sem}</Typography>
              <Divider sx={{ mb: 1 }} />
              <Grid container spacing={2}>
                {sem.subjects.map((subject, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Paper sx={{ p: 2, backgroundColor: '#f1f8e9' }}>
                      <Typography fontWeight="bold">{subject.name}</Typography>
                      <Typography>Grade: {subject.grade}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              {/* SGPA for this semester */}
              <Box sx={{ mt: 2, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Semester GPA: {calculateSGPA(sem.subjects)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default SemesterResults;