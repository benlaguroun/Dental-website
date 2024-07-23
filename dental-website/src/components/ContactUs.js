import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container id="contact">
      <h2 className="section-heading">Contact Us</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Address</h4>
          <p>123 Dental Street, City, Country</p>
          <h4>Phone</h4>
          <p>+123 456 7890</p>
          <h4>Email</h4>
          <p>info@dentalclinic.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
