import React from 'react';
import ReactDOM from "react-dom";
import Login from "./School/components/Login";
import SignUp from "./School/components/RegisterAdmin";
// import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  render() {
    return (
      <div>
      
          <p>
            <Login/>
            <SignUp/>
            Welcome to SchoolApp
          </p>
     
      </div>
    );
  }
}
export default App;
