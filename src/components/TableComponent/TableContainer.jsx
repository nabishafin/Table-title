import React from "react";
import "./Table.css"; // Import your CSS file for styling
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TableContainer = ({ tableHeader, tableData }) => {
  return (
    <div className="table">
      <div className="table-row header">
        <TableHeader tableHeader={tableHeader} />
      </div>
      <TableRow tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default TableContainer;
