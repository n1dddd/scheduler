import React, { useEffect } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from "./Show"
import Empty from "./Empty"
import useVisualMode from "hooks/useVisualMode"
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

export default function Appointment(props) {
    const EMPTY = "EMPTY"
    const SHOW = "SHOW"
    const CREATE = "CREATE"
    const SAVING = "SAVING"
    const DELETING = "DELETING"
    const CONFIRM = "CONFIRM"
    const EDIT = "EDIT"
    const ERROR_SAVE = "ERROR_SAVE"
    const ERROR_DELETE = "ERROR_DELETE"

    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    )

    useEffect(() => {
        if (props.interview && mode === EMPTY) {
            transition(SHOW);
        }
        if (!props.interview && mode === SHOW) {
            transition(EMPTY);
        }
    }, [mode, transition, props.interview])

    function save(name, interviewer) {
        const interview = {
            student: name,
            interviewer
        }

        transition(SAVING);

        props.bookInterview(props.id, interview)
        .then(() => transition(SHOW))
        .catch(() => transition(ERROR_SAVE, true));
    }

    function remove() {
        if(mode === CONFIRM) {
            transition(DELETING, true)
            props.deleteInterview(props.id)
            .then(() => transition(EMPTY))
            .catch(() => transition(ERROR_DELETE, true))
        } else {
            transition(CONFIRM);
        }
    }

    function editInterview() {
        transition(EDIT)
    }

    return (
        <article className="appointment">
            <Header time={props.time} />
            {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
            {mode === SHOW && 
                <Show
                    student={props.interview.student}
                    interviewer={props.interview.interviewer}
                    onDelete={remove}
                    onEdit={editInterview}
                />
            }
            {mode === CREATE &&
                <Form
                    name={props.name}
                    value={props.value}
                    interviewers={props.interviewers}
                    onCancel={back}
                    onSave={save}
                />
            }
            {mode === SAVING && <Status message="Saving" />}
            {mode === DELETING && <Status message="Deleting" />}
            {mode === EDIT && 
                <Form 
                    name={props.name ? props.name : props.interview.student}
                    interviewers={props.interviewers}
                    value={props.value ? props.value : props.interview.interviewer.id}
                    onSave= {save}
                    onCancel= {back}
                    />
            }
            {mode === CONFIRM &&
            <Confirm
                onCancel={back}
                onConfirm={remove}
                message="Do you want to proceed with deletion?"
             />
            }
            {mode === ERROR_SAVE &&
                <Error
                    message="Could not create appointment"
                    onClose={back}
                />
            }
            {mode === ERROR_DELETE && 
                <Error
                    message="Could not delete appointment"
                    onClose={back}
                />
            }
        </article>
    )
}
