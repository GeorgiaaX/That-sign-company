import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomLink from "../components/CustomLink";

function ProductsServices() {
  return (
    <>
      <h2 className="services-title">
        Signage Products and <b className="bold-word">Services</b>
      </h2>
      <p className="text-center mb-3 text-muted about-text mx-1">
        Let us help you create the perfect signage for your business from our
        range of signage products and services.
      </p>
      <Container className="products-services-section">
        <Container className="product-container">
          <Row className="mt-4">
            {renderProductColumn({
              iconClass: "fas fa-building",
              title: "Building & Shopface Signs",
              description: "Fascia Signs / 3D Lettering / Lightboxes / Pylons",
              link: "building-shopface",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-lightbulb",
              title: "3D Illuminated Letters & Displays",
              description: "Fabricated Letters / Lightboxes / 3D Signage",
              link: "illuminated-designs",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-store",
              title: "Reception & Interior Signage",
              description:
                "Wall Graphics / 3D Lettering & Signs / Illuminated Signs & Lettering",
              link: "reception-interior",
              bordered: false,
            })}
            {renderProductColumn({
              iconClass: "fas fa-sign-hanging",
              title: "Structural Signage",
              description:
                "New Structures & Framework / Existing Structures / Freestanding & Architectural Signage",
              link: "structural-signage",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-diamond-turn-right",
              title: "Directional & Wayfinding Signs",
              description: "Directional Pylons / Wayfinding Signage",
              link: "directional-wayfinding",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-tv",
              title: "Window Signage & Window Frosting",
              description:
                "Window Frosting / One Way Vision / Privacy Film / Printed Vinyl Graphics / Cut Vinyl Lettering",
              link: "window-graphics",
              bordered: false,
            })}
            {renderProductColumn({
              iconClass: "fas fa-car-side",
              title: "Vehicle Branding & Car Wrapping",
              description:
                "Vehicle Wraps / Magnetic Vehicle Signs / Vehicle Branding",
              link: "vehicle-branding",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-bag-shopping",
              title: "Retail POS Signs",
              description:
                "A Frames / Pull Up Banners / Stickers / Shop Hoardings / Banners / Flags / Counter Signs",
              link: "retail-pos",
              bordered: true,
            })}
            {renderProductColumn({
              iconClass: "fas fa-truck",
              title: "Truck Lining & Scrolling",
              description:
                "Truck & Trailer Lining & Scrolling / Printed Vinyl Graphics / Cut Vinyl Lettering",
              link: "truck-lining",
              bordered: false,
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

function renderProductColumn({
  iconClass,
  title,
  description,
  link,
  bordered = false,
}) {
  return (
    <Col xl={4} lg={6} md={6} sm={12}>
      <div
        className="service-tile"
        style={{
          borderRight: bordered ? "2px solid #0C8CE9" : "none",
          paddingRight: "30px",
        }}
      >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className={`product-icons ${iconClass} fa-3x`}></i>
              <br />
              <h6>{title}</h6>
            </div>
            <div className="flip-card-back">
              <i className={`${iconClass} fa-3x flip-back-icons`}></i>
              <p>{description}</p>
              <br />
              <CustomLink to={link}>
                <Button variant="outline-light">Learn More</Button>
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProductsServices;
