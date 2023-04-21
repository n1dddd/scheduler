import React from 'react';
import "components/DayListItem.scss";
import classNames from "classnames";

const formatSpots = (spots) => {
    if (!spots) {
        return `no spots remaining`
    } 
    if (spots === 1){
        return `1 spot remaining`
    }
    return `${spots} spots remaining`
}


export default function DayListItem(props) {

    const availability = formatSpots(props.spots);
    const dayClass = classNames("dayListItem", {
        "day-list__item": true,
        "day-list__item--selected" : props.selected,
        "day-list__item--full": props.spots === 0
    })
    return(
        <li onClick={() => props.setDay(props.name)} className={dayClass} data-testid="day">
            <h2 className="text--regular">{props.name}</h2>
            <h3 className="text-light">{availability}</h3>
        </li>
    );
}