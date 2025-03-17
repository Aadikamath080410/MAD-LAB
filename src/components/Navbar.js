import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/product" className="navbar-link">Product</Link></li>
        <li className="navbar-item"><Link to="/cart" className="navbar-link">Cart</Link></li>
        <li className="navbar-item"><Link to="/billing" className="navbar-link">Billing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;