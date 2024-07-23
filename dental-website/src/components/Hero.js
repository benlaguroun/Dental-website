import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <Container className="text-center text-white">
        <Row className="align-items-center" style={{ height: '100vh' }}>
          <Col>
            <h1>Welcome to Our Dental Clinic</h1>
            <p>Providing high-quality dental care for your whole family.</p>
            <button className="btn btn-primary">Book an Appointment</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
