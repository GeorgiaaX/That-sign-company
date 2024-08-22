import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalButton from "./ModalButton";

const images = [
  "./images/hero-greatsouthern.jpg",
  "./images/hero-ez-kandy.jpg",
  "./images/hero-kfc.jpg",
  "./images/hero-gsmp.jpg",
  "./images/hero-byd.jpg",
];

export default function Hero(props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Change active image every 5 seconds
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { title, body, lastWord } = props.heading;

  return (
    <Container
      fluid
      className="hero-section p-5 text-center rounded-3 d-flex flex-column align-items-center"
    >
      {images.map((img, index) => (
        <div
          key={img}
          className={`background-image ${
            activeImageIndex === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `
                linear-gradient(rgba(12, 19, 31, 0.5), rgba(12, 19, 31, 0.6)),
                radial-gradient(ellipse at left top, rgba(12, 19, 31, 0.6) 0%, transparent 80%),
                radial-gradient(ellipse at right bottom, rgba(12, 140, 233, 1) 0%, transparent 80%),
                url(${img})
                `,
          }}
        ></div>
      ))}

      <div className="hero-card d-flex flex-column justify-content-center align-items-center">
        <div className="header-logo d-flex justify-content-center align-items-center">
          <img src="./images/logo.png" className="brand-image" alt="logo" />
          <h1 className="brand-name">
            That <b className="bold-word">Sign</b> Company
          </h1>
        </div>
        <div className="hero-headings">
          <Row className="justify-content-start">
            <Col xs={12} className="text-white text-center">
              <h2 className="mb-3 hero-title">
                {title} <b className="hero-text">{lastWord}</b>
              </h2>
              <p className="mb-3 hero-subheading">{body}</p>
              {props.isHomePage && <ModalButton />}
              <div style={{ textAlign: "center" }}>{props.children}</div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
