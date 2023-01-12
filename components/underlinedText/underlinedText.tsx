import React from "react";
import classNames from "classnames";

// eslint-disable-next-line css-modules/no-unused-class
import styles from "./underlinedText.module.css";

type UnderlinedTextProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  children: React.ReactNode;
};

const UnderlinedText = ({ as, className, children }: UnderlinedTextProps) => {
  const Tag = React.createElement(
    as,
    {
      className: classNames("font-bold leading-none", className),
    },
    React.createElement("span", { className: styles.underline }, [children])
  );

  return Tag;
};

export default UnderlinedText;
