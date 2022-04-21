import React from "react";
import style from "./home.module.scss";
import styled from "styled-components";

const Avatar = styled.div`
  background: red;
  height: 100px;
`;

const Home = () => {
  return (
    <div className={style.container}>
      Vu anh tus
      <Avatar />
      <div className="text-3xl font-bold underline">Hello world!</div>
    </div>
  );
};

export default Home;
