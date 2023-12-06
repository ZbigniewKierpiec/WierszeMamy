import React from "react";
import styles from "./Footer.module.scss";
export default function Footer() {
  return <footer className={styles.footer}>
 <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Halina Kierpiec
        </p>
  </footer>;
}
