import React from "react";
import styles from "./WierszeDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function WierszeDetails({setActive}) {
  return (
    <div className={styles.box}>
      <span onClick={()=>setActive(false)}    className={styles.times}>
        {" "}
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </div>
  );
}
