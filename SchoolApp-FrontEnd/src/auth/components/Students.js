import React from "react";
import Student from "./Student";
import {getAllStudent, deleteStudentByID,updateStudent} from "../StudentAPI"
import AddNewStudent from "./AddNewStudent";

export default class Students extends React.Component{
    constructor(props) {
        super(props);

    }

    state = {
        students:[],
        subjects:[],
        isadd:false,
        isedit:false,
        tempstudent:{},
        FirstName:"",
        LastName:"",
        ID:""

    };

    //for set the new student array after add
    setStudents = (newStudents)=>{
        console.log("students",newStudents);
        this.setState({students:newStudents})
    };

    //to set the form to hide after add new student
    setShowform = (check)=>{
    this.setState({isadd:check});
    };

    //to call function api to render the list of students
    componentDidMount(){
        // get all student from api request
        this.getAll()

             }
    getAll=()=>{
        getAllStudent()
            .then((response)=>{
                console.log("res",response.data.students)
                //save student list in student state
                this.setState({students:response.data.students})
            })
            .catch((error)=>{
                // console.log(this.state.students);
                console.log('api error:',error)
            })


    };
        //handle deleted student from api call
         deleteStudent = (id) => {
        console.log("the student id to delete",id)
        deleteStudentByID(id)
            .then((response)=>{
                console.log(`the student with id ${id} has been deleted.`);
                const newStudentList =  this.state.students.filter((student) => {
                    return student._id !== id;
                });
                this.setState({students:newStudentList})
            })
            .catch((error)=> {
                console.log('API Error:',error);
            })
    };


    //to toggle the form to show for add new student
    addnewstudent= (event)=>{
        event.preventDefault();
        const doesShow = this.state.isadd;
        // console.log("work");
        this.setState({isadd: !doesShow})
    };


    editStudent = (isclick,studentInfo)=>{
            console.log("student for update",studentInfo);
        this.setState({
            isedit:isclick,
            tempstudent:studentInfo

        })

    }
    onchange = (event,input) => {
        //set event for mulitpe input
        event.preventDefault();
        this.setState({ [input]: event.target.value });
        this.setState({ID:this.state.tempstudent.ID});
        this.setState({_id:this.state.tempstudent._id});
    };

    // handle update call
    handleUpdate = ()=>{
        // event.preventDefault();
        // get specfic student
        const onest = {
            FirstName:this.state.FirstName,
            LastName:this.state.LastName,
            ID:this.state.ID,
            Gender:this.state.tempstudent.Gender,
            _id:this.state._id
        };


        console.log(onest);
        //let data = this.state;
        updateStudent(onest,this.state._id).then((response)=>{
            console.log(this.state.students);
            console.log("temp array for student",this.state.tempstudent);
            const updateStudent = [...this.state.students];
            const index = updateStudent.indexOf(this.state.tempstudent);
            const indexOfStudent = this.state.students.findIndex(
                student => student._id === this.state._id);
            console.log("indexOfStudent",indexOfStudent)
            console.log("res data",response);
            let newart =[...this.state.students];
            newart = updateStudent[indexOfStudent];
            console.log("new student ",newart);
            console.log("index ",index);

            newart= onest;
            const currentStudent = [...this.state.students];
            currentStudent[indexOfStudent] = newart;
            console.log("new a",newart);
            this.setStudents(currentStudent);
            this.setState({isedit: false})

        }).catch((error)=>{
            console.log('API Error:',error);
        })

    }






    render() {
        //to render list of student from the state
        let allStudent = <h4>No Students</h4>;
        if(this.state.students.length > 0)
        {
            allStudent = this.state.students.map((student,index)=>{
                return <Student editStudent={this.editStudent} all={student} FirstName={student.FirstName} LastName={student.LastName}
                                 key={index} id={student.ID} deleteStudent={this.deleteStudent} />
            });
        }
        // to render the form comp after the value is click
        let addnewst = <div></div>;
        if(this.state.isadd)
        {
            addnewst = <AddNewStudent setShowform={this.setShowform} students={this.state.students} setStudents={(n)=>{this.setStudents(n)}}/>
        }


        // for Edit Student form
        let editstudent = <div></div>;
        if(this.state.isedit) {
            editstudent = <div>


                <div className="row">
                    <div className="col">
                        <label>First name</label>
                        <input type="text" onChange={(e) => {
                            this.onchange(e, "FirstName")
                        }} className="form-control" id="email" placeholder={this.state.tempstudent.FirstName}
                               name="FirstName" value={this.state.FirstName}/>
                    </div>
                    <div className="col">
                        <label>Last name</label>
                        <input type="text" onChange={(e) => {
                            this.onchange(e, "LastName")
                        }} className="form-control" placeholder={this.state.tempstudent.LastName} name="LastName"
                               value={this.state.LastName}/>
                    </div>

                    <div className="col">
                        <label>ID</label>
                        <input disabled type="number" onChange={(e) => {
                            this.onchange(e, "ID")
                        }}  className="form-control" placeholder={this.state.tempstudent.ID} name="ID"/>
                    </div>
                </div>


                <label>Gender : </label>{" "}{this.state.tempstudent.Gender}
                <br/>

                <button onClick={this.handleUpdate} type="submit" className="btn btn-primary">Save</button>


            </div>
        }






        return (
            <div className="container">
                <h2>Student List</h2>

                {addnewst}
                {editstudent}
                <br/>

                <button className="btn btn-primary" onClick={this.addnewstudent}>Add new Student</button>
                <br/><br/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>ID</th>
                        <th>Gender</th>
                        {/*<th>Subject</th>*/}
                        <th>Actions</th>

                    </tr>
                    </thead>
                    <tbody>
                    {allStudent}


                    </tbody>
                </table>
            </div>
        );
    }
}