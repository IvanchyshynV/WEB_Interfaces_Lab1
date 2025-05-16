import React from 'react';
import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  // Accessing data from props
  const { product, onSelect } = props;

  return (
    <Card className={product.selected ? "border-success" : ""}>
      <Card.Img 
         variant="top" 
        src={product.imgUrl} 
        alt={product.title} 
        style={{ height: '180px', objectFit: 'contain', padding: '10px', backgroundColor: '#f8f9fa' }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button 
          variant={product.selected ? "success" : "outline-success"} 
          onClick={onSelect}
        >
          {product.selected ? "Selected" : "Select"}
        </Button>
      </Card.Body>
      {product.selected && (
        <div className="position-absolute top-0 end-0 p-2">
          <span className="badge bg-success">✓</span>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;