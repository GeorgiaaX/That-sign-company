import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductDetail({
  firstPhrase,
  secondPhrase,
  descriptionFirst,
  descriptionSecond,
  buttonLink,
  buttonTitle,
}) {
  const [showFirstPhrase, setShowFirstPhrase] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstPhrase((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const boldFirstWord = (phrase) => {
    const words = phrase.split(" ");
    return (
      <>
        <span className="bold-word">{words[0]}</span> {words.slice(1).join(" ")}
      </>
    );
  };

  return (
    <Container
      className="my-4 d-flex align-items-center justify-content-center product-detail-container"
      style={{ minHeight: "45vh" }}
    >
      <Row className="justify-content-center">
        <Col md={8} className="text-center mb-3">
          <div className="phrase-container mb-3">
            <h2 className={`phrase ${showFirstPhrase ? "show" : "hide"}`}>
              {boldFirstWord(firstPhrase)}
            </h2>
            <h2 className={`phrase ${!showFirstPhrase ? "show" : "hide"}`}>
              {boldFirstWord(secondPhrase)}
            </h2>
          </div>
          <div className="detailed-description mt-3">
            <div className="col d-flex align-items-center">
              <i className="fa-solid fa-signs-post fa-2x mr-5 product-icons"></i>
              <p className="description-text text-muted mb-3">
                {descriptionFirst}
              </p>
            </div>
            <div className="col d-flex align-items-center mb-5">
              <i className="fas fa-check-circle fa-2x mr-5 product-icons"></i>
              <p className="description-text text-muted mb-3">
                {descriptionSecond}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="about-text">
              We also have a range of other signage solutions to help you
              improve the visibility of your business.
            </p>
          </div>
          <Button
            href={buttonLink}
            variant="primary"
            className="modalButton mb-3"
          >
            {buttonTitle}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
