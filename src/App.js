import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobForm from './job_type'; 
import Findjobs from './FindJobs'; 
import Navbar from './navbar';
import PaymentPage from './PaymentPage'; 

function App() {
  return (    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobForm />} />
          <Route path="find-jobs" element={<Findjobs />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        </div>
  );
}

export default App;
