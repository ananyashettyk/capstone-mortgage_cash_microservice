import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
// import Form from "./common/Form";
// import auth from "../services/authService";

class LoginFormComponent extends Component {
  state = {
    data: { username: "", password: "" },
    response: "",
    errors: {},
    showMe: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    window.location = "/view-form";
    console.log("Submitted");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="col-md-3  move-left offset-md-4">
        <h2>Cash Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            placeholder="username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            placeholder="password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button
            disabled={this.validate()}
            className="btn bg-info btn-bg"
            style={{ marginTop: "10px", marginLeft: "140px" }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default LoginFormComponent;
