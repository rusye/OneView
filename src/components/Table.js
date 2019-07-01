import React from "react";
import "./Table.css";

export default function Table(props) {
  return (
    <table>
      <tbody>
        <tr>
          {props.columns.map(column => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </tbody>

      {props.rows.map(row => {
        return (
          <tbody key={row.id}>
            <tr>
              <td key={row.name}>{row.name}</td>
              <td key={row.email}>{row.email}</td>
              <td key={row.address.city}>{row.address.city}</td>
              <td key={row.company.name}>{row.company.name}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
