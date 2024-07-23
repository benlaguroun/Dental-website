import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Product = () => {
  return (
    <Container id="product">
      <h2 className="section-heading">Our Products</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                A short description of product 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                A short description of product 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                A short description of product 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
