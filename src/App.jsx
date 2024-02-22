import { useState } from "react";
import TableContainer from "./components/TableComponent/TableContainer";
import { tableData as data, tableHeader as headerData } from "./db";
import FilterContainer from "./components/FilterComponent/FilterContainer";

function App() {
  const [tableHeader, setTableHeader] = useState(headerData);
  const [tableData, setTableData] = useState(data);

  return (
    <div>
      <FilterContainer
        tableHeader={tableHeader}
        setTableHeader={setTableHeader}
      />
      <TableContainer tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
}

export default App;
