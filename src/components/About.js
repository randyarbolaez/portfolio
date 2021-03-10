import React from "react";
import "../styles/About.css";

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub
} from "react-icons/ai";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
/*  animation: 5s ${fadeInAnimation}; */
`;

const About = () => (
  <FadeInDiv className="container-about">
    <h1 className="title-about">Randy Arbolaez</h1>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        href="https://www.linkedin.com/in/randyarbolaez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          <AiOutlineLinkedin />
        </h1>
      </a>
      <a
        href="mailto:randyarbolaez@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          <AiOutlineMail />
        </h1>
      </a>
      <a
        href="https://github.com/randyarbolaez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          <AiOutlineGithub />
        </h1>
      </a>
    </div>
  </FadeInDiv>
);

export default About;
