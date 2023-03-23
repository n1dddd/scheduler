import React from 'react';
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
    const dayClass = classNames("dayListItem", {
        "day-list__item": true,
        "day-list__item--selected" : props.selected,
        "day-list__item--full": props.spots === 0
    })
    const formatSpots = (spots) => {
        if (spots === 0) {
            const noSpots = "no spots remaining";
            return noSpots;
        } else if (spots === 1){
            const oneSpot = "1 spot remaining"
            return oneSpot;
        } else {
            const moreThanOneSpot = `${spots} spots remaining`;
            return moreThanOneSpot;
        }
    }

    return(
        <li onClick={() => props.setDay(props.name)} className={dayClass}>
            <h2 className="text--regular">{props.Name}</h2>
            <h3 className="text-light">{formatSpots(props.spots)}</h3>
        </li>
    );
}