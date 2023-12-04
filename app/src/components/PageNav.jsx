import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
export default function PageNav() {
  return (
    <nav className={styles.nav}>
    <Logo/>
      <ul>
       
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
    </nav>
  );
}
