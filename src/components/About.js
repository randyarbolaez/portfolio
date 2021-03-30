import React from "react";
import "../styles/About.css";

import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub
} from "react-icons/ai";

const About = (props) => (
  <div className="container-about">
  {!props.footer && <h1 className="title-about">Randy Arbolaez</h1>}
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
  {props.footer && <h1 style={{padding:"0", marginTop:"0"}} className="title-about">Randy Arbolaez</h1>}
  </div>
);

export default About;
