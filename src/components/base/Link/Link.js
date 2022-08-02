import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ className, ...props }) => {
  return (
    <RouterLink
      className={`dark:text-white text-slate-800 h-full flex justify-center items-center ${
        props.nonPadding ? "px-0" : "px-2"
      } ${className} `}
      {...props}
    >
      {props.children}
    </RouterLink>
  );
};

export default Link;
