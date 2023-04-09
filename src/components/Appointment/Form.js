import React, { useState } from "react";
import "components/Appointment/styles.scss"
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
    
    const [student, setStudent] = useState(props.name || "");
    const [interviewer, setInterviewer] = useState(props.value || null);

    const reset = () => {
        setStudent("");
        setInterviewer(null)
    }
    const cancel = () => {
        reset();
        props.onCancel();
    }

    return(
        <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
                <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="appointment__create-input text--semi-bold"
                        name={props.name}
                        type="text"
                        placeholder="Enter Student Name"
                        value={student}
                        onChange={(e) => setStudent(e.target.value)}
                       />
                </form>
                <InterviewerList
                    interviewers={props.interviewers}
                    value={interviewer}
                    onChange={(e) => setInterviewer(e)}
                />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>Cancel</Button>
                    <Button confirm onClick={(e) => props.onSave(student, interviewer)}>Save</Button>
                </section>
            </section>
        </main>
    )
}