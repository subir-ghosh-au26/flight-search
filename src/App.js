import React from "react";
import "./App.css";
import Result from "./components/Result";
import Tabs from "./components/Tabs";
import { data } from "./Data/Data";

function App() {
  const flightData = () => {
    return data.map((fdata) => {
      return <Result data={fdata} />;
    });
  };

  return (
    <div>
      <h2>Flight Search Engine</h2>
      <div className="d-flex">
        <Tabs />
        <div>{flightData()}</div>
      </div>
    </div>
  );
}

export default App;
