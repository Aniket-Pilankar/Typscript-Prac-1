import React from "react";
import "./App.css";
import One from "./Components/One";
import Two from "./Components/Two";
import JackHerrington from "./JackHerrington";
import OneOD from "./OnlineDocuments/One";

function App() {
  return (
    <div className="App">
      {/* <One shape='square' width={20} fullName={'Aniket'}/> */}
      <One shape=" reactangle" width={20} height={10} fullName={"Aniket"} />
      <Two expanded />
      <Two collapse />
      {/* JackHerrington */}
      <JackHerrington />

      {/* Online Doucments */}
      <OneOD />
    </div>
  );
}

export default App;
