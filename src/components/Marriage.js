import React, { useState } from 'react';
import './style.css';

const MarriageServices = () => {
  const [showForm, setShowForm] = useState(false);
  const [locationModal, setLocationModal] = useState({ show: false, address: '', mapLink: '' });
  const [events, setEvents] = useState([
    {
      image: 'manager.jpg',
      name: 'Event manager 1',
      description: 'Our professional wedding planning service offers personalized decor, catering, and music to make your day unforgettable.',
      cost: '$5,000 - $20,000',
      paymentMethods: 'Credit Card, PayPal, Bank Transfer',
      contact: {
        phone: '+91 8001234567',
        email: 'manager1@eventservice.com',
        address: '123 Wedding Ave, Cityville, Hyderabad',
        website: 'https://eventmanager1.com',
      },
    },
    {
      image: 'manager.jpg',
      name: 'Event manager 2',
      description: 'Enhance your venue with custom decorations that reflect your unique style and wedding theme.',
      cost: '$2,000 - $8,000',
      paymentMethods: 'Credit Card, Bank Transfer',
      contact: {
        phone: '+91 8002345678',
        email: 'manager2@eventservice.com',
        address: '456 Decoration St, Design City, Hyderabad',
        website: 'https://eventmanager2.com',
      },
    },
    // Add other event objects here...
  ]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      image: e.target.image.value,
      name: e.target.name.value,
      description: e.target.description.value,
      cost: e.target.cost.value,
      paymentMethods: e.target.paymentMethods.value,
      contact: {
        phone: e.target.phone.value,
        email: e.target.email.value,
        address: e.target.address.value,
        website: e.target.website.value,
      },
    };
    setEvents([...events, newEvent]);
    toggleForm();
  };

  const openLocationModal = (address) => {
    const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    setLocationModal({ show: true, address, mapLink });
  };

  const closeLocationModal = () => {
    setLocationModal({ show: false, address: '', mapLink: '' });
  };

  return (
    <div className="all-content">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Our Event Partner Profiles</h1>
      <div id="event-container">
        {events.map((event, index) => (
          <div className="event-profile" key={index}>
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Cost:</strong> {event.cost}</p>
              <p><strong>Payment Methods:</strong> {event.paymentMethods}</p>
              <p><strong>Phone:</strong> {event.contact.phone}</p>
              <p><strong>Email:</strong> {event.contact.email}</p>
              <p>
                <strong>Address:</strong> {event.contact.address}
                <button onClick={() => openLocationModal(event.contact.address)} style={{ marginLeft: '10px' }}>
                  View on Map
                </button>
              </p>
              <p><strong>Website:</strong> <a href={event.contact.website} target="_blank" rel="noreferrer">{event.contact.website}</a></p>
              <button id="btn"><a href="/Booking">Select</a></button>
            </div>
          </div>
        ))}
      </div>

      {locationModal.show && (
        <div className="location-modal">
          <div className="modal-content">
            <h2>Location</h2>
            <p><strong>Address:</strong> {locationModal.address}</p>
            <p>
              <strong>View on Map:</strong>{' '}
              <a href={locationModal.mapLink} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </p>
            <button onClick={closeLocationModal}>Close</button>
          </div>
        </div>
      )}

      <button onClick={toggleForm}>Add New Event</button>
      {showForm && (
        <form id="event-form" onSubmit={addEvent}>
          <label>Image URL:</label>
          <input type="text" name="image" required />

          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Description:</label>
          <textarea name="description" required></textarea>

          <label>Cost:</label>
          <input type="text" name="cost" required />

          <label>Payment Methods (comma-separated):</label>
          <input type="text" name="paymentMethods" required />

          <label>Phone:</label>
          <input type="text" name="phone" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Address:</label>
          <input type="text" name="address" required />

          <label>Website:</label>
          <input type="url" name="website" required />

          <button type="submit">Add Event</button>
        </form>
      )}

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
    </div>
  );
};

export default MarriageServices;
