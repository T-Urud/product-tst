import React, { useState } from "react";

const Buttons = ({ content, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const choiceHandle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
          choiceHandle();
        }}
        className={isClicked ? "selected" : ""}
      >
        {content}
      </button>
    </li>
  );
};

export default Buttons;
