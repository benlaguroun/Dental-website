import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="hero">
      <Row className="align-items-center text-center">
        <Col>
          <h1>Welcome to Our Dental Clinic</h1>
          <p>Providing high-quality dental care for your whole family.</p>
          <button className="btn btn-primary">Book an Appointment</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
