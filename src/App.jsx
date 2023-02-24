import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./component/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
