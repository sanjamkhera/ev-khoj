import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header () {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/Home" className="nav-item"> Gadhi-Khoj </Link>
            <Link to="/Car" className="nav-item"> Car </Link>
            <Link to="/Scooter" className="nav-item"> Scooter </Link>
            <Link to="/Electric" className="nav-item"> Electric </Link>
            <Link to="/Compare" className="nav-item"> Compare </Link>
          </div>
          <div className="login-menu">
            <Link to="/" className="nav-item"> Login </Link>
            <Link to="/about" className="nav-item"> Register Now </Link>
            <Link to="/contact" className="nav-item"> Post Ad </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
