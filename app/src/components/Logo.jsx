import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
export default function Logo() {
  return(
    <Link to='/'>
<div className={styles.logo}>

</div>
    </Link>

  ) 
}
