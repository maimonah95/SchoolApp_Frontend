import apiUrl from "../apiConfig";
import axios from "axios";
// INDEX, SHOW, CREATE, UPDATE, DESTROY


//Add new Admin 
const AddNewAdmin = newAdmin => {
  return axios.post(`${apiURL}/register`, newAdmin);
};

//LogIn

const Login = checkAdmin => {
  return axios.post(`${apiURL}/login`, checkAdmin);
};
export { AddNewAdmin ,login};
