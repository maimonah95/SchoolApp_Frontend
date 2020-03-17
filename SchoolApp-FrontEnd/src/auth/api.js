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

//Add Subject
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



// Get All Feeds
const getAllFeeds = () => {
  return axios.get(`${apiUrl}/feeds`);
};

// Delete Feed by ID
const deleteFeedByID = id => {
  return axios.delete(`${apiUrl}/feeds/${id}`);
};


//Add new feed
const addNewfeed = feed => {
  return axios.post(`${apiUrl}/AddFeed`, feed);
};

 // Update existing Feed
 const updateFeed = (id, feed ) => {
  return axios.patch(`${apiUrl}/feeds/${id}`, feed);
};


 


  export {
    getAllSubjects,
    deleteSubjectByID,
    addNewSubject,
    updateSubject,
    addExam,
    getAllFeeds,
    deleteFeedByID, 
    addNewfeed,
    updateFeed
  };





