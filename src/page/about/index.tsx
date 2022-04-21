import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return <h1>About

        <hr />
        Noi dung thay doi
      <Outlet />
  </h1>;
};

export default About;
