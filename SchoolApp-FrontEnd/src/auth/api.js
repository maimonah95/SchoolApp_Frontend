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


  // Update existing Subject
 const updateSubject = (id, subject) => {
   return axios.patch(`${apiUrl}/subjects/${id}`, subject);
 };
  // Create new Exam
  const addExam = exam => {
    return axios.post(`${apiUrl}/subjects/:SubjectCode/exams`);
  };

  export {
    getAllSubjects,
    deleteSubjectByID,
    addNewSubject,
    updateSubject,
    addExam
  };





