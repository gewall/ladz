import React from "react";

const Flex = (props) => {
  return <div className={`flex ${props.className}`}>{props.children}</div>;
};

export default Flex;
