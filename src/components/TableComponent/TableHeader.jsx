import React from "react";

const TableHeader = ({ tableHeader }) => {
  return tableHeader
    ?.filter((header) => header?.show)
    ?.map((header, index) => (
      <div key={index} className="table-cell">
        {header?.columnName}
      </div>
    ));
};

export default TableHeader;
