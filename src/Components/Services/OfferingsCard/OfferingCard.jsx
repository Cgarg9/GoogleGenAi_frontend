import React from 'react';
import { Card } from 'antd';

function OfferingCard (props){
  const { title, imageUrl } = props;
  return (
    <Card
      hoverable
      style={{
        width: 240,
        height: 260, // Reduced height for the card
        display: 'flex',
        flexDirection: 'column',
        justifyContent : 'space-between',
        backgroundColor : '#dce8e3'
      }}
      cover={
        <div style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop : '8%' }}>
          <img
            alt="example"
            src={imageUrl}
            style={{ maxWidth: '100%', maxHeight: '100%' , objectFit: 'contain' }}
          />
        </div>
      }
    >
      {/* Replacing Meta tag with a styled p tag */}
      <p style={{
        fontSize: '30px',       // Adjust font size as needed
        fontWeight: '700',      // Bold text for a stronger appearance
        textAlign: 'center',    // Center the text
        margin: 0,              // Remove default margin for p tag
        padding: '10px 0',      // Add padding for spacing
        color: '#333',          // Darker text color for better contrast
      }}>
        {title}
      </p>
    </Card>
  );
}

export default OfferingCard;
