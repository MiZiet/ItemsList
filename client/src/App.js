import React from "react";
import "./App.css";

import AppNavbar from "./components/navbar/AppNavbar";
import List from "./components/list/List";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <List />
    </div>
  );
}

export default App;
