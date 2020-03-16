import apiUrl from '../apiConfig'
import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY


  
  // Create new Exam
   const addExam = exam => {
    return axios.post(`${apiUrl}/subjects/:SubjectCode/exams`);
  };
  export  {addExam}
  

  
