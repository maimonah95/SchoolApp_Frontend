import React from "react";
import Subject from "./subject";
import { withRouter } from "react-router-dom";
import AddSubjects from "./addSubject";
import { getAllSubjects, deleteSubjectByID, updateSubject } from "../api";

class Subjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // Make an API Call to Get all Subjects
    getAllSubjects()
      .then(response => {
        this.props.setSubjects(response.data.subjects);
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

        const newSubjectsList = this.props.subjects.filter(subject => {
          return subject._id !== id;
        });

        this.props.setSubjects(newSubjectsList);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };
  updatetheSubjects = (id, stat) => {
    // const { alert, history } = this.props;
    // e.preventDefault();
    console.log("this is state", id, stat);
    const newSub = {
      subject: {
        Name: stat.name,
        SubjectCode: stat.subjectCode,
        Level: stat.Level
        // Teacher: this.state.Teacher
      }
    };
    console.log(newSub);
    updateSubject(id, newSub)
      .then(response => {
           const newSubject = [...this.props.subjects];
           const indexOfSubject = this.props.subjects.findIndex(
             subject => subject._id === id);
        console.log(
          `The Article with the ID ${id} has been updated.`,response.data);
        newSubject.splice(indexOfSubject, 1, newSub);
        this.props.setArticles(newSubject);
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          SubjectCode: "",
          Level: ""
        });
        // alert(messages.addSubFailure, "danger");
      })
  };

  render() {
    let allSubjects = <h4>No Subjects!</h4>;

    if (this.props.subjects.length > 0) {
      allSubjects = this.props.subjects.map((subject, index) => {
        return (
          <Subject
            name={subject.Name}
            subjectCode={subject.SubjectCode}
            Level={subject.Level}
            id={subject._id}
            deleteSubject={this.deleteSubject}
            updatetheSubjects={this.updatetheSubjects}
            key={index}
          />
        );
      });
    }
    return (
      <>
        <h3>All Subjects</h3>
        {allSubjects}
        <AddSubjects AddSubjects={this.props.AddSubjects} />
      </>
    );
  }
}

export default withRouter(Subjects);
