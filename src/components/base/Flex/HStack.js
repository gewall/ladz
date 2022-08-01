import React from "react";

const HStack = (props) => {
  return (
    <div className={`flex flex-row ${props?.className}`}>{props.children}</div>
  );
};

export default HStack;
