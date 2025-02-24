import React, { Component } from "react";
// import { useState, useEffect } from "react";
import CashService from "../services/CashService";

class SearchCashComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashId: this.props.match.params.cashId,
      showMe: false,
      ontology: {},
      errResp: "",
      err: "",
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

    this.changeOntologyIdHandler = this.changeOntologyIdHandler.bind(this);
    this.viewOntology = this.viewOntology.bind(this);
  }

  changeOntologyIdHandler = (event) => {
    this.setState({ cashId: event.target.value });
    console.log("changeOntologyIdHandler===>" + event.target.value);
  };

  viewOntology = (e) => {
    e.preventDefault();
    console.log("viewOntology ====>" + this.state.cashId);
    CashService.getCashById(this.state.cashId)
      .then((res) => {
        console.log("res >>>>>>>>>>>>>>>>>>>>>:" + res);
        this.state.showMe = true;
        this.setState({ ontology: res.data });
        this.state.errshowMe = true;
        console.log("viewOntology  in then ====>");
      })
      .catch((err) => {
        if (err.response === null) {
          this.state.err = err.message;
          console.log("err.response:" + err.message);
        }

        this.state.showMe = false;
        if (err.message !== "Network Error")
          this.setState({
            errResp: JSON.stringify(err.response).substring(10, 129),
          });
        else {
          this.setState({
            errResp: JSON.stringify(err.message),
          });
        }
        console.log("viewOntology Clicked" + this.state.errResp);
      });
  };

  // viewOntologies = (e) => {
  //   e.preventDefault();
  //   // this.props.history.push("/view-cashList");
  //   window.location="/view-cashList";
  //   console.log("viewOntologies Clicked");
  // };

  render() {
    return (
      <div>
        <div className="outer-container">
          <div className="row">
            <div className="card col-md-8 offset-md-2">
              <h4 className="text-center">Ontology Meta Data</h4>
              <div className="card-body">
                <form className="form-control-lg" onSubmit={this.handleSubmit}>
                  <div className="form-group move-left">
                    <input
                      placeholder="ontology ID"
                      name="OntologyId"
                      className="form-control"
                      value={this.state.cashId}
                      onChange={this.changeOntologyIdHandler}
                    />
                  </div>

                  <button
                    className="btn bg-info btn-sm"
                    onClick={this.viewOntology}
                    style={{ marginLeft: "250px" }}
                  >
                    Search
                  </button>
                  {/* <button
                    className="btn bg-info btn-sm"
                    onClick={this.viewOntologies.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    ViewOntologies
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {this.state.showMe ? (
          <div className="card col-md-8  offset-md-2">
            <h5 className="text-center">Ontology Details</h5>
            <div className="card-body">
              <div className="row">
                <label>
                  <strong>cashId:</strong>
                  {this.state.cashId}
                </label>
              </div>

              <div className="row">
                <label>
                  <strong>Title:</strong>
                  {this.state.ontology.accountName}{" "}
                </label>
              </div>
              <div className="row">
                <label>
                  <strong> Description:</strong>
                  {this.state.ontology.accountHolderName}{" "}
                </label>
              </div>
              <div className="row">
                <label>
                  <strong>List Of Definition Properties:</strong>
                  {/* {this.state.ontology.definitionProperties} */}
                </label>
              </div>

              <div className="row">
                <label>
                  <strong>List of Synonym Properties:</strong>
                  {/* {this.state.ontology.synonymProperties}{" "} */}
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

export default SearchCashComponent;
