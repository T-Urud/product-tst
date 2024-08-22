import React from "react";
import { motion } from "framer-motion";

const Add2cart = ({ isVisible }) => {
  return (
    isVisible && (
      <motion.button
        className="w-24 text-4xl cursor-pointer border rounded-lg flex items-center gap-5 p-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 grid place-items-center"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <span>Add</span>
      </motion.button>
    )
  );
};

export default Add2cart;
