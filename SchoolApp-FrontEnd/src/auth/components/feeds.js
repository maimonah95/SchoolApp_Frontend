import React from "react";
import Feed from "./feed";
import { withRouter } from "react-router-dom";
import AddFeed from "./addFeed";
import { getAllFeeds, deleteFeedByID, updateFeed } from "../api";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // Make an API Call to Get all feeds
    getAllFeeds()
      .then(response => {
        this.props.setFeeds(response.data.feeds);
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

        const newFeedsList = this.props.feeds.filter(feed => {
          return feed._id !== id;
        });

        this.props.setFeeds(newFeedsList);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };
  updatetheFeeds = (id, stat) => {
    // const { alert, history } = this.props;
    // e.preventDefault();
    console.log("this is state", id, stat);
    const theNewFeed = {
      feed: {
        Name: stat.name,
        Description: stat.description,
        Date: stat.date,
        EndDate: stat.endDate
    
      }
    };
    console.log(theNewFeed);
    updateFeed(id, theNewFeed)
      .then(response => {
           const newFeed = [...this.props.feeds];
           const indexOfFeed  = this.props.feeds.findIndex(
             feed => feed._id === id);
        console.log(
          `The Article with the ID ${id} has been updated.`,response.data);
          newFeed.splice(indexOfFeed, 1, theNewFeed);
        this.props.setFeeds(newFeed);
      })
      .catch(error => {
        console.log("API error", error);
        this.setState({
          Name: "",
          Description: "",
          Date: "",
          EndDate:""
        });
        // alert(messages.addSubFailure, "danger");
      })
  };

  render() {
    let allFeeds = <h4>No Feeds!</h4>;

    if (this.props.feeds.length > 0) {
      allFeeds = this.props.feeds.map((feed, index) => {
        return (
          <Feed
            name={feed.Name}
            description={feed.Description}
            date={feed.date}
            endDate={feed.EndDate}
            id={feed._id}
            deleteFeed={this.deleteFeed}
            updatetheFeeds={this.updatetheFeeds}
            key={index}
          />
        );
      });
    }
    return (
      <>
        <h3> Feeds </h3>
        {allFeeds}
        <AddFeed AddFeed={this.props.AddFeeds} />
      </>
    );
  }
}

export default withRouter(Feeds);
