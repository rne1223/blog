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
          Coming Soon.
          <br />
          Thank you for your patience.
        </h1>
        {/* <Preloader /> */}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
