import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProductPage from './components/ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* You can introduce routing here */}
      <HomePage />
      <AboutPage />
      <ContactPage />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
