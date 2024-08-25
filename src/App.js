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

  const [cartClick, setCartClick] = useState(false);
  const cartUserClik = () => {
    setCartClick(true);
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
    <main className="flex flex-col shadow-xl items-center justify-between p-4 rounded-3xl bg-white">
      <div className="h-52 w-full">
        <img
          className="w-full h-full object-contain"
          src={`/img/${color}-teeshirt.webp`}
          alt={`${color} teeshirt`}
        />
      </div>
      <div className="px-6 w-96 mt-3">
        <h1
          className="text-6xl font-galgo leading-10"
          style={{ color: "#6d6464" }}
        >
          Heat Planet's
        </h1>
        <div className="flex gap-3">
          <h2 className="text-4xl font-galgo" style={{ color: "#6d6464" }}>
            Eco-friendly teeshirt
          </h2>
          <p className="text-4xl font-galgo" style={{ color: "#6d6464" }}>
            $49.99
          </p>
        </div>
        <div className="flex gap-5 mt-2">
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
            <Add2cart
              isVisible={cartVisibility}
              onClick={cartUserClik}
              isClicked={cartClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
