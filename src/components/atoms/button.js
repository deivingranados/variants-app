import React from "react";

const Button = ({ text, style, onclickAlert }) => {
  return (
    <button style={style} onClick={onclickAlert}>
      {text}
    </button>
  );
};

export default Button;
