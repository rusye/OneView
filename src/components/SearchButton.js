import React from "react";
import "./SearchButton.css";

export default function SearchButton(props) {
  return (
    <button onClick={() => props.search(true)}>Click to view results</button>
  );
}
