import React from "react";

import DayListItem from "./DayListItem";

//The DayList component is used in Application to display days sidebar menu
//DayList recieves props: days (array of day objects), day (string, eg. "Monday")
export default function DayList(props) {
  const formattedDays = props.days.map((day) => {
    return <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.onChange}
    />;
  });
  return (
    <ul>{formattedDays}</ul>
  );
}