import Table from "./Table";

function SortableTable(props) {
  // ACCESS CONFIG FROM PROPS
  const { config } = props;

  const handleClick = (label) => {
    console.log(label);
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
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  // PASS ALL PROPS TO TABLE COMPONENT, OVERRIDE CONFIG WITH updatedConfig
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
