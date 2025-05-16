import React, { useState } from 'react';
import { Card, Button, Badge } from "react-bootstrap";

const ShopCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Card 
      className={isSelected ? "border-primary" : ""} 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="position-relative">
        <Card.Img variant="top" src={props.card.image} alt={props.card.title} />
        {isSelected && (
          <Badge 
            bg="primary" 
            className="position-absolute top-0 end-0 m-2"
          >
            Selected
          </Badge>
        )}
      </div>
      <Card.Body>
        <Card.Title>{props.card.title}</Card.Title>
        <Card.Text>
          {props.card.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <strong>${props.card.price}</strong>
          <Button variant="outline-primary">View Details</Button>
        </div>
        {props.otherval && (
          <small className="text-muted mt-2 d-block">{props.otherval}</small>
        )}
      </Card.Body>
    </Card>
  );
};

export default ShopCard;