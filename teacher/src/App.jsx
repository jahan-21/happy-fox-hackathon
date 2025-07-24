import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentSection from './components/DocumentSection';
import InternshipDetails from './components/InternshipDetails';
import StudentProfiles from './components/studentProfiles';
import Header from './components/Header';
import OnlineCourses from './components/OnlineCourses';
import EventParticipation from './components/EventParticipation';
import LeaveApprovals from './components/LeaveApprovals';
import SemesterResults from './components/SemesterResults';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DocumentSection />} />
        <Route path="/documents" element={<DocumentSection />} />
        <Route path="/InternshipDetails" element={<InternshipDetails />} />
        <Route path="/students" element={<StudentProfiles />} />
        <Route path="/online-courses" element={<OnlineCourses />} />
        <Route path="/event-participation" element={<EventParticipation />} />
        <Route path="/leave" element={<LeaveApprovals />} />
        <Route path="/semester-results" element={<SemesterResults />} />
      </Routes>
    </Router>
  );
};

export default App;
