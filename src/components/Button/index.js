import React from "react";
import "./style.css";

function Button(props) {
  return (
    <div className="div-btn">
      <button>{props.title}</button>
    </div>
  );
}

export default Button;
