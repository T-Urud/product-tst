import React from "react";
import { motion } from "framer-motion";

const Add2cart = ({ isVisible }) => {
  return (
    isVisible && (
      <motion.button
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        add 2 cart
      </motion.button>
    )
  );
};

export default Add2cart;
