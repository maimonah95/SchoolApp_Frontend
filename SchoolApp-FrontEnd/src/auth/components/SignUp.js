import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AddNewAdmin, signIn } from "../AdminAPI";
import messages from "../messages";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      Gender: "",
      Phone: ""
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
    const newAdmin = {
      admin: {
        Name: this.state.Name,
        Email: this.state.Email,
        Password: this.state.Password,
        Gender: this.state.Gender,
        Phone: this.state.Phone
      }
    };
    console.log(newAdmin);
    AddNewAdmin(newAdmin)
      .then(() => signIn(this.state))
      // .then(response => {
      //   console.log("admin  has been added", response.data);
      // })
      // // console.log(this.state)
       .then(res => setUser(res.data))
      .then(() => alert(messages.signUpSuccess, "success"))
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({
          Name: "",
          Email: "",
          Password: "",
          Gender: "",
          Phone: ""
        });
        alert(messages.signUpFailure, "danger");
      });
  };

  render() {
    const { Name, Email, Password, Gender, Phone } = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitHandeler}>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={Name}
              onChange={this.Changehandler}
              className="form-control"
              placeholder=" name"
            />
          </div>
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
          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              name="Gender"
              value={Gender}
              onChange={this.Changehandler}
              className="form-control"
              placeholder="Gender"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="Phone"
              value={Phone}
              onChange={this.Changehandler}
              className="form-control"
              placeholder="966-555-555"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
