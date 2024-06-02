import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features.js";
import Advantages from "./components/advantages/Advantages.js";
import Footer from "./components/footer/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
