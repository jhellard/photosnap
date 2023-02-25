import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
