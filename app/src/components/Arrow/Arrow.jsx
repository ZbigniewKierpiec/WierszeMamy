/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Arrow.module.scss";
// className={`${styles.button} ${styles[type]}`}

export default function Arrow({ type, isActive }) {
  return (
    <svg
    
      className={`${styles.fancy_arrow}      ${styles[type]}`}
      style={isActive ? { opacity: "1" } : {opacity:'0'}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62.48 72.04"
    >
      <g className={`${styles.arrow} ${isActive ? styles.activeS : ""}`}>
        <polygon
          className="cls-1"
          points="0 40.8 31.24 72.04 62.48 40.8 0 40.8"
        />
        <rect className="cls-1" x="15" width="32.47" height="43.3" />
      </g>
      <g className={`${styles.lights} ${isActive ? styles.active : ""}}`}>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="6.35" r="2.86" />
          <circle cx="27.48" cy="6.35" r="2.86" />
          <circle cx="35" cy="6.35" r="2.86" />
          <circle cx="42.52" cy="6.35" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="14.25" r="2.86" />
          <circle cx="27.48" cy="14.25" r="2.86" />
          <circle cx="35" cy="14.25" r="2.86" />
          <circle cx="42.52" cy="14.25" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="22.16" r="2.86" />
          <circle cx="27.48" cy="22.16" r="2.86" />
          <circle cx="35" cy="22.16" r="2.86" />
          <circle cx="42.52" cy="22.16" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="30.06" r="2.86" />
          <circle cx="27.48" cy="30.06" r="2.86" />
          <circle cx="35" cy="30.06" r="2.86" />
          <circle cx="42.52" cy="30.06" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="37.96" r="2.86" />
          <circle cx="27.48" cy="37.96" r="2.86" />
          <circle cx="35" cy="37.96" r="2.86" />
          <circle cx="42.52" cy="37.96" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="45.87" r="2.86" />
          <circle cx="12.33" cy="45.87" r="2.86" />
          <circle cx="27.48" cy="45.87" r="2.86" />
          <circle cx="35" cy="45.87" r="2.86" />
          <circle cx="42.52" cy="45.87" r="2.86" />
          <circle cx="50.23" cy="45.87" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="19.96" cy="53.77" r="2.86" />
          <circle cx="27.48" cy="53.77" r="2.86" />
          <circle cx="35" cy="53.77" r="2.86" />
          <circle cx="42.52" cy="53.77" r="2.86" />
        </g>
        <g className={`${styles.row} ${isActive ? styles.active : ""}`}>
          <circle cx="27.48" cy="61.68" r="2.86" />
          <circle cx="35" cy="61.68" r="2.86" />
        </g>
      </g>
    </svg>
  );
}
