import React, { useState } from "react";
import styles from '../Hamburger/Hamburger.module.scss';

export default function Hamburger({color}) {

const bg=color;

return <div  className={styles.main}>

<div className={styles.demowrapper}>
  <label className={styles.hamburger}>
    <input className={styles.hamburgerinput} type="checkbox"/>
      
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.first}`}></span>
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.second}`}></span>
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.third}`}></span>
  </label>

</div>


</div>  



}