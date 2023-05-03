import React from "react";

//The Empty component is used as a display mode for appointment
//Empty recieves props: onAdd(event handler)
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  )
}