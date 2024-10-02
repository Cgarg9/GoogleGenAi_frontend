import React from 'react';
import OfferingCard from './OfferingCard';

const cardData = [
  {
    title: 'Noira',
    imageUrl: require("../../../Assets/chatbot.png")
  },
  {
    title: 'MindSage',
    imageUrl: require("../../../Assets/mental-health.png"),
  },
  {
    title: 'Diary',
    imageUrl: require("../../../Assets/diary-removebg-preview.png")
  }
];

function MainOfferingCard (){
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Center the cards in the container
      padding: '20px', // Add padding around the container
      gap: '30px', // Space between the cards
      flexWrap: 'wrap', // Allow cards to wrap if there's not enough space
    }}>
      {cardData.map((item, index) => (
        <OfferingCard
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default MainOfferingCard;
