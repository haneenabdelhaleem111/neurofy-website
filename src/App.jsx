import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//pages to be imported
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Epilepsy from "./Pages/Epilepsy";

const App = () => {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/epilepsy" element={<Epilepsy />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
