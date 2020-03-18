import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { addExam } from "../api";
import messages from "../messages";

class AddExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Date: ""
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
    const newExam = {
      Name: this.state.Name
      // Date: this.state.Date
      // Teacher: this.state.Teacher
    };
    console.log(newExam);
    addExam(newExam, this.props.id)
      //   .then(() => alert(messages.addSubSuccess, "success"))
      //   .then(() => history.push("/"))
      .then(response => {
        console.log("subject  has been added", response.data);
        // this.props.AddExams(newExam);
        // this.props.addNewSubject(response.data);
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          Date: ""
        });
        // alert(messages.addSubFailure, "danger");
      });
  };
  render() {
    const { Name, Date } = this.state;
    return (
      <div>
        <br />
        <br />
        <h3>Add new Exam</h3>
        <br />
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
          {/* <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="Date"
              value={Date}
              onChange={this.Changehandler}
              className="form-control"
              placeholder=" Date"
            />
          </div> */}
          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddExam);
