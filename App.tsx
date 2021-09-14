import React from "react";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Display from "./models/displayAd";
import Ad from "./components/Ad";

function App() {
  const ads: Display[] = [
    { flavor: "Chocolate", fontSize: 20, darkTheme: true },
    { flavor: "Vanilla", fontSize: 20, darkTheme: false },
    { flavor: "Strawberry", fontSize: 20, darkTheme: true },
  ];
  return (
    <div className="App">
      <Header user="Grant" />
      <section className="boxContainer">
        <Ad ad={ads[0]} />
        <Ad ad={ads[1]} />
        <Ad ad={ads[2]} />
      </section>

      <AdDesigner />
    </div>
  );
}

export default App;
