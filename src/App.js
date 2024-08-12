import { useState, useEffect } from "react";
import language from "./multilanguage/language.json";

function App() {
  const [selectValue, setselectValue] = useState("hindi");

  return (
    <div className="App">
      <select
        value={selectValue}
        style={{ position: "absolute", left: "50%", padding: "3px" }}
        onChange={(e) => {
          console.log("k1", language);
          setselectValue(e.target.value);
        }}
      >
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="russian">Russian</option>
      </select>
      <div
        style={{
          height: "40vh",
          width: "30vw",
          borderWidth: "2px",
          borderColor: "red",
          borderStyle: "solid",
          position: "absolute",
          left: "36%",
          top: "10%",
          padding: "3px",
        }}
      >
        <div>
          <h1>{language[selectValue]?.name}</h1>
        </div>
        <div style={{ textAlign: "Left", padding: "3px" }}>
          <h1>{language[selectValue]?.about}</h1>
          <p>{language[selectValue]?.Description}</p>
          <p>{language[selectValue]?.familyInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
