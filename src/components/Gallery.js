import React, { useState, useRef } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";

export default function Gallery({ images, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 16;
  const lastImageIndex = currentPage * imagesPerPage;
  const firstImageIndex = lastImageIndex - imagesPerPage;
  const currentImages = images.slice(firstImageIndex, lastImageIndex);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Create a ref for the gallery title
  const galleryTitleRef = useRef(null);

  // Function to handle page change and scroll to the gallery title
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (galleryTitleRef.current) {
      galleryTitleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    const isActive = number === currentPage;
    items.push(
      <Pagination.Item
        key={number}
        active={isActive}
        onClick={() => handlePageChange(number)}
        activeLabel={isActive ? "" : undefined}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <h2 className="mb-5 text-center gallery-title" ref={galleryTitleRef}>
        {title || "Gallery"}
      </h2>
      <Row>
        {currentImages.map((image, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
            <div className="gallery-image-container">
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="gallery-image"
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-2">
        <Pagination className="custom-pagination">{items}</Pagination>
      </div>
    </Container>
  );
}
