import React from "react";
import Exam from "./exam";
import { withRouter } from "react-router-dom";
import AddExam from "./addExam";
import { getAllExams, deleteExamsByID, updateSubject, addExam } from "../api";

class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Make an API Call to Delete a Subject
  deleteExams = id => {
    console.log("The Subject ID to Delete", id);

    deleteExamsByID(id)
      .then(response => {
        console.log(`The Exam with the ID ${id} has been deleted.`);

        const newExamList = this.props.exam.filter(exam => {
          return exam._id !== id;
        });

        this.props.setExams(newExamList);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    // let allExams = <h4>No Exams!</h4>;
    let allExams = this.props.exam.map((exams, index) => {
      return (
        console.log(exams.Name),
        (
          <Exam
            name={exams.Name}
            Date={exams.Date}
            // deleteExams={this.deleteExams}
            key={index}
          />
        )
      );
    });
    // if (this.props.Exams.length > 0) {
    //   allExams = this.props.Exams.map((exams, index) => {
    //     return (
    //       <Exam
    //         name={exams.Name}
    //         Date={exams.Date}
    //         // deleteExams={this.deleteExams}
    //         key={index}
    //       />
    //     );
    //   });
    // }
    return (
      <>
        <h3>All Exams</h3>
        {allExams}
        <AddExam AddExams={this.props.AddExams} id={this.props.id} />
      </>
    );
  }
}

export default withRouter(Exams);
