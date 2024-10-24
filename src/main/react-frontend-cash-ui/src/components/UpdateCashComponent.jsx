import React, { Component, useState } from "react";
import CashService from "../services/CashService";
import axios from "axios";
import { Container, Grid, Header, List } from "semantic-ui-react";

class UpdateCashComponent extends Component {
  constructor(props) {
    super(props);
    const [cashId, setCashId] = useState("");
    const [accountName, setAccountName] = useState("");
    this.state = {
      cashId: "",
      cashDetails: [],
      errResp: "",
    };
  }

  changeCashHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchExistingCashDetails = (e) => {
    CashService.getCashById(this.state.cashId)
      .then((resp) => {
        if (resp.request.status !== 200) {
          console.log("=========== >>>>>>>>>>>>>>>>>>>>" + resp.request.status);
          throw Error("getCash exception");
        }
        this.setState({ cashDetails: JSON.stringify(resp.data) });
      })
      .catch((err) => {
        console.log("catch getCash exception: " + err.response);
        this.setState({ errResp: err });
      });
  };

  render() {
    const {
      cashId,
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
      <div className="App">
        <h1>Update User Data With API </h1>
        <table border="1" style={{ float: "left" }}>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Operations</td>
            </tr>
            {this.state.cashDetails.map((item, i) => (
              <tr key={i}>
                <td>{item.cashId}</td>
                <td>{item.accountName}</td>
                <td>{item.cashId}</td>
                <td>{item.cashId}</td>
                <td>
                  {/* <button onClick={() => deleteUser(item.cashId)}> */}
                  Delete
                  {/* </button> */}
                </td>
                <td>
                  {/* <button onClick={() => selectUser(item.cashId)}> */}
                  Update
                  {/* </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <input
            type="text"
            value={this.state.cashId}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            // value={cashId}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            // value={cashId}
            // onChange={(e) => {
            //   setMobile(e.target.value);
            // }}
          />{" "}
          <br />
          <br />
          <button>Update User</button>
        </div>
      </div>

      //   <div>
      //     <h4 className="text-center">Enter the Id to Update</h4>
      //     <input
      //       placeholder="Cash Id"
      //       name="cashId"
      //       className="form-control"
      //       onChange={this.changeCashHandler}
      //     />
      //     <button
      //       type="submit"
      //       className="btn bg-info btn-sm"
      //       onClick={this.fetchExistingCashDetails}
      //       style={{ marginLeft: "200px" }}
      //     >
      //       Update Cash
      //     </button>
      //     <textarea
      //       name="body"
      //       onChange={this.changeCashHandler}
      //       value={this.state.cashDetails}
      //     />
      //     <div>
      //       <input
      //         type="text"
      //         value={cashId2}
      //         onChange={this.changeCashHandler}
      //       />{" "}
      //       <br />
      //       <br />
      //       <button onClick={this.changeCashHandler}>Update User</button>
      //     </div>
      //   </div>
      //   <div>
      //     <div className="flex text-danger">
      //       <p className="m-auto">{this.state.errResp}</p>
      //     </div>
      //     <h4 className="text-center">List Of cashDetails</h4>
      //     <div className="row">
      //       <table className="table-stripped   table-bordered table-sm">
      //         <thead class="thead-dark">
      //           <tr className="bg-info">
      //             <th>Cash Id</th>
      //             <th>Account Name</th>
      //             <th>Type</th>
      //             <th>provider Name</th>
      //             <th>Provider Id</th>
      //           </tr>
      //         </thead>

      //         <tbody>
      //           {this.state.cashDetails.map((cash) => (
      //             <tr>
      //               {/* <td>{cash.cashId}</td> */}
      //               <td>{cash.accountName}</td>
      //               <td>{cash.type}</td>
      //               <td>{cash.providerName}</td>
      //               <td>{cash.providerId}</td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>
      //     </div>
      //     <button onClick={this.changeCashHandler}>Update User</button>
      //   </div>
    );
  }
}

export default UpdateCashComponent;
