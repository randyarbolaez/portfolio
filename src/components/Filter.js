import React from "react";
import "../styles/Filter.css";

const Filter = (props) => {
  let allSkills = [
    "Express",
    "Firebase",
    "GraphQL Yoga",
    "Javascript",
    "MongoDB",
    "Next.Js",
    "Node.Js",
    "Prisma",
    "Python",
    "React",
    "React Native",
    "Redux",
    "Selenium",
    "Styled Component",
    "WebSocket",
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
