import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchCashComponent from "./components/SearchCashComponent";
import CashListComponent from "./components/CashListComponent";
import CashForm from "./components/CashForm";
import LoginForm from "./components/LoginForm";
import LoginFormComponent from "./components/LoginFormComponent";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route path="/login" component={LoginForm}></Route> */}
        {/* <Route path="/login" component={LoginFormComponent}></Route> */}
        <Route path="/view-form" component={CashForm} />
        <Route path="/view-cashList" component={CashListComponent}></Route>
        <Route path="/view-search" component={SearchCashComponent}></Route>
      </Router>
    );
  }
}
export default App;
