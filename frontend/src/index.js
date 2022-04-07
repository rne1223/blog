import React from "react";
import ReactDOM from "react-dom";
// import Preloader from "./components/Preloader/Preloader";
// import Timer from "./components/Countdown/Timer";
// import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon. Here is a small test.
        </h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
