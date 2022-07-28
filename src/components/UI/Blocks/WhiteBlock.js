import React from "react";
import styles from "./WhiteBlock.module.css";

const WhiteBlock = ({ children }) => {
  return <div className={styles["search-wrapper"]}>{children}</div>;
};

export default WhiteBlock;
