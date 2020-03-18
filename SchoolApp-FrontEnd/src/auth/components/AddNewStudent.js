import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addnewStudent} from "../StudentAPI";


export default class AddNewStudent extends React.Component{
    constructor(props) {
        super(props);
       this.state = {
            FirstName: '',
            LastName: '',
            Gender:'',
            ID:"",
            subject:[]
        }
    }

    onchange = (event,input) => {
        //set event for mulitpe input
        this.setState({ [input]: event.target.value });
    };

    SubmitHandeler = e => {
        //const { alert, history } = this.props;
        e.preventDefault();
        console.log("this is state", this.state);
        const newStu = {
            student: {
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Gender: this.state.Gender,
                ID: this.state.ID
                // Teacher: this.state.Teacher
            }
        };
    }


    AddNewStuddent = ()=>{

        let data = this.state;
        console.log("old student array",this.props.students);
        addnewStudent(data).then((response)=>{
            console.log(response);
            console.log(this.props.students)
            const newStudents = [...this.props.students];
            const index = newStudents.indexOf(response.data);
            console.log("res data",response.data);
            console.log("data",data);
            if (index !== -1) {

            } else {
                newStudents.push(response.data.student);
            }
            console.log("new array",newStudents);
            this.props.setStudents(newStudents);
            console.log("main student array from",this.props.students);
            this.props.setShowform(false);
        }).catch((error)=>{
            console.log('API Error:',error);
        })
    }







    render() {
        let allsub = <option> No subjects </option>;
        if(this.state.subjects){
            // console.log(this.state.subjects)
            allsub = this.state.subjects.map((sub,index)=>{
                return <option key={index} id={sub._id}> {sub.Name}</option>
            });
        }

       return (
              <div>

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
                  <br/>
                  {/*<div className="form-group">*/}
                  {/*    <label htmlFor="sel1">Subjects list:</label>*/}
                  {/*    <select className="form-control" id="sel1">*/}
                  {/*        /!*<option>1</option>*!/*/}
                  {/*        {allsub}*/}
                  {/*    </select>*/}
                  {/*</div>*/}
                        {/*onClick={this.AddNewStuddent}*/}
                        <button type="submit" onClick={this.AddNewStuddent} className="btn btn-primary">Save</button>

             </div>

       );
    }
   }


