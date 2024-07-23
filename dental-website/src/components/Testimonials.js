import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <h2 className="section-heading">Testimonials</h2>
      <Row>
        <Col md={4}>
          <p>"Great service and friendly staff!"</p>
          <p>- Customer 1</p>
        </Col>
        <Col md={4}>
          <p>"Highly recommend this clinic."</p>
          <p>- Customer 2</p>
        </Col>
        <Col md={4}>
          <p>"Professional and caring environment."</p>
          <p>- Customer 3</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
