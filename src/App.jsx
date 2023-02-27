import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Overlay from "./component/Overlay";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Overlay />
      <Footer />
    </>
  );
};

export default App;
