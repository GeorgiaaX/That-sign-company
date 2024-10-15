import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Form
        action="https://formspree.io/f/mvojyqvp" // Replace with your Formspree form ID
        method="POST"
        className="contact-form"
      >
        <h3 className="text-center">Send us a message</h3>

        {/* Hidden field for Formspree redirect */}
        <input
          type="hidden"
          name="_next"
          value="https://thatsigncompany.com.au/success" // Success page URL
        />

        {/* Subject for the email */}
        <input type="hidden" name="_subject" value="New Quote Request" />

        <Form.Group className="mb-3">
          <Form.Label className="contact-label" style={{ textAlign: "left" }}>
            Name
          </Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-form-label">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone&nbsp;Number"
            name="phone number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-form-label">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Tell us what you need!"
            name="message"
            rows="5"
            required
          />
        </Form.Group>

        <Button
          className="contact-btn"
          variant="primary"
          type="submit"
          size="lg"
        >
          Get a Quote
        </Button>
      </Form>
    </div>
  );
});

export default ContactForm;
