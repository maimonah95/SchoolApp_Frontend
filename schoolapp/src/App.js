import React from "react";
<<<<<<< HEAD

import AlertDismissible from "./School/components/AlertDismissible";
=======
import ReactDOM from "react-dom";
import Subjects from './School/components/subjects';
>>>>>>> 65633c2d28daca5bf5578b2210a774941ffd9af4
import Login from "./School/components/Login";
import SignUp from "./School/components/RegisterAdmin";
import signOut from "./School/components/SignOut";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: []
    };
  }
  setUser = user => this.setState({ user });
=======
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }
  setSubjects = subjects => {
    this.setState({ subjects: subjects });
  };
>>>>>>> 65633c2d28daca5bf5578b2210a774941ffd9af4

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };
  render() {
    const { alerts, user } = this.state;

    return (
<<<<<<< HEAD
      <>
        <SignUp alert={this.alert} setUser={this.setUser} />
        <Login alert={this.alert} setUser={this.setUser} />
        <signOut />
      </>
      // <React.Fragment>
      //   <Header user={user} />
      //   {alerts.map((alert, index) => (
      //     <AlertDismissible
      //       key={index}
      //       variant={alert.type}
      //       message={alert.message}
      //     />
      //   ))}
      //   <main className="container">
      //     <Route
      //       path="/sign-up"
      //       render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
      //     />
      //     <Route
      //       path="/sign-in"
      //       render={() => <Login alert={this.alert} setUser={this.setUser} />}
      //     />
      //     <AuthenticatedRoute
      //       user={user}
      //       path="/sign-out"
      //       render={() => (
      //         <signOut
      //           alert={this.alert}
      //           clearUser={this.clearUser}
      //           user={user}
      //         />
      //       )}
      //     />
      //     {/* <AuthenticatedRoute
      //         user={user}
      //         path="/change-password"
      //         render={() => <ChangePassword alert={this.alert} user={user} />}
      //       /> */}
      //   </main>
      // </React.Fragment>
=======
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
>>>>>>> 65633c2d28daca5bf5578b2210a774941ffd9af4
    );
  }
}
export default App;
