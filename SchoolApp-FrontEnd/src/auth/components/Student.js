import React from "react";
import {getoneSubjects} from '../StudentAPI';
export default class Student extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isedit:false
        }
    }



    // nameOfSub = (id)=>{
    //     getoneSubjects(id)
    //         .then((res)=>{
    //
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         })
    // };
    onchange = (event,input) => {
        //set event for mulitpe input
        this.setState({ [input]: event.target.value });
    };
    render() {
        let editstudent = <div></div>;


        if(this.state.isedit)
        {
            editstudent = <div>


                <div className="row">
                    <div className="col">
                        <label>First name</label>
                        <input type="text" onChange={(e)=>{this.onchange(e,"FirstName")}} className="form-control" id="email" placeholder="Enter First name"
                               name="email"/>
                    </div>
                    <div className="col">
                        <label>Last name</label>
                        <input type="text" onChange={(e)=>{this.onchange(e,"LastName")}} className="form-control" placeholder="Enter Last name" name="pswd"/>
                    </div>

                    <div className="col">
                        <label>ID</label>
                        <input type="text" onChange={(e)=>{this.onchange(e,"ID")}} className="form-control" placeholder="Enter ID" name="pswd"/>
                    </div>
                </div>


                <label>Gender</label>{" "}<br/>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input onChange={(e)=>{this.onchange(e,"Gender")}} value="Male" type="radio" className="form-check-input" name="optradio"/>Male
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input onChange={(e)=>{this.onchange(e,"Gender")}}type="radio" className="form-check-input" value="Female" name="optradio"/>Female
                    </label>
                </div>

                <br/>

                <button type="submit"  className="btn btn-primary">Save</button>


            </div>
        }
        return (

            <tr>

                <td>{this.props.FirstName}</td>
                <td>{this.props.LastName}</td>
                <td>{this.props.id}</td>
                <td>{this.props.all.Gender}</td>

                {/*<td>{this.nameOfSub(this.props.all.subject) }</td>*/}
                <td>
                    <button onClick={(id)=>{this.props.deleteStudent(this.props.all._id)}}
                            className="btn btn-danger">Delete</button>{" "}
                    <button onClick={()=>{this.setState({isedit:true})}} className="btn btn-secondary">Edit</button>

                </td>

            </tr>
        );
    }
}