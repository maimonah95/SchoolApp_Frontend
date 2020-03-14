import React from 'react';
import Subject from './subject';
import { getAllSubjects, deleteSubjectByID} from '../api';

class Subjects extends React.Component {
  componentDidMount() {
    // Make an API Call to Get all Subjects
    getAllSubjects()
      .then((response) => {
        this.props.setSubjects(response.data.subjects);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }

  // Make an API Call to Delete a Subject
  deleteSubject = (id) => {
    console.log('The Subject ID to Delete', id);

    deleteSubjectByID(id)
      .then((response) => {
        console.log(`The Subject with the ID ${id} has been deleted.`);

        const newSubjectsList = this.props.subjects.filter((subject) => {
          return subject._id !== id;
        });

        this.props.setSubjects(newSubjectsList);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }


  // Make an API Call to add a Subject

  render() {
    let allSubjects = <h4>No Subjects!</h4>;

    if (this.props.subjects.length > 0) {
      allSubjects = this.props.subjects.map((subject, index) => {
        return <Subject name={subject.Name}
                        subjectCode={subject.SubjectCode}
                        grade={subject.Level}
                        id={subject._id}
                        deleteSubject={this.deleteSubject}
                        key={index} />;
      });
    }

    return(
      <>
        <h3>All Subjects</h3>
        {allSubjects}
      </>
    );
  }
}

export default Subjects;