import React from 'react'
import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem( props ) {

    const interviewerClass = classNames("InterviewerListItem", {
        "interviewers__item": true,
        "interviewers__item--selected" : props.selected,
    })

    return (
        <li onClick={props.setInterviewer} className={interviewerClass}>
            <img className="interviewers__item-image"
            key={props.id}
            src={props.avatar}
            alt={props.name}
            />
            {props.selected && props.name}
        </li>
    )
}

