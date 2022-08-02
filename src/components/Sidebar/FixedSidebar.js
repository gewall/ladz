import React from "react";
import { useDispatch } from "../../lib/hooks";

const FixedSidebar = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        props.active ? "flex  bg-opacity-50" : "hidden  bg-opacity-0"
      } absolute top-0 bg-slate-800 w-screen h-screen z-50 `}
      data-target={"fixed"}
      onClick={(e) => {
        if (e.target.getAttribute("data-target") === "fixed") {
          dispatch({ type: "SWITCH_FIXEDSIDEBAR", payload: false });
        }
      }}
    >
      <div className="bg-white w-72 ">{props.children}</div>
    </div>
  );
};

export default FixedSidebar;
