import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { addNewSubject } from "../api";
import messages from "../messages";

class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: [],
      Name: "",
      SubjectCode: "",
      Level: "",
      Teacher: "",
      Exam: ""
    };
  }
  Changehandler = e => {
    // console.log(e.target.name);
    console.log(e.target.value);
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
        // this.props.AddSubject(newSub);
        // this.props.addNewSubject(response.data);
        const newSubjectts = [...this.props.subjects];
        const index = newSubjectts.indexOf(response.data);
        if (index !== -1) {
        } else {
          newSubjectts.push(response.data.subject);
        }
        this.props.setSubject(newSubjectts);
        this.props.setShowform(false);
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
        <br />
        <br />
        <form onSubmit={this.SubmitHandeler}>
          <div className="row">
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
          </div>
          <button
            type="submit"
            // onSubmit={this.SubmitHandeler}
            className="btn btn-primary"
          >
            {" "}
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddSubject);
