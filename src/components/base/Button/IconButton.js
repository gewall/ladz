import React from "react";

const IconButton = ({ className, icon, ...props }) => {
  return (
    <button
      className={`rounded-full p-2 h-max hover:bg-slate-200 transition-colors ease-in-out duration-200 active:scale-75 text-slate-800 dark:text-white dark:hover:bg-slate-600 ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
