import React, { useCallback, useEffect, useState } from "react";
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
  const add2cartVisibility = useCallback(() => {
    if (selectedBtn && sizeBtn) {
      setCartVisibility(true);
    } else {
      setCartVisibility(false);
    }
  }, [selectedBtn, sizeBtn]);
  // useCallback pour stabilité

  useEffect(() => {
    add2cartVisibility();
  }, [selectedBtn, sizeBtn]);
  // useEffect pout surveiller changements de electedBtn et sizeBtn

  return (
    <main className="flex shadow-xl items-center justify-between gap-20 p-5 rounded-3xl bg-white">
      <div className="h-auto w-96">
        <img
          className="w-full h-full object-cover"
          src={`/img/${color}-teeshirt.webp`}
          alt={`${color} teeshirt`}
        />
      </div>
      <div>
        <h1 className="text-9xl">Heat Planet's</h1>
        <h2 className="text-7xl">Eco-friendly teeshirt</h2>
        <p className="text-5xl">$49.99</p>
        <div className="flex gap-8">
          <div>
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
          <div>
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
          <div className="flex items-center">
            <Add2cart isVisible={cartVisibility} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
