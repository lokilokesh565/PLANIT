import React, { useState } from 'react';
import './style.css'; // Assuming you have the same CSS styles




const Booking = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [advancePercentage, setAdvancePercentage] = useState(0);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiPin, setUpiPin] = useState('');

  const handleBooking = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmBooking = () => {
    setShowConfirmationPopup(false);
    setShowPaymentPopup(true);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    if (paymentMethod === 'upi' && !upiPin) {
      alert('Please enter your UPI PIN to proceed.');
      return;
    }
    alert(`Payment of $${(advancePercentage / 100) * totalAmount} via ${paymentMethod} is successful!`);
    closePopups();
  };

  const closePopups = () => {
    setShowConfirmationPopup(false);
    setShowPaymentPopup(false);
  };

  const calculateAdvanceAmount = () => (advancePercentage / 100) * totalAmount;
  const calculateRemainingBalance = () => totalAmount - calculateAdvanceAmount();

  return (
    <div className="booking-container">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home" id="logo">
            <img src="logo.jpg" alt="Planit. Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>

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

      <div className="booking-page">
        <h2>Book Your Event</h2>
        <label>
          Total Event Amount:
          <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} placeholder="Enter total amount" />
        </label>

        <label>
          Advance Payment (%):
          <input type="number" value={advancePercentage} onChange={(e) => setAdvancePercentage(e.target.value)} placeholder="Enter advance payment %" />
        </label>

        <button onClick={handleBooking}>Book Now</button>
      </div>

      {showConfirmationPopup && (
        <div className="popup-overlay">
          <div className="confirmation-popup">
            <h3>Confirm Your Booking</h3>
            <p>Total Amount: ${totalAmount}</p>
            <p>Advance Payment: ${calculateAdvanceAmount().toFixed(2)}</p>
            <p>Remaining Balance: ${calculateRemainingBalance().toFixed(2)}</p>
            <button onClick={handleConfirmBooking}>Confirm</button>
            <button className="cancel-button" onClick={closePopups}>Cancel</button>
          </div>
        </div>
      )}

      {showPaymentPopup && (
        <div className="popup-overlay">
          <div className="payment-popup">
            <h3>Enter Payment Details</h3>
            <p>Advance Amount: <span>${calculateAdvanceAmount().toFixed(2)}</span></p>

            <label>
              Payment Method:
              <select className="payment-select" value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="upi">UPI</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </label>

            {paymentMethod === 'upi' && (
              <label>
                UPI PIN:
                <input type="password" value={upiPin} onChange={(e) => setUpiPin(e.target.value)} placeholder="Enter UPI PIN" maxLength="6" />
              </label>
            )}

            <button onClick={handlePayment}>Pay</button>
            <button className="cancel-button" onClick={closePopups}>Cancel</button>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default Booking;
