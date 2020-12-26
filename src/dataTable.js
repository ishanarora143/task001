import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DataTable(props) {
  return (
    <div className="table">
      <MUIDataTable
        title={"Employee List"}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />
      {props.next ? (
        <Button className="button">
          <Link to="/screentwo">Next</Link>
        </Button>
      ) : (
        <Button className="button">
          <Link to="/screenone">Back</Link>
        </Button>
      )}
    </div>
  );
}

export default DataTable;
