import React, { useState } from "react";
import "./App.css";
import SearchButton from "./components/SearchButton";
import Users from "./components/Users";

function App() {
  const [fetchUsers, setFetchUsers] = useState(false)

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
      
      {!fetchUsers ? <SearchButton search={setFetchUsers} /> : null}
      
      {fetchUsers ? <Users /> : null}
    </div>
  );
}

export default App;
