import React from "react";
import "../styles/Filter.css";

const Filter = (props) => {
  let allSkills = [
    "WebSocket",
    "Express",
    "React",
    "Node.Js",
    "Javascript",
    "MongoDB",
    "Redux",
    "React Native",
    "Firebase",
  ];
  return (
    <div className="filter-wrapper">
      <select
        name="skills"
        id="skills"
        onChange={(e) => props.parentCallback(e.target.value)}
      >
        <option key="all" value="">
          All Projects
        </option>
        {allSkills.map((skill) => {
          return (
            <option key={skill} value={skill}>
              {skill}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
