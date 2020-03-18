import React from "react";
import Feed from "./Feed";
import { withRouter } from "react-router-dom";
import AddFeed from "./AddFeed";
import { getAllFeeds, deleteFeedByID, updateFeed } from "../api";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isadd: false,
    isedit: false,
    tempfeed: {},
    name: "",
    description: "",
    _id: "",
    feeds: []
  };
  // for set the new subject array after add
  setFeeds = newFeed => {
    console.log("students", newFeed);
    this.setState({ feeds: newFeed });
  };
  //to set the form to hide after add new subject
  setShowform = check => {
    this.setState({ isadd: check });
  };
  componentDidMount() {
    // Make an API Call to Get all feeds
    getAllFeeds()
      .then(response => {
        this.setState({ feeds: response.data.feeds });
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }

  // Make an API Call to Delete a Feed
  deleteFeed = id => {
    console.log("The Feed ID to Delete", id);

    deleteFeedByID(id)
      .then(response => {
        console.log(`The Feed with the ID ${id} has been deleted.`);

        const newFeedsList = this.state.feeds.filter(feed => {
          return feed._id !== id;
        });

        this.setState({ feeds: newFeedsList });
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };
  //to toggle the form to show for add new subject
  addnewfeed = e => {
    e.preventDefault();
    const doesShow = this.state.isadd;
    // console.log("work");
    this.setState({ isadd: !doesShow });
  };
  editFeed = (isclick, feedInfo) => {
    console.log("subject To update", feedInfo);
    this.setState({
      isedit: isclick,
      tempfeed: feedInfo
    });
  };

  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      _id: this.state.tempfeed._id
    });
  };

  handleUpdate = () => {
    // const { alert, history } = this.props;
    // e.preventDefault();
    console.log("this is state");
    const theNewFeed = {
      feed: {
        Name: this.state.name,
        Description: this.state.description
        // Date: stat.date,
        // EndDate: stat.endDate
      }
    };
    const theNewFeed1 = {
      Name: this.state.name,
      Description: this.state.description
    };
    console.log(theNewFeed);
    updateFeed(this.state._id, theNewFeed)
      .then(response => {
        const newFeed = [...this.state.feeds];
        const indexOfFeed = this.state.feeds.findIndex(
          feed => feed._id === this.state._id
        );
        console.log(
          `The Article with the ID ${this.state._id} has been updated.`,
          response.data
        );
        newFeed.splice(indexOfFeed, 1, theNewFeed1);
        this.setFeeds(newFeed);
        this.setState({ isedit: false });
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
    let allFeeds = <h4>No Feeds!</h4>;

    if (this.state.feeds.length > 0) {
      allFeeds = this.state.feeds.map((feed, index) => {
        return (
          <Feed
            name={feed.Name}
            description={feed.Description}
            // date={feed.date}
            // endDate={feed.EndDate}
            id={feed._id}
            deleteFeed={this.deleteFeed}
            editFeed={this.editFeed}
            key={index}
          />
        );
      });
    }
    // to render the form comp after the value is click
    let addnewfeed = <div></div>;
    if (this.state.isadd) {
      addnewfeed = (
        <AddFeed
          setShowform={this.setShowform}
          feeds={this.state.feeds}
          setFeeds={n => {
            this.setFeeds(n);
          }}
        />
      );
    }
    // for Edit feeds form
    let editfeed = <div></div>;
    if (this.state.isedit) {
      editfeed = (
        <div>
          <div className="row">
            <div className="col">
              <label> name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.Changehandler}
                className="form-control"
                placeholder={this.state.tempfeed.Name}
              />
            </div>
            <div className="col">
              <label>description</label>
              <input
                type="text"
                onChange={this.Changehandler}
                className="form-control"
                placeholder={this.state.tempfeed.Description}
                name="description"
                value={this.state.description}
              />
            </div>
          </div>
          <button
            onClick={this.handleUpdate}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      );
    }

    return (
      <div className="container">
        <h2>feeds List</h2>

        {addnewfeed}
        {editfeed}
        <br />

        <button className="btn btn-primary" onClick={this.addnewfeed}>
          Add new feed
        </button>
        <br />
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>name</th>
              <th>description </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{allFeeds}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Feeds);
