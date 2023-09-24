import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobForm from './job_type'; 
import Findjobs from './FindJobs'; 
import Navbar from './navbar';

function App() {
  return (    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobForm />} />
          <Route path="find-jobs" element={<Findjobs />} />
        </Routes>
        </div>
  );
}

export default App;
