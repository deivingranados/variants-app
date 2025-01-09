import React from "react";
import RandomComponents from "../molecules/RandomComponents";

const RandomDisplay = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>Random Variants</h1>
    <RandomComponents />
  </div>
);

export default RandomDisplay;
