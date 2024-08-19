import React, { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [color, setColor] = useState("walnut");
  const colorHandler = (selectedColor) => {
    setColor(selectedColor);
  };

  const [size, setSize] = useState("small");
  const sizeHandler = (selectedSize) => {
    setSize(selectedSize);
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
              <Buttons content="Black" onClick={() => colorHandler("black")} />
              <Buttons content="Grey" onClick={() => colorHandler("grey")} />
              <Buttons
                content="Walnut"
                onClick={() => colorHandler("walnut")}
              />
            </ul>
          </div>
          <div className="sizeChoice">
            <ul>
              <Buttons content="Small" onClick={() => sizeHandler("small")} />
              <Buttons content="Medium" onClick={() => sizeHandler("medium")} />
              <Buttons content="Large" onClick={() => sizeHandler("large")} />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
