import React from "react";
import styles from "./Homepage.module.scss";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
export default function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <main className={styles.homepage}>

      <section>
        <h1 className={styles.title}>
          Światło wierszy Haliny Kierpiec <br></br>  <br></br>  {" "}
          <span className={styles.span}>
            {" "}
            <i>Słowa, które malują emocje na kartach życia</i>{" "}
          </span>
        </h1>
      </section>

      <button onClick={handleClick} className={styles.titleBtn}>
        Zacznij Czytac
      </button>
      <Footer/>
    </main>
  );
}
