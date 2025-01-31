import React from 'react';


function Services() {
  return (
    <main>
    <section className="services">
    <div className="services-page">
      
      <h1>Our Services</h1>
      <p>We offer a variety of services to help you achieve your goals.</p>

      <div className="services-list">
        <div className="service-item">
          <h2>Electrical Maintenance and Repair</h2>
          <p> Our routine maintenance and repair services ensure that our clients' electrical systems are running safely and efficiently.</p>
        </div>

        <div className="service-item">
          <h2>Solar Panel Installation</h2>
          <p>We help homeowners and businesses harness the power of solar energy with our expert solar panel installation services.</p>
        </div>

        <div className="service-item">
          <h2>Commercial Electrical Services</h2>
          <p> Our team delivers reliable and efficient electrical solutions for businesses, including office buildings, retail stores, and restaurants.</p>
        </div>

        <div className="service-item">
          <h2>Residential Electrical Services</h2>
          <p>We provide comprehensive electrical services for homes, including installations, repairs, and maintenance.</p>
        </div>
      </div>
    </div>
    </section>
    </main>
  );
}

export default Services;