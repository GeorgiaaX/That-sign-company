import React from "react";

function ScrollDownButton({ targetRef, title }) {
  const OFFSET_VALUE = 100;

  const scrollToRef = () => {
    if (targetRef.current) {
      const offsetTop = targetRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop - OFFSET_VALUE,
        behavior: "smooth",
      });
    }
  };

  return (
    <button className="btn btn-primary modalButton" onClick={scrollToRef}>
      {title}
    </button>
  );
}

export default ScrollDownButton;
