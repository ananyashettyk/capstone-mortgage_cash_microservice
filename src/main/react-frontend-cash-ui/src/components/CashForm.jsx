import React, { Component } from "react";
import CashService from "../services/CashService";
import axios from "axios";

class CashForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cashId: "",
      accountName: "",
      type: "",
      providerName: "",
      providerId: "",
      accountReference: "",
      accountHolderName: "",
      balanceDate: "",
      amount: "",
      aer: "",
      overdraftLimit: "",
      sortCodeAccountNumber: "",
      iban: "",
      cashContent: "",
    };
    this.getCashById = this.getCashById.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/cashService/getCash")
      .then((response) => {
        this.setState(this.state.cashContent, response.data);
        console.log("viewCash in then ====>" + this.state.cashContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCashById = (e) => {
    e.preventDefault();
    console.log("getCashById ====>");
    CashService.getCashById(this.state.cashId)
      .then((res) => {
        console.log("res >>>>>>>>>>>>>>>>>>>>>:", res);
        this.setState({ cashContent: res.data });
        this.setState.errshowMe = true;
      })
      .catch((err) => {
        if (err.response === null) {
          this.setState.err = err.message;
          console.log("err.response:" + err.message);
        }

        this.setState.showMe = false;
        if (err.message !== "Network Error")
          this.setState({
            errResp: JSON.stringify(err.response).substring(10, 129),
          });
        else {
          this.setState({
            errResp: JSON.stringify(err.message),
          });
        }

        console.log("viewCash Clicked" + this.state.errResp);
      });
    window.location = "/view-search";
  };

  deleteCashById = (e) => {
    e.preventDefault();
    console.log("deleteCashById ====>");
    CashService.deleteCash(this.state.cashId)
      .then((res) => {
        console.log("res >>>>>>>>>>>>>>>>>>>>>:", res);
        this.setState({ cash: res.data });
        this.setState.errshowMe = true;
        console.log("deleteCashById in then ====>");
      })
      .catch((err) => {
        if (err.response === null) {
          this.setState.err = err.message;
          console.log("err.response:" + err.message);
        }

        this.setState.showMe = false;
        if (err.message !== "Network Error")
          this.setState({
            errResp: JSON.stringify(err.response).substring(10, 129),
          });
        else {
          this.setState({
            errResp: JSON.stringify(err.message),
          });
        }
        console.log("DeleteCash Clicked" + this.state.errResp);
      });
  };

  updateCashById = (e) => {
    e.preventDefault();
    console.log("updateCashById ====>");
    alert("Enter the Id for Cash details to update");
    window.location = "/view-form";
    axios
      .post("http://localhost:8080/cashService/postCash", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  postCash = (e) => {
    this.setState({ accountName: e.target.value() });
  };

  postSubmitHandler = (e) => {
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

  getSubmitHandler = (e) => {
    e.preventDefault();
    console.log("getSubmitHandler>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    window.location = "/view-cashList";
  };

  changeCashHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      <div>
        <div className="outer-container">
          <div className="row">
            <div className="card col-md-8 offset-md-2">
              <h4 className="text-center">Cash Details</h4>
              <div className="card-body">
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

                  <button
                    type="submit"
                    className="btn bg-info btn-sm"
                    onClick={this.postSubmitHandler}
                    style={{ marginLeft: "60px" }}
                  >
                    Add Cash
                  </button>
                  <button
                    className="btn bg-info btn-sm"
                    onClick={this.getSubmitHandler}
                    style={{ marginLeft: "15px" }}
                  >
                    Display Cash
                  </button>
                  <button
                    className="btn bg-info btn-sm"
                    onClick={this.getCashById}
                    style={{ marginLeft: "15px" }}
                  >
                    Search Cash By Id
                  </button>
                  <button
                    className="btn bg-info btn-sm"
                    onClick={this.updateCashById}
                    style={{ marginLeft: "15px" }}
                  >
                    Update Cash
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.deleteCashById}
                    style={{ marginLeft: "15px" }}
                  >
                    Delete Cash
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {this.state.showMe ? (
          <div className="card col-md-8  offset-md-2">
            <h5 className="text-center">Cash Details</h5>
            <div className="card-body">
              <div className="row">
                <label>
                  <strong>CashId:</strong>
                </label>
              </div>

              <div className="row">
                <label>
                  <strong>Title:</strong>
                </label>
              </div>
              <div className="row">
                <label>
                  <strong> Description:</strong>
                </label>
              </div>
              <div className="row">
                <label>
                  <strong>List Of Definition Properties:</strong>
                </label>
              </div>

              <div className="row">
                <label>
                  <strong>List of Synonym Properties:</strong>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex  text-danger">
            <p className="m-auto ">{this.state.errResp}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CashForm;
