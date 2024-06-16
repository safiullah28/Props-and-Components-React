import React from "react";
import Props from "./props/props";
function App() {
  let namee = "Safiullah";
  return (
    <div>
      <h1>{namee}</h1>
      <Props name="Safiullah" age={21} />
    </div>
  );
}

export default App;
