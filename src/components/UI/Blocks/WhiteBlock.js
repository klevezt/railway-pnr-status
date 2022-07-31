import React from "react";
import styles from "./WhiteBlock.module.css";

const WhiteBlock = ({ children, className }) => {
  return <div className={`${styles["search-wrapper"]} ${className}`}>{children}</div>;
};

export default WhiteBlock;
