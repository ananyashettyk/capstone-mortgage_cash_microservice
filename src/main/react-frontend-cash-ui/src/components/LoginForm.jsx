import React, { Component } from "react";
import { Joi } from "joi-browser";
import Input from "./Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // console.log(result);
    // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    //need to get back
    // return error ? null : error.details[0].message;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    window.location = "/view-form";
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validatePropert(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
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
export default LoginForm;
