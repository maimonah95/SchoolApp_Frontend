import React from "react";
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
      endDate: ""
     
    };
  }

  componentWillMount = () => {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      date: this.props.date,
      date:this.props.endDate

    });
  };
  updateFeed  = event => {
    event.preventDefault();
    console.log("update", this.state);
    this.props.updatetheFeeds(this.props.id, this.state);
  };
  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteFeed = event => {
    event.preventDefault();
    this.props.deleteFeed(this.props.id);
  };

  render() {
    const { name, description} = this.state;
    return (
      <div className="feed">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.Changehandler}
        />
        <br />
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.Changehandler}
        />
        <br />
    
    
        <button onClick={this.deleteFeed}>Delete</button>
        <button onClick={this.updateFeed}>Update</button>
      </div>
    );
  }
}

export default Feed;