import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Hamburger from "./components/Hamburger/Hamburger";

import DetailsPages from "./pages/DetailsPages";
import { AppProvider } from "./Context/Context";
import Detale from "./components/Testy/Detale";
import WierszeDetails from "./components/WierszeDetails";
import PageNav from "./components/PageNav";
function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="app" element={<AppLayout />}></Route>
            {/* <Route path="details" element={<Detale />}></Route> */}

            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
