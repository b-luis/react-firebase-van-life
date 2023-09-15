import React from "react";
import { Header, Footer } from "./components";
import { Home, About, Van } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Van />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
