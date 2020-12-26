import "./App.css";
import React, { useState, useMemo } from "react";
import { TextField } from "@material-ui/core";
import ScreenOne from "./dataTable";
import ScreenTwo from "./dataTable";
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
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" }
  ];

  const newData = select.map(el => {
    return data[el];
  });

  const columns = [
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
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
        searchable: false
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: false,
        sort: false,
        searchable: false
      }
    },
    {
      name: "state",
      label: "State",
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
    selectableRows: "none",
    download: false,
    print: false,
    searchText: inpt,

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
          <TextField onChange={handleChange} placeholder="Search Name" />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/screenone" />} />
          <Route
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
