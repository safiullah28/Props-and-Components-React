import React from "react";
import Props from "./props/props";
function App() {
  let namee = "Safiullah";
  return (
    <div>
      <h1>{namee}</h1>
      <Props name="Safiullah" age={21} />
      <Props name="Fatim Jamshaid" age={24} />
      <Props name="Fizza" age={52} />
      <Props name="Aliza Khan"/>
    </div>
  );
}

export default App;
