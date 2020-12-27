import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./dataTable2.css";

const DataTable = props => {
  // console.log(props.options.onRowSelectionChange);
  return (
    <div className="table">
      <MUIDataTable
        title={"Student List"}
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
        to="/screenone"
        // className="button1"
      >
        <Button className="button2">Back</Button>
      </Link>
    </div>
  );
};

export default DataTable;

//
