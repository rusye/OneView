import React from "react";
import "./App.css";
import SearchButton from "./components/SearchButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello
          <img
            src="https://www.oneviewcommerce.com/hs-fs/hubfs/OneView_5_13_transparent-01-1.png?width=180&name=OneView_5_13_transparent-01-1.png"
            className="App-logo"
            alt="logo"
          />
        </h1>
      </header>
      <SearchButton />
    </div>
  );
}

export default App;
