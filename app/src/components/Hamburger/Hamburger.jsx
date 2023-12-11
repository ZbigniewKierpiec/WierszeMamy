/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from '../Hamburger/Hamburger.module.scss';

export default function Hamburger({color , onTouchStart , isActive }) {

const bg=color;


const handleChange = () => {
   console.log(isActive)
   onTouchStart()
};



return <div   onTouchStart={onclick} className={`${styles.main} ${isActive ? styles.active : ''}`}    >


<div className={styles.demowrapper}>
  <label  className={styles.hamburger}>
    <input name="input"     checked={isActive}     onChange={(e)=>handleChange(e)}        className={styles.hamburgerinput} type="checkbox"/>
      
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.first}`}></span>
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.second}`}></span>
    <span style={{background:bg}} className={`${styles.hamburgerline} ${styles.third}`}></span>
  </label>

</div>


</div>  



}

