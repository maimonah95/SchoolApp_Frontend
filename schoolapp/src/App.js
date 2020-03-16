import React from "react";
import ReactDOM from "react-dom";
import Subjects from './School/components/subjects';
import Login from "./School/components/Login";
import SignUp from "./School/components/RegisterAdmin";
// import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }
  setSubjects = subjects => {
    this.setState({ subjects: subjects });
  };

  render() {

    
    return (
      <div className="App">
        <header className="App-header">
        <Login />
        <SignUp />
        </header>
          <p>Welcome to SchoolApp!</p>
      
        <Subjects
          subjects={this.state.subjects}
          setSubjects={this.setSubjects}
        />
      </div>
    );
  }
}
export default App;