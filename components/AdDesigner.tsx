import "./AdDesigner.css";
import { useState } from "react";
import Ad from "./Ad";

function AdDesigner() {
  const [fontSize, setFontSize] = useState(24);
  const [flavor, setFlavor] = useState("Strawberry");
  const [colorTheme, setColor] = useState("light");

  function increaseFontSize() {
    setFontSize((prevCount) => prevCount + 1);
  }

  function decreaseFontSize() {
    setFontSize((prevCount) => prevCount - 1);
  }

  function chocolate() {
    setFlavor("Chocolate");
  }
  function strawberry() {
    setFlavor("Strawberry");
  }
  function vanilla() {
    setFlavor("Vanilla");
  }

  function light() {
    setColor("light");
  }

  function dark() {
    setColor("dark");
  }

  return (
    <section>
      <h2 className="adTitle">Ad Designer</h2>
      <Ad
        ad={{
          flavor: flavor,
          fontSize: fontSize,
          darkTheme: colorTheme === "dark",
        }}
      />
      <p>What to Support</p>
      <p>
        <button disabled={flavor === "Chocolate"} onClick={chocolate}>
          Chocolate
        </button>
        <button disabled={flavor === "Vanilla"} onClick={vanilla}>
          Vanilla
        </button>
        <button disabled={flavor === "Strawberry"} onClick={strawberry}>
          Strawberry
        </button>
      </p>

      <p>Color Theme</p>
      <p>
        <button disabled={colorTheme === "light"} onClick={light}>
          Light
        </button>
        <button disabled={colorTheme === "dark"} onClick={dark}>
          Dark
        </button>
      </p>
      <p>Font Size</p>
      <p>
        <button onClick={decreaseFontSize}>Down</button>
        {fontSize}
        <button onClick={increaseFontSize}>Up</button>
      </p>
    </section>
  );
}

export default AdDesigner;
