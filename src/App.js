import React, { useState } from "react";

import About from "./components/About";
import Projects from "./components/Projects";
import Filter from "./components/Filter";

import Data from "./constants/projects.js";

import "./App.css";

function App() {
  const [skillToSearchBy, setSkillToSearchBy] = useState("");
  let dataToShow = [];

  Data.map((data) => {
    if (data.skills.includes(skillToSearchBy)) {
      dataToShow.push(data);
    }
  });

  const callback = (val) => {
    setSkillToSearchBy(val);
  };

  return (
    <div>
      <About />
      <Filter parentCallback={callback} />
      {skillToSearchBy
        ? dataToShow.map((project) => {
            return <Projects key={project.title} project={project} />;
          })
        : Data.map((project) => {
            return <Projects key={project.title} project={project} />;
          })}
      <About footer={true} />
    </div>
  );
}

export default App;
