import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './OurServices.css';
import Image1 from '../images/OS-1.jpg';
import Image2 from '../images/OS-2.jpg';
import Image3 from '../images/OS-3.jpg';

const services = [
  {
    imgSrc: Image1,
    title: 'General Dentistry',
    description: 'Comprehensive dental exams and cleanings for a healthy smile.'
  },
  {
    imgSrc: Image2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our advanced cosmetic dental treatments.'
  },
  {
    imgSrc: Image3,
    title: 'Orthodontics',
    description: 'Straighten your teeth with our modern orthodontic solutions.'
  }
];

const OurServices = () => {
  return (
    <Container className="our-services">
      <h2 className="text-center my-5">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="service-card" style={{ backgroundImage: `url(${service.imgSrc})` }}>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" href="#services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;
