import React from "react";

const Flex = (props) => {
  return (
    <div className={`flex  justify-center items-center ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Flex;
