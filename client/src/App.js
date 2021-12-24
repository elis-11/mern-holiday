import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useRoutes } from "./routes";

import "./App.scss";

function App() {
  const routes = useRoutes;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
