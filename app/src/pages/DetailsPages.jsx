import React, { useEffect, useRef, useState } from "react";
import styles from "./DetailsPages.module.scss";
import { useAppContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
export default function DetailsPages() {
  const { appData } = useAppContext();
  const { title, name, page } = appData;
  const [formattedText, setFormattedText] = useState("");
  

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (name) {
  //     // Split the text into words
  //     const words = name.split(" ");

  //     // Map through the words and insert a line break after every 7th word
  //     const newText = words.map((word, index) => {
  //       return index % 7 === 0 && index !== 0 ? (
  //         <React.Fragment key={index}>
  //           <br />
  //           {word}
  //         </React.Fragment>
  //       ) : (
  //         <React.Fragment key={index}>{word} </React.Fragment>
  //       );
  //     });

  //     // Update the state with the formatted text
  //     setFormattedText(newText);
  //   }
  // }, [name]);
  useEffect(() => {
   
      

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

  function handleClick() {
 
  navigate(-1);

  }

  return (
    <div className={styles.box}>
      <div id={styles.flexcontainer}>
        <span onClick={handleClick} className={styles.times}>
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
