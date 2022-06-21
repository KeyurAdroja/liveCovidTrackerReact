import React from "react";
import "./App.css";
import { Covid } from "./Components/Covid";
//import { Covid1 } from "./Components/Covid1";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Covid/>
    </div>
  );
};

export default App;
