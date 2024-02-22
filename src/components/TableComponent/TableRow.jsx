import React from "react";

const TableRow = ({ tableData, tableHeader }) => {
  return tableData?.map((rowData, rowIndex) => (
    <div key={rowIndex} className="table-row">
      {tableHeader
        ?.filter((header) => header?.show)
        ?.map((header, cellIndex) => (
          <div key={cellIndex} className="table-cell">
            {rowData[header.columnName]}
          </div>
        ))}
    </div>
  ));
};

export default TableRow;
