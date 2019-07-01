import React, { useState, useEffect } from "react";
import { normalizeResponseErrors } from "../functions/normalizeResponse";
import Table from "./Table";

export default function Users() {
  const [resultsToDisplay, setResultsToDisplay] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);
  const [serverMessage, setServerMessage] = useState(null);

  const columns = ["Name", "Email", "City", "Company"];
  const columnKeys = ["name", "email", "address.city", "company.name"]

  const fetchUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.length > 0) {
          //I didn't set the response to a state because I had bug that I couldn't figure out in a timely manner.
          setResultsToDisplay(<Table columns={columns} rows={res} columnKeys={columnKeys} />);
        } else {
          setResultsToDisplay(<p>No users to display</p>);
        }
        setFetchingData(false);
      })
      .catch(err => {
        console.log(err);
        let message;
        if (err.code === 404) {
          message = "Endpoint doesn't exist";
        } else if (err.code === 500) {
          message = "Internal server error";
        } else {
          message = "Something went wrong, please try again later";
        }
        setServerMessage(message);
      });
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {fetchingData ? <p>Fetching Users</p> : resultsToDisplay}
      {serverMessage ? <div>{serverMessage}</div> : null}
    </div>
  );
}
