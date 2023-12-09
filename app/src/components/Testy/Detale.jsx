/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Detale.module.scss";
import 'animate.css';
export default function Detale({ setActive, details , isActive }) {
  const [formattedText, setFormattedText] = useState("");
  console.log(details.name);
  useEffect(() => {
    if (details && details.name) {
      // Split the text into words
      const words = details.name.split(" ");

      // Map through the words and insert a line break after every 7th word
      const newText = words.map((word, index) => {
        return index % 7 === 0 && index !== 0 ? (
          <React.Fragment key={index}>
            <br />
            {word}
          </React.Fragment>
        ) : (
          <React.Fragment key={index}>{word} </React.Fragment>
        );
      });

      // Update the state with the formatted text
      setFormattedText(newText);
    }
  }, [details]);
  return (
    <div className={`${styles.box} ${details ? `${styles.box} animate__animated animate__fadeIn` : ''}`}>
      <div id={styles.flexcontainer}>
        <span onClick={() => setActive(false)} className={styles.times}>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <div className={styles.poem}>
          <h1>{details.title}</h1>
          <h2>by Halina Kierpiec</h2>
          <p className={styles.p}>{formattedText}</p>
        </div>
      </div>
    </div>
  );
}
