import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./dataTable.css";

const DataTable = props => {
  console.log(props.options.onRowSelectionChange);
  return (
    <div className="table">
      <MUIDataTable
        title={"Students List"}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          width: "100px",
          alignSelf: "flex-end"
        }}
        to="/screentwo"
        // className="button1"
      >
        <Button style={{ color: "white" }} className="button1">
          Next
        </Button>
      </Link>
    </div>
  );
};

// export default DataTable;

const Greeting = React.memo(DataTable, (props, nextProps) => {
  if (props.options.searchText !== nextProps.options.searchText) {
    // don't re-render/update
    return false;
  }
  return true;
});

export default Greeting;
