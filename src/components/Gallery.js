import React from 'react';
import './style.css';
const Gallery = () => {
  const galleryImages = [
    'gallery1.jpg',
    'gallery2.jpg',
    'gallery3.jpg',
    'gallery4.jpg',
    'gallery5.jpg',
    'gallery6.jpg',
  ];
  return (
    <div className="all-content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" id="logo">
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
              <i className="fa-solid fa-bars" style={{ color: 'white', fontSize: '23px' }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse navbarstiky" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
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

      {/* Gallery Section */}
      <div className="gallery" id="gallery">
        <div className="container">
          <div className="heading">Our <span>Gallery</span></div>
          <div className="row">
            {galleryImages.map((image, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="gallery-item">
                  <div className="side-image">
                    <img src={image} className="img-fluid" alt={`Gallery item ${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="footer">
        <div className="footer-logo text-center">
          <img src="logo.jpg" alt="Planit Logo" />
        </div>
        <div className="social-links text-center">
          <button aria-label="Twitter" onClick={() => window.open('https://twitter.com', '_blank')}>
            <i className="fa-brands fa-twitter"></i>
          </button>
          <button
            aria-label="Facebook"
            onClick={() => window.open('https://facebook.com', '_blank')}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </button>
          <button
            aria-label="Instagram"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button
            aria-label="YouTube"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            <i className="fa-brands fa-youtube"></i>
          </button>
          <button
            aria-label="Pinterest"
            onClick={() => window.open('https://pinterest.com', '_blank')}
          >
            <i className="fa-brands fa-pinterest-p"></i>
          </button>
        </div>
        <div className="credits text-center">
          Designed By <a href="/about">loki</a>
        </div>
        <div className="copyright text-center">
          &copy; Copyright <strong><span>Planit.</span></strong> All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
