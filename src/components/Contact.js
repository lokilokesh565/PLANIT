import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here (e.g., sending data to an API)
  };

  return (
    <div className="all-content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html" id="logo">
            <img src="logo.jpg" alt="Planit Logo" />
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
              <i
                className="fa-solid fa-bars"
                style={{ color: 'rgb(216, 112, 15)', fontSize: '23px' }}
              ></i>
            </span>
            </button>
          <div className="collapse navbar-collapse navbarstiky" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
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

      {/* Contact Section */}
      <div className="contact" id="contact">
        <div className="container">
          <div className="heading">
            Contact <span>Us</span>
          </div>
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-6">
              <h4>Get in Touch</h4>
              <p>We’d love to hear from you! Please reach out with any questions or feedback.</p>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> plant.in, Brewtown, USA</li>
                <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                <li><i className="fas fa-envelope"></i> contact@planit.com</li>
              </ul>
            </div>
            {/* Contact Form */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}

      {/* Footer */}
      <footer id="footer">
        <div className="footer-logo text-center">
          <img src="logo.jpg" alt="Planit Logo" />
        </div>
        <div className="socail-links text-center">
          <a href="/Menu"><i className="fa-brands fa-twitter"></i></a>
          <a href="/Menu"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/Menu"><i className="fa-brands fa-instagram"></i></a>
          <a href="/Menu"><i className="fa-brands fa-youtube"></i></a>
          <a href="/Menu"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
        <div className="credite text-center">
          Designed By <a href="/Menu">loki</a>
        </div>
        <div className="copyright text-center">
          &copy; Copyright <strong><span>planit.</span></strong> All Rights Reserved
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Contact;
