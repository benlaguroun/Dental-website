import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OurServices = () => {
  return (
    <Container id="services">
      <h2 className="section-heading">Our Services</h2>
      <Row>
        <Col md={4}>
          <h4>Service 1</h4>
          <p>Description of service 1.</p>
        </Col>
        <Col md={4}>
          <h4>Service 2</h4>
          <p>Description of service 2.</p>
        </Col>
        <Col md={4}>
          <h4>Service 3</h4>
          <p>Description of service 3.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
