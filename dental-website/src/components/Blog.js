import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container id="blog">
      <h2 className="section-heading">Blog</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Blog Post 1</Card.Title>
              <Card.Text>
                A short description of the first blog post.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Blog Post 2</Card.Title>
              <Card.Text>
                A short description of the second blog post.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Blog Post 3</Card.Title>
              <Card.Text>
                A short description of the third blog post.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
