import React from "react";

const FilterContainer = ({ tableHeader, setTableHeader }) => {
  const handleClick = (value) => {
    const updatedHeader = tableHeader.map((item) => {
      if (item.columnName === value) {
        return {
          ...item,
          show: !item.show,
        };
      } else {
        return item;
      }
    });

    setTableHeader(updatedHeader);
  };

  return (
    <div style={{ margin: "30px" }}>
      {tableHeader?.map((column) => (
        <label key={column?.columnName} style={{ margin: "10px" }}>
          <input
            type="checkbox"
            checked={column?.show}
            onChange={() => handleClick(column?.columnName)}
          />
          {column?.columnName}
        </label>
      ))}
    </div>
  );
};

export default FilterContainer;
