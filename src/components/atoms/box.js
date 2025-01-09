import React from "react";

const Box = ({ style, title, description }) => {
  return (
    <div className="box" style={{ ...style, width: "300px", height: "300px" }}>
      <div className="title-random">
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Box;
