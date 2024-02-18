import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Lession from "./components/Lession/Lession";
import Package from "./components/Package/Package";
import Application from "./components/Application/Application";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Lession />
      <Package />
      <Application />
    </>
  );
}

export default App;
