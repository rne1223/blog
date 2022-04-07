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
          Website Coming Soon
          <br />
          Thank you
          <br />
          for your patience.
        </h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
