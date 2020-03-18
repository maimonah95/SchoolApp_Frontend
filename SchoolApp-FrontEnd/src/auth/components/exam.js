import React, { Component } from "react";

export default class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Date: ""
    };
  }
  componentWillMount = () => {
    this.setState({
      Name: this.props.name,
      Date: this.props.Date
    });
  };
  updateExam = event => {
    event.preventDefault();
    console.log("update", this.state);
    this.props.updatetheSubjects(this.props.id, this.state);
  };
  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteExam = event => {
    event.preventDefault();
    this.props.deleteSubject(this.props.id);
  };
  render() {
    const { Name, Date } = this.state;
    return (
      <div>
        <input
          type="text"
          name="Name"
          value={Name}
          onChange={this.Changehandler}
        />
        <br />
        <input
          type="text"
          name="Date"
          value={Date}
          onChange={this.Changehandler}
        />
        <br />
        <button onClick={this.deleteExam}>Delete</button>
        <button onClick={this.updateExam}>Update</button>
      </div>
    );
  }
}
