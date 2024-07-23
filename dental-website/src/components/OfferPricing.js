import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OfferPricing = () => {
  return (
    <Container id="pricing">
      <h2 className="section-heading">Offer & Pricing</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Text>
                $50/month
              </Card.Text>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Standard Plan</Card.Title>
              <Card.Text>
                $100/month
              </Card.Text>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Premium Plan</Card.Title>
              <Card.Text>
                $150/month
              </Card.Text>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferPricing;
