import React from "react";

const Text = (props) => {
  return <p className="text-slate-800 dark:text-white">{props.children}</p>;
};

export default Text;
