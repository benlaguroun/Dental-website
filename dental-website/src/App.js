import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import OurServices from './components/OurServices';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OfferPricing from './components/OfferPricing';
import './App.css';
import './custom.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurServices />
      <Product />
      <Testimonials />
      <Blog />
      <OfferPricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
