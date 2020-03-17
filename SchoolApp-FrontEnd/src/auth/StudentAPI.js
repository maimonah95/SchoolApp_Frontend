import apiUrl from '../apiConfig';
import axios from 'axios';
// INDEX, SHOW, CREATE, UPDATE, DESTROY
// Get All Students
const getAllStudent = () => {
    console.log(apiUrl);
    return axios.get(`${apiUrl}/students`);
};
//Delete Article by ID
const deleteStudentByID = (id) => {
    return axios.delete(`${apiUrl}/students/${id}`);
}
const addnewStudent = (data) => {
    // return axios.post(`${apiUrl}/students`, {student:{FirstName:data.FirstName,LastName:data.LastName,Gender:data.Gender,subject:data.subject,ID:data.ID}} );
    return axios.post(`${apiUrl}/students`, {student:data} );
}
const updateStudent = (data,id) => {
    return axios.patch(`${apiUrl}/students/${id}`,{student:data});
}
const getoneSubjects = (id) => {
    console.log(apiUrl);
    return axios.get(`${apiUrl}/subjects/${id}`);
};
export { getAllStudent,deleteStudentByID,getoneSubjects,addnewStudent,updateStudent };