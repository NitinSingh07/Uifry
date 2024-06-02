import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/hero/Hero.js";
import "./index.css";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        {/* <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<Abouts />} />
        <Route exact path="/trainbooking" element={<TrainBookingPage />} />
        <Route exact path="/flightbooking" element={<FlightBookingPage />} />
        <Route exact path="/traincancel" element={<TrainCancelPage />} />
        <Route exact path="/flightcancel" element={<FlightCancelPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
