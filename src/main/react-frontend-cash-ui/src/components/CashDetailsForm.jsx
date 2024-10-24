import React, { Component } from "react";
import axios from "axios";

class CashDetailsForm extends Component {
  state = {
    cash: [],
  };

  async componentDidMount() {
    const { data: cash } = await axios.get(
      "http://localhost:8080/cashService/getCash"
    );
    this.setState({ cash });
  }

  handleAdd = async (e) => {
    e.preventDefault();
    alert("Cash details saved in db");
    console.log("this.state : ", this.state);
    axios
      .post("http://localhost:8080/cashService/postCash", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await axios.put(
      "http://localhost:8080/cashService/updateCash/" + post.id,
      post
    );
    const posts = [...this.state.cash];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    await axios.delete(
      "http://localhost:8080/cashService/deleteCash/" + post.id
    );
    const posts = this.state.cash.filter((p) => p.id !== post.id);
    this.setState({ posts });
  };

  render() {
    const {
      cashId2,
      accountName,
      type,
      providerName,
      providerId,
      accountReference,
      accountHolderName,
      balanceDate,
      amount,
      aer,
      overdraftLimit,
      sortCodeAccountNumber,
      iban,
    } = this.state;
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>AccountName</th>
              <th>Type</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cash.map((post) => (
              <tr key={post.cashId}>
                <td>{post.accountName}</td>
                <td>{post.type}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form className="form-control-lg" onSubmit={this.handleSubmit}>
          <div className="form-group move-left">
            <input
              placeholder="ID"
              name="cashId"
              className="form-control"
              value={cashId2}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Account Name"
              name="accountName"
              className="form-control"
              value={accountName}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Type mandatory field"
              name="type"
              className="form-control"
              value={type}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Provider Name"
              name="providerName"
              className="form-control"
              value={providerName}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Provider ID"
              name="providerId"
              className="form-control"
              value={providerId}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Account Reference"
              name="accountReference"
              className="form-control"
              value={accountReference}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Account Holder Name"
              name="accountHolderName"
              className="form-control"
              value={accountHolderName}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Balance Date"
              name="balanceDate"
              className="form-control"
              value={balanceDate}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Amount"
              name="amount"
              className="form-control"
              value={amount}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Aer"
              name="aer"
              className="form-control"
              value={aer}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Overdraft Limit"
              name="overdraftLimit"
              className="form-control"
              value={overdraftLimit}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Sort Code Account Number"
              name="sortCodeAccountNumber"
              className="form-control"
              value={sortCodeAccountNumber}
              onChange={this.changeCashHandler}
            />
            <input
              placeholder="Iban"
              name="iban"
              className="form-control"
              value={iban}
              onChange={this.changeCashHandler}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CashDetailsForm;
