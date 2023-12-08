import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.scss";
import Logo from "./Logo";
import Hamburger from '../components/Hamburger/Hamburger'
import { useMemo } from "react";

export default function PageNav() {

const[isActive , setIsActive]=useState(false);
 
// function handleClick() {
//   setIsActive((prev) => !prev);
//   console.log(isActive)
// }

 function  handleClick(){
    setIsActive((active)=>!active)
  
}
  return (
  
 <nav className={styles.nav}>
   <div className={styles.wraper}>
        </div> 

    <Logo/>


 <ul className={`${styles.ul} ${isActive ? styles.active : ''}`} >
       
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/app">Wiersze</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        </ul> 
        <Hamburger onTouchStart={handleClick} isActive={isActive} color={'white'}/>
    
    </nav>

   
  );
}


