import React, { useRef, useState } from "react";
import styles from "./AppLayout.module.css";
import PageNav from "../components/PageNav";
import Logo from "../components/Logo";
import Wiersze from "../components/wiersze";
import Carousel from "../components/Carousel";

export default function AppLayout() {
  return (
    <main className={styles.app}>
      <PageNav></PageNav>
      <div className={styles.section}>
        <section className={styles.main}>
          <Carousel />
        </section>
      </div>
    </main>
  );
}
