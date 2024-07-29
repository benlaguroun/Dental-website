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
import CosmeticDentistry from './pages/CosmeticDentistry';
import Xrays from './pages/Xrays';
import OralSurgery from './pages/OralSurgery';
import Orthodontics from './pages/Orthodontics';
import EmergencyCare from './pages/EmergencyCare';
import BlogPost from './pages/BlogPost';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login'; // Import the Login component
import SocialMedia from './components/SocialMedia';
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
                <SocialMedia />
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
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/x-rays" element={<Xrays />} />
          <Route path="/oral-surgery" element={<OralSurgery />} />
          <Route path="/orthodontics" element={<Orthodontics />} />
          <Route path="/emergency-care" element={<EmergencyCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
