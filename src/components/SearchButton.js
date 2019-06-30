import React from "react";
import "./SearchButton.css";

export default function SearchButton(props) {
  return (
    <button onClick={() => props.search(true)} className="searchButton">
      Click to view results
    </button>
  );
}
