import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeLayout from "./layout/home";
import About from "./page/about";
import Home from "./page/home";
// import your route components too

function App() {
  return (
    <BrowserRouter>
    {/* From v6 we have to declare route at one place */}
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
        </Route>
        <Route path="/admin" element={<HomeLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
