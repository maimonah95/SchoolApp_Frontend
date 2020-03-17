import React from "react";
import Student from "./Student";
import {getAllStudent, deleteStudentByID, getAllSubjects,addnewStudent} from "../StudentAPI"
import AddNewStudent from "./AddNewStudent";

export default class Students extends React.Component{
    constructor(props) {
        super(props);

    }

    state = {
        students:[],
        subjects:[],
        isadd:false

    };

    //for set the new student array after add
    setStudents = (newStudents)=>{
        console.log("students",newStudents);
        this.setState({students:newStudents})
    };

    setShowform = (check)=>{
    this.setState({isadd:check});
    }

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


    }

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



    addnewstudent= (event)=>{
        event.preventDefault();
        const doesShow = this.state.isadd;
        // console.log("work");
        this.setState({isadd: !doesShow})
    };
    render() {
        let allStudent = <h4>No Students</h4>;
        if(this.state.students.length > 0)
        {
            allStudent = this.state.students.map((student,index)=>{
                return <Student all={student} FirstName={student.FirstName} LastName={student.LastName}
                                 key={index} id={student.ID} deleteStudent={this.deleteStudent} />
            });
        }
        let addnewst = <div></div>;
        if(this.state.isadd)
        {
            addnewst = <AddNewStudent setShowform={this.setShowform} students={this.state.students} setStudents={(n)=>{this.setStudents(n)}}/>
        }
        return (
            <div className="container">
                <h2>Student List</h2>

                {addnewst}
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