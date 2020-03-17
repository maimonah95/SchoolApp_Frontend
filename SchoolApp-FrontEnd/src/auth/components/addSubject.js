import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { addNewSubject } from "../api";
import messages from "../messages";

class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      SubjectCode: "",
      Level: "",
      Teacher: "",
      Exam: ""
    };
  }
  Changehandler = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitHandeler = e => {
    const { alert, history } = this.props;
    e.preventDefault();
    console.log("this is state", this.state);
    const newSub = {
      subject: {
        Name: this.state.Name,
        SubjectCode: this.state.SubjectCode,
        Level: this.state.Level
        // Teacher: this.state.Teacher
      }
    };
    console.log(newSub);
    addNewSubject(newSub)
      .then(() => alert(messages.addSubSuccess, "success"))
      .then(() => history.push("/"))
      .then(response => {
        console.log("subject  has been added", response.data);
        this.props.AddSubjects(newSub);
        // this.props.addNewSubject(response.data);
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          SubjectCode: "",
          Level: ""
        });
        // alert(messages.addSubFailure, "danger");
      });
  };
  render() {
    const { Name, SubjectCode, Level } = this.state;
    return (
      <div>
        <br/>
        <br/>
        <form onSubmit={this.SubmitHandeler}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={Name}
              onChange={this.Changehandler}
              className="form-control"
              placeholder=" Name"
            />
          </div>
          <div className="form-group">
            <label>Code</label>
            <input
              type="text"
              name="SubjectCode"
              value={SubjectCode}
              onChange={this.Changehandler}
              className="form-control"
              placeholder=" Code"
            />
          </div>
          <div className="form-group">
            <label>Level</label>
            <input
              type="text"
              name="Level"
              value={Level}
              onChange={this.Changehandler}
              className="form-control"
              placeholder=" Level"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddSubject);
