import React from 'react';
import Student from './student';
import { getAllStudents} from '../api';

class Parent extends React.Component {
  componentDidMount() {
    // Make an API Call to Get all Subjects
    getAllStudents()
      .then((response) => {
        this.props.setallstudents(response.data.students);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }


  render() {
      return(
          <>
          </>
      );
  }
}

export default Parent;