import React from "react";
import { Container, Image } from "react-bootstrap";

export default function GallerySlide({ images }) {
  return (
    <Container fluid className="gallery-container">
      <div className="gallery-slide">
        {images.map((image, index) => (
          <Image src={image} alt={`Gallery Image ${index}`} key={index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={`Gallery Image ${index}`} key={index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={`Gallery Image ${index}`} key={index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={`Gallery Image ${index}`} key={index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={`Gallery Image ${index}`} key={index} />
        ))}
      </div>
    </Container>
  );
}
