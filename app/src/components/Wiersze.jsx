/* eslint-disable react/prop-types */
import styles from "./wiersze.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import MattButtonEffect from "./Buttons/MattButtonEffect";

// const truncateString = (str, maxLength) => {
//   return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
// };

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }

  const lastSpaceIndex = str.lastIndexOf(" ", maxLength);
  const truncated =
    lastSpaceIndex !== -1
      ? str.slice(0, lastSpaceIndex)
      : str.slice(0, maxLength);

  return `${truncated}...`;
};

export default function Wiersze({ item, handleActive }) {
  const maxLength = 170;
  
  return (
    <div onClick={()=>handleActive(item)} className={styles.wiersze}>
      <span className={styles.top}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
        <h2 className={styles.title}>{item.title}</h2>
      <p> {truncateString(item.name, maxLength)}</p>
  
      <span className={styles.bottom}>
        {" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </span>
    </div>
  );
}
