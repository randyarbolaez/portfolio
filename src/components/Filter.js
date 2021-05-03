import React from "react";
import "../styles/Filter.css";

const Filter = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.parentCallback("MongoDB");
        }}
      >
        Click me to search for MongoDB only
      </button>
    </div>
  );
};

export default Filter;
