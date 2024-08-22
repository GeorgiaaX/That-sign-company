import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

export default function FixedQuoteBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
        className="fixed-quote-button"
      >
        Get a Quote
      </Button>
      <ModalComponent show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}
