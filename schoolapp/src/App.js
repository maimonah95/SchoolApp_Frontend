import React from 'react';
import ReactDOM from "react-dom";
import Login from "./School/components/Login";
import SignUp from "./School/components/RegisterAdmin";
import Subject from "./School/components/subjects";
// import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      Subject:[]
          };
          //console.log(this.state.Subject);

        };
        
  
    getAllsubjects = () => {
      console.log('getAllsubjects');
    };
/*   setExam = (exam)=>{
    this.setState({exam:exam});
  } */

  render() {
    return (
      <div>
          <p>
            <Login/>
            <SignUp/>
          </p>
         <Subject exam={this.state.exam}
                  setState={this.setExam}/>
      </div>
    );
  }
}

export default App;
