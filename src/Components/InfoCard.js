import React from 'react';
import '../Style/InfoCard.css';
import introImage from "../Assets/intro-image.png"
// Content dictionary
const content = {
  heading: 'Welcome to Harmoni',
  text: `your safe haven for mental wellness and emotional support. Here, you’ll find empathetic guidance, insightful resources, and a nurturing space to express yourself freely. Explore our features, from engaging conversations with our supportive chatbot to journaling your thoughts and experiences. Together, let’s embark on this journey toward emotional well-being, resilience, and peace of mind! `
};

const InfoCard = () => {
  return (
    <div className="info-card">
      <img 
        src={introImage} 
        alt="Mental Wellness" 
        className="info-image" 
      />
      <div className="info-text">
        <h1>{content.heading}</h1>
        <p>{content.text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
