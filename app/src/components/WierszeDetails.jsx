/* eslint-disable react/prop-types */
import React from "react";
import styles from "./WierszeDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MattButtonEffect from "./Buttons/MattButtonEffect";
export default function WierszeDetails({ setActive, details }) {
  console.log(details);
  return (
    <div className={styles.box}>
      <span onClick={() => setActive(false)} className={styles.times}>
        {" "}
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <h2 className={styles.title}>{details.title}</h2>
      <span className={styles.left}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>

      <h1>{details.name}</h1>
      <span className={styles.right}>
        {" "}
        <FontAwesomeIcon icon={faQuoteRight} />{" "}
      </span>
    </div>
  );
}
