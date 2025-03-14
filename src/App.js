import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import Services from './components/Services'; // Import Product component
import About from './components/About'; // Import About component
import Events from './components/Events'; // Import Menu component
import Gallery from './components/Gallery'; // Import Gallery component
import Contact from './components/Contact'; // Import Contact component
import Marriage from './components/Marriage'; // Import Marriage component
import Booking from './components/Booking';
import Login from './components/Login';
import Signup from './components/Signup';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define Routes for different pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/Booking" element={<Booking />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Set default route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
