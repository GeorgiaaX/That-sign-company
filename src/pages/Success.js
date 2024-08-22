import React from "react";
import CustomLink from "../components/CustomLink";
import { Card, Button } from "react-bootstrap";

export default function Success() {
  return (
    <Card
      className="text-center success-card"
      style={{ maxWidth: "30rem", margin: "2rem auto" }}
    >
      <Card.Body>
        <Card.Title as="h2">Thank you for contacting us!</Card.Title>
        <Card.Text>
          Your message has been successfully sent. One of our team members will
          review your message and get back to you as soon as possible.
        </Card.Text>
        <CustomLink to="/">
          <Button variant="primary">Return Home</Button>
        </CustomLink>
      </Card.Body>
    </Card>
  );
}
