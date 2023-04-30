import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {

  const liClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = (spots) => {
    if (spots === 0) {
      return <h3 className="text--light">no spots remaining</h3>
    }
    if (spots === 1) {
      return <h3 className="text--light">1 spot remaining</h3>
    }
    return <h3 className="text--light">{spots} spots remaining</h3>
  };

  return (
    <li
      data-testid="day"
      onClick={() => props.setDay(props.name)}
      className={liClass}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      {formatSpots(props.spots)}
    </li>
  );
}