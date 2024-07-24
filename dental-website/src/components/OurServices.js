import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faSmile, faXRay, faSyringe, faStethoscope, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faTooth, title: 'General Dentistry', description: 'Routine dental check-ups and treatments.' },
  { icon: faSmile, title: 'Cosmetic Dentistry', description: 'Improving the appearance of your smile.' },
  { icon: faXRay, title: 'X-Rays', description: 'Detailed imaging to diagnose dental issues.' },
  { icon: faSyringe, title: 'Oral Surgery', description: 'Surgical procedures for complex dental problems.' },
  { icon: faStethoscope, title: 'Orthodontics', description: 'Straightening teeth and correcting bites.' },
  { icon: faHeartbeat, title: 'Emergency Care', description: 'Immediate assistance for dental emergencies.' },
];

const OurServices = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <p className="text-muted">We offer a variety of dental services to meet your needs.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow hover-shadow h-100 text-center">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary" />
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <div className="mt-auto">
                    <a href="#contact" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
