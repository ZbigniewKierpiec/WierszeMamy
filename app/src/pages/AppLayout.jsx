/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./AppLayout.module.css";
import PageNav from "../components/PageNav";
import Logo from "../components/Logo";
import Wiersze from "../components/wiersze";
import WierszeDetails from "../components/WierszeDetails";

const data = [
  {
    id: 1,
    name: "We wszystkich mowach i w języku duszy,Nad wszystkie są dwa słowa,Jak w kroplach rosy po suszy,W nich skarb żywota się chowa.Jak dwie perełki w oceanie życia,Jak dwie gwiazdeczki na niebie,wiecą nam do powiciaDwa słowa - kocham ciebie.",
  },
  {
    id: 2,
    name: "Każdy nowy dzień jest kwiatem Który zakwita w naszych rękach Tam gdzie się kocha, nigdy nie zapada noc.",
  },
  {
    id: 3,
    name: "Serce to cząstka człowieka,Które tęskni, kocha i czeka.",
  },
  {
    id: 4,
    name: " Wciąż rozmyślasz. Uparcie i skrycie.Patrzysz w okno i smutek masz w oku...Przecież mnie kochasz nad życie?Sam mówiłeś przeszłego roku...  ",
  },
  {
    id: 5,
    name: "Jest jeden kwiat - kwiat jak wiosenne zorze,Tak pełen blasków i woniących tchnień,Lecz rwać go można w rannej tylko porze,  Jak słodką mannę we wschodzący dzień, Miłości kwiat.Więc zrywaj kwiat! korzystaj z błogiej chwili! W uroczy wiąż miłość z młodością ślub!Nim słonce życia na zachód się schyliNim wrzące serce zmrozi zimny grób -Korzystaj z lat,Rwij miłości kwiat!  ",
  },
  {
    id: 6,
    name: "Bo Cię kocham i już,bo z Tobą zawsze jest sens a bez Ciebie go nie ma,bo z Tobą można konie kraść,bo z Tobą można pójść na koniec świata i nie czuć zmęczenia,bo lubię kiedy się uśmiechasz,",
  },
  {
    id: 7,
    name: "Najlepsza miłość to ta która budzi duszę,pcha Nas ku lepszemu, rozpala w sercach ogień a w duszy sieje spokój.",
  },
  {
    id: 8,
    name: "Każdy nowy dzień jest kwiatem Który zakwita w naszych rękach Tam gdzie się kocha, nigdy nie zapada noc.",
  },
  {
    id: 9,
    name: "Serce to cząstka człowieka,Które tęskni, kocha i czeka.",
  },
  {
    id: 10,
    name: " Wciąż rozmyślasz. Uparcie i skrycie.Patrzysz w okno i smutek masz w oku...Przecież mnie kochasz nad życie?Sam mówiłeś przeszłego roku...  ",
  },
  {
    id: 11,
    name: "Jest jeden kwiat - kwiat jak wiosenne zorze,Tak pełen blasków i woniących tchnień,Lecz rwać go można w rannej tylko porze,  Jak słodką mannę we wschodzący dzień, Miłości kwiat.Więc zrywaj kwiat! korzystaj z błogiej chwili! W uroczy wiąż miłość z młodością ślub!Nim słonce życia na zachód się schyliNim wrzące serce zmrozi zimny grób -Korzystaj z lat,Rwij miłości kwiat!  ",
  },
  {
    id: 12,
    name: "Bo Cię kocham i już,bo z Tobą zawsze jest sens a bez Ciebie go nie ma,bo z Tobą można konie kraść,bo z Tobą można pójść na koniec świata i nie czuć zmęczenia,bo lubię kiedy się uśmiechasz,",
  },
  {
    id: 13,
    name: "Najlepsza miłość to ta która budzi duszę,pcha Nas ku lepszemu, rozpala w sercach ogień a w duszy sieje spokój.",
  },
  {
    id: 14,
    name: "Każdy nowy dzień jest kwiatem Który zakwita w naszych rękach Tam gdzie się kocha, nigdy nie zapada noc.",
  },
  {
    id: 15,
    name: "Serce to cząstka człowieka,Które tęskni, kocha i czeka.",
  },
  {
    id: 16,
    name: " Wciąż rozmyślasz. Uparcie i skrycie.Patrzysz w okno i smutek masz w oku...Przecież mnie kochasz nad życie?Sam mówiłeś przeszłego roku...  ",
  },
  {
    id: 17,
    name: "Jest jeden kwiat - kwiat jak wiosenne zorze,Tak pełen blasków i woniących tchnień,Lecz rwać go można w rannej tylko porze,  Jak słodką mannę we wschodzący dzień, Miłości kwiat.Więc zrywaj kwiat! korzystaj z błogiej chwili! W uroczy wiąż miłość z młodością ślub!Nim słonce życia na zachód się schyliNim wrzące serce zmrozi zimny grób -Korzystaj z lat,Rwij miłości kwiat!  ",
  },
  {
    id: 18,
    name: "Bo Cię kocham i już,bo z Tobą zawsze jest sens a bez Ciebie go nie ma,bo z Tobą można konie kraść,bo z Tobą można pójść na koniec świata i nie czuć zmęczenia,bo lubię kiedy się uśmiechasz,",
  },
  {
    id: 19,
    name: "Najlepsza miłość to ta która budzi duszę,pcha Nas ku lepszemu, rozpala w sercach ogień a w duszy sieje spokój.",
  },

  {
    id: 20,
    name: " Wciąż rozmyślasz. Uparcie i skrycie.Patrzysz w okno i smutek masz w oku...Przecież mnie kochasz nad życie?Sam mówiłeś przeszłego roku...  ",
  },
  {
    id: 21,
    name: "Jest jeden kwiat - kwiat jak wiosenne zorze,Tak pełen blasków i woniących tchnień,Lecz rwać go można w rannej tylko porze,  Jak słodką mannę we wschodzący dzień, Miłości kwiat.Więc zrywaj kwiat! korzystaj z błogiej chwili! W uroczy wiąż miłość z młodością ślub!Nim słonce życia na zachód się schyliNim wrzące serce zmrozi zimny grób -Korzystaj z lat,Rwij miłości kwiat!  ",
  },
  {
    id: 22,
    name: "Bo Cię kocham i już,bo z Tobą zawsze jest sens a bez Ciebie go nie ma,bo z Tobą można konie kraść,bo z Tobą można pójść na koniec świata i nie czuć zmęczenia,bo lubię kiedy się uśmiechasz,",
  },
  {
    id: 23,
    name: "Najlepsza miłość to ta która budzi duszę,pcha Nas ku lepszemu, rozpala w sercach ogień a w duszy sieje spokój.",
  },
  {
    id: 24,
    name: "Każdy nowy dzień jest kwiatem Który zakwita w naszych rękach Tam gdzie się kocha, nigdy nie zapada noc.",
  },
  {
    id: 25,
    name: "Serce to cząstka człowieka,Które tęskni, kocha i czeka.",
  },
  {
    id: 26,
    name: " Wciąż rozmyślasz. Uparcie i skrycie.Patrzysz w okno i smutek masz w oku...Przecież mnie kochasz nad życie?Sam mówiłeś przeszłego roku...  ",
  },
  {
    id: 27,
    name: "Jest jeden kwiat - kwiat jak wiosenne zorze,Tak pełen blasków i woniących tchnień,Lecz rwać go można w rannej tylko porze,  Jak słodką mannę we wschodzący dzień, Miłości kwiat.Więc zrywaj kwiat! korzystaj z błogiej chwili! W uroczy wiąż miłość z młodością ślub!Nim słonce życia na zachód się schyliNim wrzące serce zmrozi zimny grób -Korzystaj z lat,Rwij miłości kwiat!  ",
  },
  {
    id: 28,
    name: "Bo Cię kocham i już,bo z Tobą zawsze jest sens a bez Ciebie go nie ma,bo z Tobą można konie kraść,bo z Tobą można pójść na koniec świata i nie czuć zmęczenia,bo lubię kiedy się uśmiechasz,",
  },
  {
    id: 29,
    name: "Najlepsza miłość to ta która budzi duszę,pcha Nas ku lepszemu, rozpala w sercach ogień a w duszy sieje spokój.",
  },
];

