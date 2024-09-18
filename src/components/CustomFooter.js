import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function CustomFooter() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#0c131f" }}
    >
      <section
        className="d-flex justify-content-center p-4"
        style={{ backgroundColor: "#0C8CE9" }}
      >
        <div className="me-5 social-media-text align-items-center">
          <span className="text-center">Find us on social media</span>
        </div>
        <div>
          <Nav className="align-items-center brand-icons">
            <Nav.Link
              href="https://www.facebook.com/people/That-Sign-Company/61564335286425/"
              className="text-white me-4"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/thatsigncompany?igsh=eHprNTF4aGllMGs0"
              className="text-white me-4"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/company/that-sign-company/"
              className="text-white me-4"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Nav.Link>
          </Nav>
        </div>
      </section>

      <Container className="text-center text-md-start mt-5">
        <Row className="mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">That Sign Company</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#0C8CE9",
                height: "2px",
              }}
            />
            <p>
              Proudly servicing the Sunshine Coast region for all your signage
              needs!
            </p>
          </Col>

          <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#0C8CE9",
                height: "2px",
              }}
            />
            <Nav className="flex-column">
              <Nav.Link
                href="building-shopface"
                className="text-white footer-link"
              >
                {" "}
                Building and Shopface
              </Nav.Link>
              <Nav.Link
                href="illuminated-designs"
                className="text-white footer-link"
              >
                3D Illuminated Letters and Displays
              </Nav.Link>
              <Nav.Link
                href="reception-interior"
                className="text-white footer-link"
              >
                Reception and Interior
              </Nav.Link>
              <Nav.Link
                href="structural-signage"
                className="text-white footer-link"
              >
                Structural Signage
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
            <Nav className="flex-column">
              <Nav.Link
                href="directional-wayfinding"
                className="text-white footer-link"
              >
                Directional and Wayfinding
              </Nav.Link>
              <Nav.Link
                href="window-graphics"
                className="text-white footer-link"
              >
                Window Graphics and Display
              </Nav.Link>
              <Nav.Link
                href="vehicle-branding"
                className="text-white footer-link"
              >
                Vehicle Fleet Branding
              </Nav.Link>
              <Nav.Link href="retail-pos" className="text-white footer-link">
                Retail POS
              </Nav.Link>
              <Nav.Link href="truck-lining" className="text-white footer-link">
                Truck Lining and Scrolling
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#0C8CE9",
                height: "2px",
              }}
            />
            <Nav className="flex-column">
              <Nav.Link href="/contact" className="text-white footer-link">
                <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
                Get a Quote
              </Nav.Link>
              <Nav.Link
                href="mailto:jake@thatsigncompany.com.au"
                className="text-white footer-link"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                jake@thatsigncompany.com.au
              </Nav.Link>
              <Nav.Link
                href="tel:0467012049"
                className="text-white footer-link"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                0467012049
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <div style={{ height: "20px" }}></div>
      </Container>
    </footer>
  );
}

export default CustomFooter;
