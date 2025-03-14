import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Assuming you have a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="all-content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" id="logo">
            <img src="logo.jpg" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <FontAwesomeIcon icon={faBars} style={{ color: 'rgb(213, 26, 26)', fontSize: '23px' }} />
            </span>
          </button>
          <div className="collapse navbar-collapse navbarstiky" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <div className="nav-buttons">
                <button className="login-button" onClick={() => navigate('/login')}>
                  Login
                </button>
                <button className="signup-button" onClick={() => navigate('/signup')}>
                  Signup
                </button>
              </div>

            </form>
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/* Home Section */}
      <section id="home">
        <div className="content">
          <h3>Your Events, Our Expertise <br />PLANIT</h3>
          <p>Bringing events to life with unforgettable moments.</p>
          <button id="btn">
            <Link to="/menu">View Event</Link>
          </button>
        </div>
      </section>
      {/* Home Section */}
    </div>
  );
};

export default Home;



