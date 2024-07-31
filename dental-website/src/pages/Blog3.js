import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faFillDrip, faCrown, faXRay, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Blog3.css'; // Custom CSS file for Blog3
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog3 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog3-container">
        <Container className="blog-post-container my-5">
          <Row>
            <Col>
              <h1 className="text-center blog-title">Understanding Different Types of Dental Treatments</h1>
              {/* Removed the image */}
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Blog content */}
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
                </div>
                <p>
                  Dental treatments vary widely depending on the issue being addressed. From preventive care to complex restorative procedures, understanding the different types can help you make informed decisions about your oral health. Below are some common dental treatments and what they entail.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faFillDrip} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>1. Cleanings:</strong> Routine cleanings are essential for maintaining good oral hygiene. During a cleaning, dental hygienists remove plaque and tartar buildup from the teeth and gums, which can prevent cavities, gum disease, and other oral issues. It's recommended to have a cleaning at least twice a year.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faFillDrip} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>2. Fillings:</strong> When a cavity forms, a filling is used to restore the tooth's function and integrity. There are several types of fillings, including composite resin (tooth-colored), amalgam (silver), gold, and porcelain. The choice of material depends on the location of the cavity, the patient's preference, and the dentist's recommendation.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faCrown} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>3. Crowns:</strong> Crowns are caps placed over damaged or weakened teeth to restore their shape, size, and strength. They can be made from various materials, including porcelain, ceramic, metal, or a combination. Crowns are often used after a root canal, to cover large fillings, or to protect cracked teeth.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faXRay} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>4. X-rays:</strong> X-rays are an essential diagnostic tool in dentistry. They help dentists detect issues that aren't visible to the naked eye, such as cavities between teeth, bone loss, or impacted teeth. Regular X-rays can help monitor the health of your teeth and gums over time.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>5. Orthodontic Treatments:</strong> Orthodontics involves the correction of teeth and jaw alignment issues using braces, aligners, or other appliances. These treatments improve not only the appearance of the teeth but also their function and long-term health.
                </p>
              </div>
              <div className="blog-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
                </div>
                <p>
                  <strong>6. Cosmetic Dentistry:</strong> Cosmetic dentistry focuses on enhancing the appearance of the smile. This can include teeth whitening, veneers, bonding, and contouring. While these treatments are primarily aesthetic, they can also improve the overall health and function of the teeth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog3;
