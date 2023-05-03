import React from "react";

//The Header component is used in all display modes for appointment
//Header recieves props: time (string, eg. "4pm")
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
};