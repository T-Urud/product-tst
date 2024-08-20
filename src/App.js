import React, { useState } from "react";
import Buttons from "./components/Buttons";
import { motion } from "framer-motion";

function App() {
  const [color, setColor] = useState("walnut");
  const colorHandler = (selectedColor) => {
    setColor(selectedColor);
  };

  const [selectedBtn, setSelectedBtn] = useState(null);
  const handleBtnChoice = (id) => {
    setSelectedBtn(id);
  };

  const [size, setSize] = useState("small");
  const sizeHandler = (selectedSize) => {
    setSize(selectedSize);
  };

  const [sizeBtn, setSizeBtn] = useState(null);
  const handleSizeChoice = (id) => {
    setSizeBtn(id);
  };

  return (
    <main className="globalContainer">
      <div className="imgContainer">
        <img src={`/img/${color}-teeshirt.webp`} alt={`${color} teeshirt`} />
      </div>
      <div className="infosContainer">
        <h1>Heat Planet's</h1>
        <h2 className="description">Eco-friendly teeshirt</h2>
        <p className="price">$49.99</p>
        <div className="btnsContainer" style={{ display: "flex", gap: "2rem" }}>
          <div className="colorChoice">
            <ul>
              <Buttons
                content="Black"
                onClick={() => {
                  colorHandler("black");
                  handleBtnChoice("black");
                }}
                isClicked={selectedBtn === "black"}
              />
              <Buttons
                content="Grey"
                onClick={() => {
                  colorHandler("grey");
                  handleBtnChoice("grey");
                }}
                isClicked={selectedBtn === "grey"}
              />
              <Buttons
                content="Walnut"
                onClick={() => {
                  colorHandler("walnut");
                  handleBtnChoice("walnut");
                }}
                isClicked={selectedBtn === "walnut"}
              />
            </ul>
          </div>
          <div className="sizeChoice">
            <ul>
              <Buttons
                content="Small"
                onClick={() => {
                  sizeHandler("small");
                  handleSizeChoice("small");
                }}
                isClicked={sizeBtn === "small"}
              />
              <Buttons
                content="Medium"
                onClick={() => {
                  sizeHandler("medium");
                  handleSizeChoice("medium");
                }}
                isClicked={sizeBtn === "medium"}
              />
              <Buttons
                content="Large"
                onClick={() => {
                  sizeHandler("large");
                  handleSizeChoice("large");
                }}
                isClicked={sizeBtn === "large"}
              />
            </ul>
          </div>
          <div className="cartContainer">
            <motion.button
              className=""
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              add 2 cart
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
