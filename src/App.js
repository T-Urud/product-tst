import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Add2cart from "./components/Add2cart";

function App() {
  const [color, setColor] = useState("walnut");
  const colorHandler = (selectedColor) => {
    setColor(selectedColor);
  };

  const [selectedBtn, setSelectedBtn] = useState(null);
  const handleColorChoice = (color) => {
    setSelectedBtn(color);
    add2cartVisibility();
  };

  const [size, setSize] = useState("small");
  const sizeHandler = (selectedSize) => {
    setSize(selectedSize);
  };

  const [sizeBtn, setSizeBtn] = useState(null);
  const handleSizeChoice = (size) => {
    setSizeBtn(size);
    add2cartVisibility();
  };

  const [cartVisibility, setCartVisibility] = useState(false);
  const add2cartVisibility = () => {
    if (selectedBtn && sizeBtn) {
      setCartVisibility(true);
      console.log("yes");
    } else {
      setCartVisibility(false);
      console.log("no");
    }
  };
  useEffect(() => {
    add2cartVisibility();
  }, [selectedBtn, sizeBtn]);

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
                  handleColorChoice("black");
                }}
                isClicked={selectedBtn === "black"}
              />
              <Buttons
                content="Grey"
                onClick={() => {
                  colorHandler("grey");
                  handleColorChoice("grey");
                }}
                isClicked={selectedBtn === "grey"}
              />
              <Buttons
                content="Walnut"
                onClick={() => {
                  colorHandler("walnut");
                  handleColorChoice("walnut");
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
            <Add2cart isVisible={cartVisibility} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
