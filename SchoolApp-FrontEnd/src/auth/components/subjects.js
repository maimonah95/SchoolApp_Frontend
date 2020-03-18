import React from "react";
import Subject from "./subject";
import { withRouter } from "react-router-dom";
import AddSubject from "./addSubject";
import { getAllSubjects, deleteSubjectByID, updateSubject } from "../api";

class Subjects extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isadd: false,
    isedit: false,
    tempsubject: {},
    Name: "",
    SubjectCode: "",
    Level: "",
    _id: "",
    subjects: []
  };
  // for set the new subject array after add
  setSubjects = newSubject => {
    console.log("students", newSubject);
    this.setState({ subjects: newSubject });
  };

  // setSubjects = subjects => {
  //   let Onesubject = {};
  //   let gatherExam = subjects.map((data, index) => {
  //     Onesubject.Name = data.Name;
  //     Onesubject.SubjectCode = data.SubjectCode;
  //     Onesubject.Level = data.Level;
  //     Onesubject.Exams = data.Exam;
  //     Onesubject.ID = data._id;
  //   });
  //         return (
  //           console.log("data : ", Onesubject),
  //           this.setState({ subjects:  Onesubject})
  //         );
  //   console.log("Data is :", Onesubject);
  // };
  //to set the form to hide after add new subject
  setShowform = check => {
    this.setState({ isadd: check });
  };

  componentDidMount() {
    // Make an API Call to Get all Subjects
    getAllSubjects()
      .then(response => {
        console.log("res : ", response.data.subjects);
        //save subject list in subject state
        this.setState({ subjects: response.data.subjects });
        // this.props.setSubjects(response.data.subjects);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }

  // Make an API Call to Delete a Subject
  deleteSubject = id => {
    console.log("The Subject ID to Delete", id);
    deleteSubjectByID(id)
      .then(response => {
        console.log(`The Subject with the ID ${id} has been deleted.`);
        const newSubjectsList = this.state.subjects.filter(subject => {
          return subject._id !== id;
        });
        this.setState({ subjects: newSubjectsList });
        // this.props.setSubjects(newSubjectsList);
      })
      .catch(error => {
        console.log("API Delete ERROR:", error);
      });
  };

  //to toggle the form to show for add new subject
  addnewsubject = e => {
    e.preventDefault();
    const doesShow = this.state.isadd;
    // console.log("work");
    this.setState({ isadd: !doesShow });
  };
  editSubject = (isclick, subjectInfo) => {
    console.log("subject To update", subjectInfo);
    this.setState({
      isedit: isclick,
      tempsubject: subjectInfo
    });
  };

  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      _id: this.state.tempsubject._id
    });
  };
  handleUpdate = () => {
    const oneSub = {
      subject: {
        Name: this.state.Name,
        SubjectCode: this.state.SubjectCode,
        Level: this.state.Level,
        _id: this.state._id
      }
    };
    const oneSub1 = {
      Name: this.state.Name,
      SubjectCode: this.state.SubjectCode,
      Level: this.state.Level,
      _id: this.state._id
    };
    console.log(oneSub, "id ", this.state._id);
    updateSubject(this.state._id, oneSub)
      .then(response => {
        const newSubject = [...this.state.subjects];
        const indexOfSubject = this.state.subjects.findIndex(
          subject => subject._id === this.state._id
        );
        console.log(
          `The Subject with the ID ${this.state._id} has been updated.`,
          response.data
        );
        newSubject.splice(indexOfSubject, 1, oneSub1);
        this.setSubjects(newSubject);
        // this.setSubjects(newSubject);
        ///////!!!!!!!
        this.setState({ isedit: false });
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          SubjectCode: "",
          Level: ""
        });
      });
  };

  render() {
    let allSubjects = <h4>No Subjects!</h4>;
    if (this.state.subjects.length > 0) {
      allSubjects = this.state.subjects.map((subject, index) => {
        return (
          <Subject
            editSubject={this.editSubject}
            name={subject.Name}
            subjectCode={subject.SubjectCode}
            level={subject.Level}
            id={subject._id}
            deleteSubject={this.deleteSubject}
            key={index}
          />
        );
      });
    }
    // to render the form comp after the value is click
    let addnewsubj = <div></div>;
    if (this.state.isadd) {
      addnewsubj = (
        <AddSubject
          setShowform={this.setShowform}
          subjects={this.state.subjects}
          setSubjects={(n) => {this.setSubjects(n);
          }}
        />
      );
    }
    // for Edit subject form
    let editsubject = <div></div>;
    if (this.state.isedit) {
      editsubject = (
        <div>
          <div className="row">
            <div className="col">
              <label> name</label>
              <input
                type="text"
                name="Name"
                value={this.state.Name}
                onChange={this.Changehandler}
                className="form-control"
                placeholder={this.state.tempsubject.Name}
              />
            </div>
            <div className="col">
              <label>SubjectCode</label>
              <input
                type="text"
                onChange={this.Changehandler}
                className="form-control"
                placeholder={this.state.tempsubject.subjectCode}
                name="SubjectCode"
                value={this.state.SubjectCode}
              />
            </div>
            <div className="col">
              <label>Level</label>
              <input
                type="text"
                onChange={this.Changehandler}
                className="form-control"
                placeholder={this.state.tempsubject.Level}
                name="Level"
                value={this.state.Level}
              />
            </div>
          </div>
          <button
            onClick={this.handleUpdate}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <h2>subject List</h2>
        {addnewsubj}
        {editsubject}
        <br />
        <button className="btn btn-primary" onClick={this.addnewsubject}>
          Add new subject
        </button>
        <br />
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>name</th>
              <th>subject code </th>
              <th>Level</th>
              {/* <th>Exams</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{allSubjects}</tbody>
        </table>
      </div>
    );
  }
}


export default withRouter(Subjects);

