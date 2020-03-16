import apiUrl from "../apiConfig";
import axios from "axios";
// INDEX, SHOW, CREATE, UPDATE, DESTROY

//Add new Admin
const AddNewAdmin = newAdmin => {
  return axios.post(`${apiUrl}/register`, newAdmin);
};

//LogIn

const signIn = checkAdmin => {
  return axios.post(`${apiUrl}/login`, checkAdmin);
};


const changePassword = changed =>{
  return axios.patch(`${apiUrl}/login`, changed );
}
//Logout
const signOut = user => {
  return axios.delete(`${apiUrl}/logout`, user, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
};
export { AddNewAdmin, signIn,changePassword , signOut };
