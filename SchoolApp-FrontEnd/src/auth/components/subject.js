import React from "react";
// import { updateSubject } from "../api";
class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subjectCode: "",
      level: ""
    };
  }

  componentWillMount = () => {
    this.setState({
      name: this.props.name,
      subjectCode: this.props.subjectCode,
      level: this.props.level
    });
  };
  updateSubject  = event => {
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

  deleteSubject = event => {
    event.preventDefault();
    this.props.deleteSubject(this.props.id);
  };

  render() {
    const { name, subjectCode, level } = this.state;
    return (
      <div className="subject">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.Changehandler}
        />
        <br />
        <input
          type="text"
          name="subjectCode"
          value={subjectCode}
          onChange={this.Changehandler}
        />
        <br />
        <input
          type="text"
          name="Level"
          value={level}
          onChange={this.Changehandler}
        />
        <br />
        {/* Subject name & subject Code  & student Grade */}
        {/* <h2> Subject Name: {this.props.name}</h2>
        <sub>Subject Code: {this.props.subjectCode}</sub>
        <p>Level: {this.props.Level}</p> */}
        <button onClick={this.deleteSubject}>Delete</button>
        <button onClick={this.updateSubject}>Update</button>
      </div>
    );
  }
}

export default Subject;
