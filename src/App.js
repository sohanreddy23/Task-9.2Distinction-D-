// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobForm from './job_type'; // Rename your existing component
import FindJobs from './FindJobs'; // Import the FindJobs component
import Navbar from './navbar';

function App() {
  return (    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobForm />} />
          <Route path="find-jobs" element={<FindJobs />} />
        </Routes>
        </div>
  );
}

export default App;
