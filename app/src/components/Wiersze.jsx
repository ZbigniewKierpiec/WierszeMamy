/* eslint-disable react/prop-types */
import styles from "./wiersze.module.scss";
import { React } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import MattButtonEffect from "./Buttons/MattButtonEffect";
import "animate.css";
import PageNav from "./PageNav";
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

  // className={`${styles.wiersze} ${item} ? animate__animated animate__fadeInDown  animate__slow animate__delay-1s `}

  return (
   <>
  
 <div
      className={`${styles.wiersze} ${item} ? animate__animated animate__fadeInDown  animate__slow animate__delay-1s  `}
      onClick={() => handleActive(item)}
    >



      <span className={styles.top}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
      <h2 data-aos="fade-right" data-aos-offset="150" className={styles.title}>
        {item.title}
      </h2>
      <p data-aos="fade-left" data-aos-offset="130">
        {" "}
        {truncateString(item.name, maxLength)}
      </p>

      <span className={styles.bottom}>
        <FontAwesomeIcon icon={faQuoteRight} />
      </span>
    </div>
   </>
   
  );
}
