import React from 'react';

class Subject extends React.Component {
  deleteSubject = (event) => {
    event.preventDefault();
    this.props.deleteSubject(this.props.id);
  }

  render() {
    return (
      <div className="subject">
        {/* Subject name & subject Code  & student Grade */}
        <h2> Subject Name: {this.props.name}</h2>
        <sub>Subject Code: {this.props.subjectCode}</sub>
        <p>
       Grade: {this.props.grade}
        </p>
        <a href="#" onClick={this.deleteSubject}>Delete</a>
      </div>
    );
  }
}

export default Subject;