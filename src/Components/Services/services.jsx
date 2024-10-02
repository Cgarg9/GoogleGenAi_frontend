import React from 'react';
import "./services.css";
import MainOfferingCard from "./OfferingsCard/MainOfferingCard";

function Services() {
  
  return (

    <div className="services-container">
      <h1 className="services-title">Our Healthcare Offerings</h1>
      <p className="services-description">
      At Harmoni, we are dedicated to fostering mental wellness through our innovative offerings. Our platform provides a compassionate chatbot for real-time emotional support, a diary feature for self-reflection and personal growth, and curated resources to guide you on your journey. Together, we aim to empower you with the tools and insights needed to enhance your emotional health and overall well-being.
      </p>
      <MainOfferingCard/>
    </div>
  );
}

export default Services;