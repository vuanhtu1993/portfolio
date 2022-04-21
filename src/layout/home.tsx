import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import About from "../page/about";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
        <h1>Home</h1>
      </nav>
      <Outlet/>
    </div>
  );
};

export default HomeLayout;
