import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/Car';
import ContactPage from './components/Scooter';
import ProductPage from './components/Electric';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;