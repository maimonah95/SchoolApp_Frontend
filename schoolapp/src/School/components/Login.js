import React, { Component } from "react";
import { LoginAPI } from "../AdminAPI";
import messages from "../messages";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: ""
    };
  }

  Changehandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitHandeler = (e) => {
        e.preventDefault();
        // const { alert, history, setUser } = this.props;
        console.log("this is state", this.state);
        LoginAPI(this.state)
          .then(() => alert(messages.signInSuccess, "success"))
          .catch(error => {
            console.error(error);
            this.setState({ Email: "", Password: "" });
            alert(messages.signInFailure, "danger");
          });

  };
  render() {
    const { Email, Password } = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitHandeler}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="Email"
              value={Email}
              onChange={this.Changehandler}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={Password}
              onChange={this.Changehandler}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
        {/* <h3>React Login Component</h3> */}
      </div>
    );
  }
}
