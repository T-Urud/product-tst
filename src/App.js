import React from "react";
import SizeBtn from "./components/SizeBtn";
import ColorBtn from "./components/ColorBtn";

function App() {
  return (
    <main className="globalContainer">
      <div className="imgContainer">
        <img src="./img/black-teeshirt.jpg" alt="black teeshirt" />
      </div>
      <div className="infosContainer">
        <h1>Heat Planet's</h1>
        <h2 className="description">Eco-friendly teeshirt</h2>
        <p className="price">$49.99</p>
        <div className="colorChoice">
          <p>Choose color</p>
          <ul>
            <ColorBtn color="Black" />
            <ColorBtn color="Grey" />
            <ColorBtn color="Walnut" />
          </ul>
        </div>
        <div className="sizeChoice">
          <ul>
            <SizeBtn content="Small" />
            <SizeBtn content="Medium" />
            <SizeBtn content="Large" />
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
