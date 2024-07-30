import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faFillDrip, faCrown, faXRay, faSmile } from '@fortawesome/free-solid-svg-icons';
import './BlogPost.css';
import blog3Image from '../images/blog3.jpg';

const Blog3 = () => {
  return (
    <Container className="blog-post-container my-5">
      <Row>
        <Col>
          <img src={blog3Image} alt="Understanding Different Types of Dental Treatments" className="img-fluid mb-4" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Understanding Different Types of Dental Treatments</h1>
          <p>
            <FontAwesomeIcon icon={faTooth} className="mr-2" />
            Dental treatments vary widely depending on the issue being addressed. Here are some common types of dental treatments:
          </p>
          <p>
            <FontAwesomeIcon icon={faFillDrip} className="mr-2" />
            1. Cleanings: Routine cleanings remove plaque and tartar buildup, helping prevent cavities and gum disease.
          </p>
          <p>
            <FontAwesomeIcon icon={faCrown} className="mr-2" />
            2. Fillings: Used to treat cavities, fillings can be made of composite resin, amalgam, gold, or porcelain.
          </p>
          <p>
            <FontAwesomeIcon icon={faXRay} className="mr-2" />
            3. Crowns: A crown is a cap placed over a damaged tooth to restore its shape, size, and strength.
          </p>
          <p>
            <FontAwesomeIcon icon={faSmile} className="mr-2" />
            Each treatment has specific benefits and uses. Consult with your dentist to determine the best course of action for your oral health needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog3;
