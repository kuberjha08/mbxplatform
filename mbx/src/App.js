import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Investments from './pages/Investments';
import RealEstate from './pages/RealEstate';
import Career from './pages/Career';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
