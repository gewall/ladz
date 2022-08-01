import React from "react";

const Heading = (props) => {
  switch (props.variant) {
    case "h3":
      return <h3 className="text-xl dark:text-white">{props.children}</h3>;

    default:
      return <h3 className="text-xl dark:text-white">{props.children}</h3>;
  }
};

export default Heading;
