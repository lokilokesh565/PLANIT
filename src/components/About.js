import React from 'react';
import './style.css'; // Assuming you are using the same CSS file

const About = () => {
  return (
    <div className="all-content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home" id="logo">
            <img src="/Logo.jpg" alt="planit. Logo" />
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
              <i className="fa-solid fa-bars" style={{ color: 'white', fontSize: '23px' }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse navbarstiky" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/* About Section */}
      <div className="about" id="about">
        <div className="container">
          <div className="heading">About <span>Us</span></div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src="/about.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <h3>Let's celebrate together!</h3>
              <p>
                Plainit is a comprehensive event management platform that simplifies
                organizing various events, from corporate gatherings to personal celebrations. 
                It handles every detail, including venue selection, catering, logistics,
                and entertainment, ensuring a seamless experience for clients.
                <br /><br />
                By taking responsibility for each aspect of the event, Plainit aims to remove
                the stress from event planning, allowing clients to focus on enjoying the experience.
                The team is dedicated to understanding client needs, executing flawless events, and 
                providing exceptional service. With a commitment to quality and efficiency, Plainit
                ensures memorable, well-coordinated events tailored to every client's vision.
              </p>
              <button id="about-btn">Learn More.</button>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}

      {/* Footer */}
      <footer id="footer">
        <div className="footer-logo text-center">
          <img src="/Logo.jpg" alt="Planit Logo" />
        </div>
        <div className="socail-links text-center">
          <a href="/Menu"><i className="fa-brands fa-twitter"></i></a>
          <a href="/Menu"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/Menu"><i className="fa-brands fa-instagram"></i></a>
          <a href="/Menu"><i className="fa-brands fa-youtube"></i></a>
          <a href="/Menu"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
        <div className="credite text-center">
          Designed By <a href="/Menu">Loki</a>
        </div>
        <div className="copyright text-center">
          &copy; Copyright <strong><span>Planit.</span></strong> All Rights Reserved
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default About;
