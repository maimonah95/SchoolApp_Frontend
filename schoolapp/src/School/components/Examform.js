import React, { Component } from "react";


export default class Examform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Date: ""
        };
    }
        // inputs 
    getInput = () => {
        console.log(this.state);
    };

    // inputs 
   handleChangeInput_1 = e => {
    //console.log( e.target.value );

    this.setState({ Name: e.target.value });
  };
  handleChangeInput_2 = e => {
    this.setState({ Date: e.target.value });
  };
    render() {
        return (

            <div>
                <div>
                    <form>
                        <h3>Add Exam</h3>
                        <div className="form-exam">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Subject Name"
                                onChange={event => this.handleChangeInput_1(event)}/>
                        </div>
                    </form>
                </div>

                <div>
                    <form>
                        <div className="form-exam">
                            <label>Date</label>
                            <input
                                type="Date"
                                placeholder=" " 
                                onChange={event => this.handleChangeInput_2(event)}/>
                        </div>
                    </form>
                </div>

                <button type="submit"onClick={() => this.getInput()}>Submit</button>

            </div>
        )
    }
};

