import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { addNewfeed } from "../api";
import messages from "../messages";

class AddFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      Date: "",
      EndDate: "",
      _id: ""
    };
  }

  Changehandler = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitHandeler = e => {
    const { alert, history } = this.props;
    e.preventDefault();
    console.log("this is state", this.state);
    const newFeed = {
      feed: {
        Name: this.state.Name,
        Description: this.state.Description,
        Date: this.state.Date,
        EndDate: this.state.EndDate
      }
    };
    console.log(newFeed);
    addNewfeed(newFeed)
      // .then(() => alert(messages.addFeedSuccess, "success"))
      // .then(() => history.push("/"))
      .then(response => {
        console.log("feed has been added", response.data);
        // this.props.AddFeed(newFeed);
        const newFeeds = [...this.props.feeds];
        const index = newFeeds.indexOf(response.data);
        if (index !== -1) {
        } else {
          newFeeds.push(response.data.feed);
        }

        console.log("newFeeds : ", newFeeds);

        this.props.setFeeds(newFeeds);
        this.props.setShowform(false);
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          Description: "",
          Date: "",
          EndDate: ""
        });
        // alert(messages.addSubFailure, "danger");
      });
  };
  render() {
    const { Name, Description } = this.state;
    return (
      <div>
        <br />
        <br />
        <form onSubmit={this.SubmitHandeler}>
          <div className="row">
            <div className="col">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                value={Name}
                onChange={this.Changehandler}
                className="form-control"
                placeholder=" Name"
              />
            </div>
            <div className="col">
              <label>Description</label>
              <input
                type="text"
                name="Description"
                value={Description}
                onChange={this.Changehandler}
                className="form-control"
                placeholder=" Description"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddFeed);
