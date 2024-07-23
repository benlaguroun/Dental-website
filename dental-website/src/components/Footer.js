import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Follow us on:</p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
