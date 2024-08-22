import React from "react";
import AboutCarousel from "./AboutCarousel";
import ScrollDownButton from "./ScrollDownButton";
import { Container, Row, Col, Card } from "react-bootstrap";

function About({ targetRef }) {
  return (
    <Container className="mt-5 about-section">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="mb-4 shadow-sm about-section">
            <Card.Body>
              <Card.Title>
                <h2 className="text-center about-title">
                  About That <b className="bold-word">Sign </b>Company
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted text-center ">
                <h3 className="about-subheading">
                  Your trusted Sunshine Coast signwriter
                </h3>
              </Card.Subtitle>
              <Card.Text className="about-text text-center">
                <p>
                  At That Sign Company, we take pride in transforming your ideas
                  into eye-catching, impactful signage solutions. With a focus
                  on quality craftsmanship and attention to detail, we are your
                  go-to choice for all things signage on the Sunshine Coast and the
                  surrounding areas.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center">
            <ScrollDownButton
              targetRef={targetRef}
              title="View our range of signage solutions"
              className="mb-3 modalButton"
            />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center mt-5"
        >
          <AboutCarousel />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
