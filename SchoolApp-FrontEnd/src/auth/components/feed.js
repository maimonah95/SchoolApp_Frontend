import React from "react";
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      Name: "",
      Description: "",
      Date: "",
      EndDate: "",
      isedit: false

    };
  }

  componentWillMount = () => {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      date: this.props.date,
      date: this.props.endDate
    });
  };

  // updateFeed  = event => {
  //   event.preventDefault();
  //   console.log("update", this.state);
  //   this.props.updatetheFeeds(this.props.id, this.state);
  // };
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
    const { name, description } = this.state;
    let editsubject = <div></div>;

    if (this.state.isedit) {
      editsubject = (
        <div>
          <div className="row">
            <div className="col">
              <label> name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.Changehandler}
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
              />
            </div>
            <div className="col">
              <label>description</label>
              <br />
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.Changehandler}
                className="form-control"
                placeholder="Enter description"
              />
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      );
    }
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>
          <button onClick={this.deleteFeed} className="btn btn-danger">
            Delete
          </button>{" "}
          <button
            onClick={() => {
              this.props.editFeed("true", {
                Name: this.props.name,
                Description: this.props.description,
                _id: this.props.id
              });
            }}
            className="btn btn-secondary"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
export default Feed;
