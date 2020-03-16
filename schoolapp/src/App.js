import React from "react";

import AlertDismissible from "./School/components/AlertDismissible";
import Login from "./School/components/Login";
import SignUp from "./School/components/RegisterAdmin";
import signOut from "./School/components/SignOut";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: []
    };
  }
  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };
  render() {
    const { alerts, user } = this.state;

    return (
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
    );
  }
}
export default App;
