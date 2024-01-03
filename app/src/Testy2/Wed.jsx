
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import 'animate.css';


import styles from './Wed.module.scss';
import { useAppContext } from "../Context/Context";
export default function Wed({setActive}) {
  const { appData } = useAppContext();
  const { title, name, page } = appData;

  const [formattedText, setFormattedText] = useState("");
  useEffect(() => {
   
      console.log(name)

    if (name) {
      // Split the text into words
      const words = name.split(" ");

      // Create an array to hold lines
      let lines = [];
      let currentLine = [];

      // Iterate through words and break into lines after every 5 words
      words.forEach((word, index) => {
        currentLine.push(word);

        if ((index + 1) % 17 === 0) {
          lines.push(currentLine.join(" "));
          currentLine = [];
        }
      });

      // Add the remaining words to the last line
      if (currentLine.length > 0) {
        lines.push(currentLine.join(" "));
      }

      // Map through the lines and add a margin-bottom after every 5 lines
      const newText = lines.map((line, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span style={{ display: "block", marginBottom: "1rem" }}></span>
          )}
          {line}
        </React.Fragment>
      ));

      // Update the state with the formatted text
      setFormattedText(newText);
    }
  }, [name]);

  return (
    <div className={styles.box}>
      <div id={styles.flexcontainer}>
        <span onClick={() => setActive(false)}   className={styles.times}>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <div className={styles.poem}>
          <h1 className={styles.line}>{title}</h1>
          <h2>by Halina Kierpiec</h2>
          <p className={styles.p}>{formattedText}</p>
        </div>
      </div>
    </div>
  );
}
