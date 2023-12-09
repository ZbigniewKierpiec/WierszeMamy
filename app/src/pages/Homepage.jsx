import React from "react";
import styles from "./Homepage.module.scss";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import 'animate.css';
export default function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <main className={styles.homepage}>

      <section>
        <h1 className={`animate__animated animate__fadeInDown   animate__delay-1s   animate__slower     ${styles.title}`}>
          Światło wierszy Haliny Kierpiec <br></br>  <br></br>  {" "}
          <span className={styles.span}>
            {" "}
            <i>Słowa,które malują emocje na kartach życia</i>{" "}
          </span>
        </h1>
      </section>

      <button      onClick={handleClick} className={`animate__animated animate__fadeInUp animate__delay-3s animate__slow    ${styles.titleBtn}`}>
        Zacznij Czytac
      </button>
      <Footer/>
    </main>
  );
}
