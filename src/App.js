import "./App.css";
import React, { useState, useMemo } from "react";
import { TextField } from "@material-ui/core";
import ScreenOne from "./dataTable";
import ScreenTwo from "./dataTable2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  const [select, setSelected] = useState([]);
  const [inpt, setInpt] = useState("");

  const data = [
    { srno: 1, name: "Smruti", grade: "electrical", percentage: "92%" },
    { srno: 2, name: "John", grade: "I.T.", percentage: "85%" },
    { srno: 3, name: "Simmy", grade: "mechanical", percentage: "86%" },
    { srno: 4, name: "Ishan", grade: "I.T.", percentage: "75%" },
    { srno: 5, name: "Piyush", grade: "electrical", percentage: "56%" },
    { srno: 6, name: "Satyam", grade: "agriculture", percentage: "33%" },
    { srno: 7, name: "Sarvjeet", grade: "I.T.", percentage: "78%" },
    { srno: 8, name: "Shatanjay", grade: "agriculture", percentage: "69%" },
    { srno: 9, name: "Shubhesh", grade: "electrical", percentage: "83%" }
  ];

  let srno = 0;
  const newData = select.map(el => {
    srno = srno + 1;
    let newObj = {
      srno: srno,
      name: data[el].name,
      grade: data[el].grade,
      percentage: data[el].percentage
    };

    return newObj;
  });

  const columns = [
    {
      name: "srno",
      label: "Sr.No.",
      options: {
        filter: false,
        sort: false,
        searchable: false
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        searchable: true
      }
    },
    {
      name: "grade",
      label: "Grade",
      options: {
        filter: true,
        sort: false,
        searchable: false
      }
    },
    {
      name: "percentage",
      label: "Percentage",
      options: {
        filter: false,
        sort: false,
        searchable: false
      }
    }
  ];

  const options1 = {
    filterType: "checkbox",
    onRowSelectionChange: (a, b, c) => {
      setSelected(c);
    },
    pagination: false,
    search: false,
    tableBodyHeight: "50vh",
    rowsSelected: select,
    download: false,
    searchText: inpt,
    selectableRows: "multiple",
    selectToolbarPlacement: "none",
    print: false,
    viewColumns: false
  };

  const options2 = {
    filterType: "checkbox",
    search: false,

    selectableRows: "none",
    download: false,
    print: false,
    searchText: inpt,
    tableBodyHeight: "50vh",

    viewColumns: false,

    pagination: false
  };
  const handleChange = e => {
    setInpt(e.target.value);
  };

  return (
    <div className="app">
      <Router>
        <div className="searchBox">
          <span>Name: </span>
          <TextField onChange={handleChange} placeholder="Search Name" />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/screenone" />} />
          <Route
            exact
            path="/screenone"
            render={() => (
              <ScreenOne
                next={true}
                columns={columns}
                options={options1}
                data={data}
              />
            )}
          />
          <Route
            exact
            path="/screentwo"
            render={() => (
              <ScreenTwo data={newData} columns={columns} options={options2} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
