import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.scss";
import Logo from "./Logo";
import Hamburger from '../components/Hamburger/Hamburger'

import 'animate.css';
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
   <div className={`${styles.wraper} ${isActive ? `${styles.active} animate__animated animate__fadeInDown  `:''}`  }>
        </div> 

    <Logo/>


 <ul className={`  ${styles.ul} ${isActive ? `${styles.active}   animate__animated animate__fadeInDown  animate__slow animate__delay-1s  `     : ''}`} >
       
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


