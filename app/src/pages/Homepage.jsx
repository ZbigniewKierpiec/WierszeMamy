import React from "react";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
export default function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <main className={styles.homepage}>

      <section>
        <h1>
          Światło wierszy Haliny Kierpiec <br></br>{" "}
          <span className={styles.title}>
            {" "}
            <i>Słowa, które malują emocje na kartach życia</i>{" "}
          </span>
        </h1>
      </section>

      <button onClick={handleClick} className={styles.titleBtn}>
        Zacznij Czytac
      </button>
    </main>
  );
}
