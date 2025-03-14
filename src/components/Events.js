import React from "react";
import { Link } from "react-router-dom"; // to handle navigation in React

function Menu() {
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
              <i className="fa-solid fa-bars" style={{ color: "white", fontSize: "23px" }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse navbarstiky" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Services">Services</Link>
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

      {/* Menu Section */}
      <div className="menu" id="menu">
        <div className="container">
          <div className="heading">Our <span>Services</span></div>
          <div className="row">
            {/* Menu Item 1 */}
            <div className="col-md-4 mb-4">
              <div className="menu-item">
                <div className="side-image">
                  <img src="wedding.jpg" className="img-fluid" alt="wedding" />
                  <h4>Wedding Planning</h4>
                  <p>Making your dream wedding come true with custom planning and unforgettable experiences.</p>
                  <button id="btn"><Link to="/Marriage">View Event</Link></button>
                </div>
              </div>
            </div>
            {/* Menu Item 2 */}
            <div className="col-md-4 mb-4">
              <div className="menu-item">
                <img src="corporate.jpg" className="img-fluid" alt="corporate events" />
                <h4>Corporate Events</h4>
                <p>From conferences to team-building retreats, we cover all corporate event needs.</p>
                <button id="btn"><Link to="/Marriage">View Event</Link></button>
              </div>
            </div>
            {/* Menu Item 3 */}
            <div className="col-md-4 mb-4">
              <div className="menu-item">
                <img src="birthday.jpg" className="img-fluid" alt="birthday parties" />
                <h4>Birthday Parties</h4>
                <p>Celebrating each milestone with personalized expert coordination.</p>
                <button id="btn"><Link to="/Marriage">View Event</Link></button>
              </div>
            </div>
            {/* Additional menu items can be added in similar blocks */}
          </div>
        </div>
      </div>
      {/* Menu Section */}

      {/* Footer */}
      <footer id="footer">
        <div className="footer-logo text-center">
          <img src="logo.jpg" alt="planit" />
        </div>
        <div className="socail-links text-center">
          <a href="/Home"><i className="fa-brands fa-twitter"></i></a>
          <a href="#/Home"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/Home"><i className="fa-brands fa-instagram"></i></a>
          <a href="/Home"><i className="fa-brands fa-youtube"></i></a>
          <a href="/Home"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
        <div className="credite text-center">
          Designed By <a href="/Home">loki</a>
        </div>
        <div className="copyright text-center">
          &copy; Copyright <strong><span>Planit</span></strong> All Rights Reserved
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Menu;
