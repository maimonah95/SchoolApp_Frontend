import apiUrl from '../apiConfig';
import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Subjects
const getAllSubjects = () => {
  return axios.get(`${apiUrl}/subjects`);
};

// Delete Subject by ID
const deleteSubjectByID = (id) => {
  return axios.delete(`${apiUrl}/subjects/${id}`);
}


// Add new Subject 
const addNewSubjec = () => {
    return axios.create(`${apiUrl}/subjects/`);
  }

export { getAllSubjects, deleteSubjectByID, addNewSubjec };