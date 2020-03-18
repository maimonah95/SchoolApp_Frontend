import React from "react";
// import Exams from "./exams";
class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      SubjectCode: "",
      Level: "",
      isedit: false
    };
  }
  componentWillMount = () => {
    this.setState({
      name: this.props.name,
      subjectCode: this.props.subjectCode,
      level: this.props.level
    });
  };
  // updateSubject = e => {
  //   e.preventDefault();
  //   console.log("update", this.state);
  //   // this.props.editSubject("true", );
  // };
  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  deleteSubject = e => {
    e.preventDefault();
    console.log("delete id : ", this.props.id);
    this.props.deleteSubject(this.props.id);
  };
  render() {
    const { name, subjectCode, level } = this.state;
    let editsubject = <div></div>;
    if (this.state.isedit) {
      editsubject = (
        <div>
          <div className="row">
            <div className="col">
              <label> name</label>
              <input
                type="text"
                value={name}
                onChange={this.Changehandler}
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
              />
            </div>
            <div className="col">
              <label>SubjectCode</label>
              <input
                type="text"
                onChange={this.Changehandler}
                className="form-control"
                placeholder="Enter subjectCode"
                name="subjectCode"
                value={subjectCode}
              />
            </div>
            <div className="col">
              <label>Level</label>
              <input
                type="text"
                name="level"
                value={level}
                onChange={this.Changehandler}
              />
            </div>
            {/* <div className="col"> */}
            {/* <Exams exam={this.props.exams} id={this.props.id} /> */}
            {/* </div> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      );
    }
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.subjectCode}</td>
        <td>{this.props.level}</td>
        {/* <td>
          {" "}
          <Exams exam={this.props.exams} id={this.props.id} />
        </td> */}
        <td>
          <button onClick={this.deleteSubject} className="btn btn-danger">
            Delete
          </button>{" "}
          <button
            onClick={() => {
              this.props.editSubject("true", {
                Name: this.props.name,
                subjectCode: this.props.subjectCode,
                Level: this.props.level,
                _id: this.props.id
              });
            }}
            className="btn btn-secondary"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default Subject;
