import React from 'react';
import './App.css';
import Subjects from './dashboard/components/subjects';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
  }
}
setSubjects = (subjects) => {
  this.setState({ subjects: subjects });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to SchoolApp!
          </p>
        </header>
        <Subjects subjects={this.state.subjects}
         setSubjects={this.setSubjects}  />
      </div>
    );
  }
}

export default App;