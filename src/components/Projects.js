import React from "react";
import "../styles/Projects.css";

const Projects = ({ project: { gif,title, description, demo, src, skills } }) => {
  return (
    <div className="container">
      <div className="container-projects">
        <div className="container-title">
          <h1 title={skills} className="title-projects">{title}</h1>
        </div>
        <div className="description-img-container">
          <h2 className="description-projects">{description}</h2>
        </div>
        <div className="button-container">
          <a href={demo} rel="noopener noreferrer" target="_blank">
            <button className={`button-demo button`}>Demo</button>
          </a>
          <a href={src} rel="noopener noreferrer" target="_blank">
            <button className={`button-src-code button`} disabled={!src}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div>
        <img style={{marginLeft:"2vw",borderRadius:"1vw",width:"60vw"}} src={gif} alt={`gif for ${title}`}/>
      </div>
    </div>
  );
};

export default Projects;
