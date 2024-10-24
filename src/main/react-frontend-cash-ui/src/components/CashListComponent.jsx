import React, { Component } from "react";
import CashService from "../services/CashService";

class CashListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashId: this.props.match.params.cashId,
      cashes: [],
      errResp: "",
    };
  }

  componentDidMount() {
    CashService.getCashesById(this.state.cashId)
      .then((resp) => {
        console.log(resp.data);
        if (resp.request.status !== 200) {
          console.log("=========== >>>>>>>>>>>>>>>>>>>>" + resp);
          throw Error("getCash exception");
        }
        this.setState({ cashes: resp.data });
      })
      .catch((err) => {
        console.log("catch getcash exception: " + err.response);
      });
  }

  render() {
    return (
      <div>
        <div className="flex text-danger">
          <p className="m-auto">{this.state.errResp}</p>
        </div>
        <h4 className="text-center">List Of Cash Information</h4>
        <div className="row">
          <table className="table-stripped   table-bordered table-sm">
            <thead class="thead-dark">
              <tr className="bg-info">
                <th>AccountHolderName</th>
                <th>AccountName</th>
                <th>AccountReference</th>
                <th>Aer</th>
                <th>Amount</th>
                <th>BalanceDate</th>
                <th>OverdraftLimit</th>
                <th>ProviderID</th>
                <th>ProviderName</th>
                <th>SortCode</th>
                <th>Count</th>
                <th>EarliestDate</th>
                <th>Iban</th>
              </tr>
            </thead>

            <tbody>
              {this.state.cashes.map((cash) => (
                <tr key={cash.accountHolderName}>
                  <td>{cash.accountHolderName}</td>
                  <td>{cash.accountName}</td>
                  <td>{cash.accountReference}</td>
                  <td>{cash.aer}</td>
                  <td>{cash.amount}</td>
                  <td>{cash.balanceDate}</td>
                  <td>{cash.iban}</td>
                  <td>{cash.overdraftLimit}</td>
                  <td>{cash.providerID}</td>
                  <td>{cash.providerName}</td>
                  {/* //Need to fix back end for UI */}
                  {/* <td>{cash.transactionData.count}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CashListComponent;
