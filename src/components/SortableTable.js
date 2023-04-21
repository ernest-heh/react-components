import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  // ACCESS CONFIG & DATA FROM PROPS (DESTRUCTURING)
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    // IF .sortValue, RETURN COLUMN + CUSTOM HEADER
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  // ONLY SORT DATA IF sortOrder && sortBy !null
  // MAKE A COPY OF 'data' prop (BECAUSE .sort MUTATES THE ORIGINAL)
  // FIND THE CORRECT sortValue FUNCTION & USE IT FOR SORTING
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  // PASS ALL PROPS TO TABLE COMPONENT, OVERRIDE CONFIG WITH updatedConfig
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return "[BOTH]";
  }

  if (sortOrder === null) {
    return "[BOTH]";
  } else if (sortOrder === "asc") {
    return "[UP]";
  } else if (sortOrder === "desc") {
    return "[DOWN]";
  }
}

export default SortableTable;
