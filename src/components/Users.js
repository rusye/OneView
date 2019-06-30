import React, { useState, useEffect } from "react";
import { normalizeResponseErrors } from "../functions/normalizeResponse";

export default function Users(props) {
  const [resultsToDisplay, setResultsToDisplay] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);
  const [serverMessage, setServerMessage] = useState(null);

  const fetchUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        if (res.length > 0) {
          setResultsToDisplay(<p>I have some users for you</p>);
          // setResultsToDisplay(
          //   rcvdUsers.map((columns and rows) => {
          //     return (
          //       // display the results
          //     );
          //   })
          // );
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
  }, []);

  return (
    <div>
      {fetchingData ? <p>Fetching Users</p> : resultsToDisplay}
      {serverMessage ? <div>{serverMessage}</div> : null}
    </div>
  );
}
