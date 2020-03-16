import apiUrl from "../apiConfig";
import axios from "axios";
// INDEX, SHOW, CREATE, UPDATE, DESTROY


//Add new Admin 
const AddNewAdmin = newAdmin => {
  return axios.post(`${apiUrl}/register`, newAdmin);
    // return axios({
    //   method: "POST",
    //   url: apiUrl + "/register",
    //   data: {
    //     newAdmin
    //   }
    // });
};

//LogIn

const LoginAPI = checkAdmin => {
  return axios.post(`${apiUrl}/login`, checkAdmin);
};

//Logout
 const signOut = user => {
  return axios.delete(`${apiUrl}/logout`, user, {headers:{
      Authorization: `Bearer ${user.token}`}});
};
export { AddNewAdmin, LoginAPI, signOut };
