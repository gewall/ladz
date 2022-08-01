import React from "react";

const Container = (props) => {
  return (
    <div className="md:container md:mx-auto md:px-8 px-4">{props.children}</div>
  );
};

export default Container;
