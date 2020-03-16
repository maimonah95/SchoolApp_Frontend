import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { signIn } from "../AdminAPI";
import messages from "../messages";

class SignIn extends Component {
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

  SubmitHandeler = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;

    signIn(this.state)
      .then(res => setUser(res.data))
      // .then(response => {
      //   console.log("admin  has been loged", response.data);
      // })
      .then(() => alert(messages.signInSuccess, "success"))
      .then(() => history.push("/"))
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

export default withRouter(SignIn);
