import React from "react";
import styles from "./Homepage.module.scss";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import 'animate.css';
import AnimateButton from "../components/Buttons/AnimateButton";
export default function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <main className={styles.homepage}>

      <section>
        <h1 className={`animate__animated animate__fadeInDown   animate__delay-1s   animate__slower     ${styles.title}`}>
             <span>Światło</span> <span>wierszy</span> <span>Haliny Kierpiec</span>  <br></br>  <br></br>  {" "}
          <span className={styles.span}>
            {" "}
              <span>Słowa</span>,<span>które</span>   <span> malują</span>  <span>emocje</span>  <span> na</span> <span>kartach </span> <span> życia</span>{" "}
          </span>
        </h1>
      </section>
<AnimateButton   onClick={handleClick} />
      {/* <button      onClick={handleClick} className={`animate__animated animate__fadeInUp animate__delay-3s animate__slow    ${styles.titleBtn}`}>
        Zacznij Czytac
      </button> */}
      <Footer/>
    </main>
  );
}
