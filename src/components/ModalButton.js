import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="modalButton"
        onClick={() => setShowModal(true)}
      >
        Get A Quote
      </Button>
      <ModalComponent show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}
