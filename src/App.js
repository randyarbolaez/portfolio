import React from "react";

import About from "./components/About";
import Projects from "./components/Projects";

import Data from "./constants/projects.js";

import "./App.css";

function App() {
  return (
    <div>
      <About/>
      {Data.map((project) => (
        <Projects key={project.title} project={project} />
      ))}
      <About footer={true}/>
    </div>
  );
}

export default App;
