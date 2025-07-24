import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const documents = [
  {
    title: 'Internship Certificate',
    image: '/A.jpg',
  },
  {
    title: 'Online Course Completion Certificate',
    image: '/intern.jpg',
  },
  {
    title: 'Event Participation',
    image: '/event.jpg',
  },
];

const DocumentSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === 'Internship Certificate') {
      navigate('/InternshipDetails');
    } else if (title.includes('Online Course')) {
      navigate('/online-courses');
    } else if (title.includes('Event Participation')) {
      navigate('/event-participation');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {documents.map((doc, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              width: '400px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onClick={() => handleCardClick(doc.title)}
          >
            <Box
              component="img"
              src={doc.image}
              alt={doc.title}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ wordBreak: 'break-word' }}>
                {doc.title}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default DocumentSection;
