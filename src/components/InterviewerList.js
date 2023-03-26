import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

    const interviewerInfo = props.interviewers.map((interviewer) => {
        return (
            <InterviewerListItem
                id={interviewer.id}
                name={interviewer.name}
                avatar={interviewer.avatar}
                setInterviewer={props.setInterviewer}
                selected={interviewer.id === props.interviewer}
            />
        )
    })


 return (
    <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
            {interviewerInfo}
        </ul>
    </section>
 )
}