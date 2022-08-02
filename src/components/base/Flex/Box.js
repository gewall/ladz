import React from "react";

const Box = (props) => {
  return <div className={`block ${props.className}`}>{props.children}</div>;
};

export default Box;
