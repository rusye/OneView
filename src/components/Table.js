import React from "react";
import "./Table.css";

export default function Table(props) {
  // This takes the string dot notation and changes it to a object reference
  const index = (obj, i) => {
    return obj[i];
  };

  return (
    <table>
      {/* The columns */}
      <tbody>
        <tr>
          {props.columns.map(column => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </tbody>

      {/* The rows */}
      {props.rows.map(row => {
        return (
          <tbody key={row.id}>
            <tr>
              {props.columnKeys.map(columnKey => {
                return (
                  <td key={columnKey.split(".").reduce(index, row)}>
                    {columnKey.split(".").reduce(index, row)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
