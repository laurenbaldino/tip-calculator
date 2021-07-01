import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    bill: 0,
    percent: 0,
    total: 0,
    tip: 0,
  };

  SetBill = (e) => {
    this.setState({
      bill: Number(e.target.value),
    });
  };

  SetPercent = (e) => {
    this.setState({
      percent: Number(e.target.value),
    });
  };

  doMath = (e) => {
    e.preventDefault();
    console.log(this.state.percent);
    let tip = parseFloat(this.state.bill * this.state.percent).toFixed(2);
    this.setState({ tip: tip });
    let total = parseFloat(Number(this.state.bill) + Number(tip)).toFixed(2);
    this.setState({ total: total });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Tip Calculator</h2>
          <div className="row">
            <div className="col s12">
              Bill Amount:
              <div className="input-field inline">
                <input
                  id="email_inline"
                  className="validate"
                  type="Number"
                  placeholder="$"
                  value={this.state.bill}
                  onChange={this.SetBill}
                />
              </div>
              Tip Percentage:
              <div className="input-field inline">
                {/* <label>Choose Tip Percentage</label> */}
                <select
                  value={this.state.percent}
                  onChange={(e) => {
                    console.log(e);
                    this.setState({ percent: e.target.value });
                  }}
                  className="browser-default"
                >
                  <option selected disabled>Select One</option>
                  <option value={0}>0%</option>
                  <option value={0.05}>5%</option>
                  <option value={0.1}>10%</option>
                  <option value={0.15}>15%</option>
                  <option value={0.2}>20%</option>
                  <option value={0.25}>25%</option>
                </select>
              </div>
              <a
                onClick={this.doMath}
                style={{ marginRight: 10, backgroundColor: "grey" }}
                className="waves-effect waves-light btn"
              >
                Calculate
              </a>
            </div>
          </div>
        </div>
        <p>The tip is ${this.state.tip}, Making the total bill ${this.state.total}.</p>
      </div>
    );
  }
}
export default App;
