import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
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
      const credits = getCredits(subject.name); // Fixed typo here (was getCredits)
      const gradePoint = getGradePoint(subject.grade);
      totalCredits += credits;
      totalGradePoints += (credits * gradePoint);
    });
  });

  return totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 'N/A';
};

// Get arrears list for a student
const getArrears = (student) => {
  if (!student) return [];
  const arrears = [];
  student.results.forEach(sem => {
    sem.subjects.forEach(subject => {
      if (subject.grade === 'RA') {
        arrears.push({
          semester: sem.sem,
          subject: subject.name,
          credits: getCredits(subject.name)
        });
      }
    });
  });
  return arrears;
};

// Sample student data (simplified for testing)
// ... (keep all the imports and utility functions the same)

// Updated student data with 8 more students (total 10 now)
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
          { name: 'Data Structures', grade: 'RA' },
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
  }
];

// ... (keep the SemesterResults component the same)
const SemesterResults = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]); // Default to first student

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        Semester Results
      </Typography>

      {/* Student selection grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {students.map((student, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: selectedStudent?.roll === student.roll ? '#bbdefb' : '#e3f2fd',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
              onClick={() => setSelectedStudent(student)}
            >
              {getArrears(student).length > 0 && (
                <Chip 
                  label={`${getArrears(student).length} Arrears`} 
                  color="error" 
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                />
              )}
              <Typography variant="h6" fontWeight="bold">
                {student.name}
              </Typography>
              <Typography variant="body2">{student.roll}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                CGPA: {calculateCGPA(student.results)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Selected student details */}
      {selectedStudent && (
        <Box>
          <Typography variant="h5" gutterBottom component="div">
            {selectedStudent.name}'s Results (Roll: {selectedStudent.roll})
          </Typography>

          {/* Overall CGPA */}
          <Paper elevation={2} sx={{ p: 2, mb: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h6" component="div" fontWeight="bold">
              Overall CGPA: {calculateCGPA(selectedStudent.results)}
            </Typography>
          </Paper>

          {/* Arrears list */}
          {getArrears(selectedStudent).length > 0 && (
            <Paper elevation={2} sx={{ p: 2, mb: 3, backgroundColor: '#ffebee' }}>
              <Typography variant="h6" gutterBottom color="error">
                Arrears List
              </Typography>
              <List dense>
                {getArrears(selectedStudent).map((arrear, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={arrear.subject} 
                      secondary={`${arrear.semester} | Credits: ${arrear.credits}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {/* Semester results */}
          {selectedStudent.results.map((sem, semIndex) => (
            <Paper key={semIndex} elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom component="div">
                {sem.sem}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={2}>
                {sem.subjects.map((subject, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Paper 
                      sx={{ 
                        p: 2, 
                        backgroundColor: subject.grade === 'RA' ? '#ffebee' : '#f1f8e9',
                        border: subject.grade === 'RA' ? '1px solid #ffcdd2' : 'none'
                      }}
                    >
                      <Typography fontWeight="bold">{subject.name}</Typography>
                      <Typography>
                        Grade: 
                        <span style={{ 
                          color: subject.grade === 'RA' ? 'red' : 'inherit',
                          fontWeight: subject.grade === 'RA' ? 'bold' : 'normal'
                        }}>
                          {' ' + subject.grade}
                        </span>
                      </Typography>
                      <Typography>Credits: {getCredits(subject.name)}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              
              {/* Semester GPA */}
              <Paper elevation={0} sx={{ mt: 2, p: 2, backgroundColor: '#e3f2fd' }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Semester GPA: {calculateSGPA(sem.subjects)}
                </Typography>
              </Paper>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default SemesterResults;