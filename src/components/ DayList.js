import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  const formattedDays = props.days.map((day) => {
    return <DayListItem
      data-testid="day"
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
    />;
  });
  return (
    <ul>{formattedDays}</ul>
  );
}