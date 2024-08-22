import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function ProductsSlide() {
  const products = [
    "Building and Shopface",
    "3D Illuminated Letters and Displays",
    "Reception and Interior",
    "Directional and Wayfinding",
    "Window Graphics and Display",
    "Vehicle Fleet Branding",
    "Retail POS",
    "Truck Lining and Scrolling",
    "Building and Shopface",
    "3D Illuminated Letters and Displays",
    "Reception and Interior",
    "Directional and Wayfinding",
    "Window Graphics and Display",
    "Vehicle Fleet Branding",
    "Retail POS",
    "Truck Lining and Scrolling",
  ];

  return (
    <Container fluid className="products">
      <Row>
        <Col>
          <div className="products-slide">
            {products.map((product, index) => (
              <span key={index}>{product}</span>
            ))}
            {products.map((product, index) => (
              <span key={index}>{product}</span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsSlide;
