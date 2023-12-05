/* eslint-disable react/prop-types */
import styles from "./wiersze.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export default function Wiersze({ item , handleActive }) {



 



  return (
    <div  onClick={handleActive}    className={styles.wiersze}>
      <span className={styles.top}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>

      <p> {item.name}</p>

      <span className={styles.bottom}>
        {" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </span>
    </div>
  );
}
