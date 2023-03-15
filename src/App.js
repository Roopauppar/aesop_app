import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/components/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
