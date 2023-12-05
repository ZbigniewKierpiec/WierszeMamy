/* eslint-disable react/prop-types */
import styles from "./wiersze.module.css";
import React from 'react'

export default function Wiersze({item}) {
  return (
    <div className={styles.wiersze}>
         
          {item.name}
    </div>
  )
}
