import React from "react";
import "./Table.css";

export default function Table(props) {
  
  const index = (obj, i) => {
    return obj[i];
  }

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
