import React from 'react';
import {Card, Button} from "react-bootstrap";

const ShopCard = (props) => {
  const addItem = () => {
    props.getItem(props.card);
    console.log(props.card);
  }
  
  const removeItem = () => {
    props.removeItem(props.card);
    console.log(props.card);
  }
  
  // Create a function to handle image errors
  const handleImageError = (e) => {
    console.log(`Failed to load image: ${props.card.imgUrl}`);
    e.target.src = "logo192.png"; // Fallback to a known image in your public folder
  }
  
 return (
  <div className="mt-3 col-12 col-sm-6 col-md-4 col-xl-3">
    <Card className="fixed-card">
      <Card.Img 
        variant="top" 
        src={`/${props.card.imgUrl}`} 
        onError={handleImageError}
        alt={props.card.title}
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title>{props.card.title}</Card.Title>
        <Card.Subtitle>{props.card.description}</Card.Subtitle>
        <Card.Text>{props.card.price} UAH</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" onClick={addItem} className="me-2">Add to Cart</Button>
        <Button variant="danger" onClick={removeItem}>-</Button>
        <span className="ms-2">Selected: {props.card.added}</span>
      </Card.Footer>
    </Card>
  </div>
);
};

export default ShopCard;