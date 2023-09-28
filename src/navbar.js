import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/find-jobs" className="nav-link">
        Find Jobs
      </Link>
      <Link to="/payment" className="nav-link">
        Payment
      </Link>
    </nav>
  );
}

export default Navbar;
