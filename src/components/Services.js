import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./style.css"; // Import CSS for styling

const Product = () => {
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
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Events">Events</Link>
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

      {/* Product Section */}
      <div className="products" id="products">
        <div className="container">
          <div className="heading">Our <span>Events</span></div>
          <div className="row">
            {/* Product Item 1 */}
            <div className="col-md-4 mb-4">
              <div className="product-item">
                <div className="side-image">
                  <img src="catering.jpg" className="img-fluid" alt="Catering" />
                  <h4>Food</h4>
                  <p>Good food is the foundation of genuine happiness</p>
                  <button id="btn">
                    <Link to="/marriage">View Event</Link>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className="col-md-4 mb-4">
              <div className="product-item">
                <div className="side-image">
                  <img src="dj.jpg" className="img-fluid" alt="DJ" />
                  <h4>Party Night</h4>
                  <p>Music - makes the world go around</p>
                  <button id="btn">
                    <Link to="/marriage">View Event</Link>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Item 3 */}
            <div className="col-md-4 mb-4">
              <div className="product-item">
                <div className="side-image">
                  <img src="/decoration.jpg" className="img-fluid" alt="Decoration" />
                  <h4>Decors</h4>
                  <p>Creating Sweet Memories with Cute Designs.</p>
                  <button id="btn">
                    <Link to="/marriage">View Event</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Section */}

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

export default Product;
