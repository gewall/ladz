import React from "react";
import { Helmet } from "react-helmet";

const HtmlHeader = (props) => {
  return (
    <Helmet>
      <title>{props.title || "LADZ"}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      {props.meta?.map((item) => (
        <meta name={item.name || "description"} content={item.content}></meta>
      ))}
    </Helmet>
  );
};

export default HtmlHeader;
