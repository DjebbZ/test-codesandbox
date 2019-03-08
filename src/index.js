import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const options = ["1", "2", "3"];

function App() {
  const [state, setState] = React.useState("placeholder");
  React.useEffect(() => {
    setTimeout(() => setState("2"), 2000);
  }, []);
  console.log(state);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Code added to see if CodeSandbox commits to GitHub.</p>
      <select value={state} readOnly>
        <option value="placeholder">Marque</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
