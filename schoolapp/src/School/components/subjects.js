import React, { Component } from "react";
import Examform from "./Examform";
import {addExam} from "../api";

export default class Subject extends Component {

      // Make an API Call to add an exam
      addExam = exam => {
        addExam(exam)
        .then(res => {

            const NewExams = [this.props.exam, res.data.exam];

            this.props.setExam(NewExams);
        })
        .catch((error)=>{
            console.log('API ERROR:', error);
          })
        };
    render(){
        return(
            <div>
                <Examform Examform={this.Examform}/>
            </div>
        )
    }
}