import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import OurServices from './components/OurServices';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OfferPricing from './components/OfferPricing';
import GeneralDentistry from './pages/GeneralDentistry';
import './App.css';
import './custom.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <OurServices />
                <Product />
                <Testimonials />
                <Blog />
                <OfferPricing />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