export default function AppLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(false);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);
  return (
    <main className={styles.app}>
      <PageNav></PageNav>
      {active && <WierszeDetails setActive={setActive}    />}
      <div className={styles.section}>
        <section className={styles.main}>
          {/* <table className={styles.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* <nav>
            <ul className='pagination'>
              <li className="page-item">
                <a className="page-link" onClick={prevPage} href="#">
                  Prev
                </a>
              </li>

              {
                numbers.map((item,index)=> <li className={`page-item ${currentPage === item ?'active':''}`} key={index}>
                  <a className="page-link" href="#">{item}</a>
                </li>   )
              }


              <li className="page-item">
                <a className="page-link" onClick={nextPage} href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav> */}
          {/* 
          <div className="list-group">
            {records.map((item) => (
              <button
                type="button"
                className="list-group-item list-group-item-action fs-1 "
                key={item.id}
              >
                {item.name}
              </button>
            ))}
          </div> */}
          {records.map((item) => (
            <Wiersze key={item.id}  handleActive={handleActive}        item={item} />
          ))}
        </section>
        <nav className={styles.nav}>
          <ul className="pagination">
            <li className={styles.itemBtn}>
              <button className={styles.btn} onClick={prevPage} href="#">
                Prev
              </button>
            </li>
            {/* className={`${styles.items} ${currentPage === item ? "active" : ""}`} */}
            {numbers.map((item, index) => (
              <li
                key={index}
                className={`page-item d-flex  align-items-center ${
                  currentPage === item ? "active" : ""
                }`}
              >
                <a
                  onClick={() => changeCPage(item)}
                  className="page-link fs-2"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className={styles.itemBtn}>
              <button className={styles.btn} onClick={nextPage} href="#">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );


 function handleActive() {
     setActive(active=>active=true)
 }



  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
}
