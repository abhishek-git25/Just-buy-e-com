import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const { pathname } = useLocation();
  return (
    <div>
      <Card style={{ width: "18rem" }} className="border-0 shadow-sm">
        <Card.Img
          variant="top"
          src="https://tse4.mm.bing.net/th?id=OIP.5vIb407K0DhXRE7L83enDgHaFu&pid=Api&P=0&h=220"
          style={{ width: "200px" }}
          height={200}
          className="mx-auto"
        />
        <Card.Body>
          <Card.Title>Gucci Bag</Card.Title>
          <Card.Text className="d-flex align-items-center justify-content-between">
            <div>₹2000</div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="secondary"
                className="rounded-circle"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button
                variant="secondary"
                className="rounded-circle"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </Card.Text>
          {pathname !== "/cart" ? (
            <Button variant="primary d-flex justify-content-center mx-auto w-100 text-center">
              Add To Cart
            </Button>
          ) : (
            <Button variant="danger d-flex justify-content-center mx-auto w-100 text-center">
              Remove from Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
