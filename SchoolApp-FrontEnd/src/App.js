import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import AlertDismissible from './auth/components/AlertDismissible'
import Subjects from "./auth/components/subjects"
import Students from "./auth/components/Students";
class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: [],
      subjects: []
    };
  }

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  setSubjects = subjects => {
    this.setState({ subjects: subjects });
  };
  AddSubjects = subjects => {
    this.setState({
      subjects: [...this.state.subjects, subjects]
    });
  };

  render() {
    const { alerts, user, subjects } = this.state;

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible
            key={index}
            variant={alert.type}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route
            path="/sign-up"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            path="/sign-in"
            render={() => <SignIn alert={this.alert} setUser={this.setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => (
              <SignOut
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/Subjects"
            render={() => (
              <Subjects
                alert={this.alert}
                user={user}
                subjects={this.state.subjects}
                setSubjects={this.setSubjects}
                AddSubjects={this.AddSubjects}
              />
            )}
          />

          <AuthenticatedRoute
              user={user}
              path="/Students"
              render={() => (
                 <Students/>
              )}
          />
  <Students/>
          {/* <AuthenticatedRoute
            user={user}
            path="/addSub"
            render={() => (
              <AddSubjects alert={this.alert} user={user} subjects={subjects} />
            )}
          /> */}
          {/* <AuthenticatedRoute
            user={user}
            path="/update-sub"
            render={() => (
              <UpdateSubjects
                alert={this.alert}
                user={user}
                subjects={this.state.subjects}
                setSubjects={this.setSubjects}
              />
            )}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App
