import React, { useState } from "react";
import { color, motion } from "framer-motion";

const Add2cart = ({ isVisible, onClick, isClicked }) => {
  const [index, setIndex] = useState(1);

  const addClick = () => {
    if (index < 9) {
      setIndex(index + 1);
    }
  };
  const minusClick = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  return (
    isVisible && (
      <motion.button
        onClick={onClick}
        className={
          isClicked
            ? "w-32 btn btn-outline gap-5"
            : "w-32 btn btn-outline gap-5"
        }
        style={{ color: "#6d6464" }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ scale: isClicked ? 1.1 : 1, opacity: 1, x: 30 }}
        transition={{ duration: isClicked ? 1 : 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="24"
          height="24"
          className="grid place-items-center"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        {isClicked ? (
          <motion.span
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {index}
          </motion.span>
        ) : (
          <span className="text-xl">Add</span>
        )}
        {isClicked ? (
          <motion.div
            className="flex"
            initial={{ flexDirection: "column" }}
            animate={{ flexDirection: "colum" }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-xl leading-none" onClick={addClick}>
              +
            </span>
            <span className="text-xl leading-none" onClick={minusClick}>
              -
            </span>
          </motion.div>
        ) : (
          ""
        )}
      </motion.button>
    )
  );
};

export default Add2cart;
