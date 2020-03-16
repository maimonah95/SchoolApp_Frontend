import apiUrl from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Subjects
const getAllSubjects = () => {
  return axios.get(`${apiUrl}/subjects`);
};

// Delete Subject by ID
const deleteSubjectByID = id => {
  return axios.delete(`${apiUrl}/subjects/${id}`);
};

//Add article
const addNewSubject = subject => {
  return axios.post(`${apiUrl}/AddNewSub`, subject);
};


//   // Update existing Subject
// export const updateSubject = (subject, id) => {
//   return axios.patch(`${apiUrl}/subjects/${id}`, { subject});
// };

<<<<<<< HEAD:SchoolApp-FrontEnd/src/auth/api.js
export { getAllSubjects, deleteSubjectByID, addNewSubject };
=======
////////////////////////////////////////////////////////////////////
  
  // Create new Exam
  const addExam = exam => {
    return axios.post(`${apiUrl}/subjects/:SubjectCode/exams`);
  };

export { getAllSubjects, deleteSubjectByID , addExam};

  

  
>>>>>>> ec9cfafbce4632213942e88a4dfc6e5ca5aac188:schoolapp/src/School/api.js
