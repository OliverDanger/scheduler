import React from "react";

import Button from "components/Button";

//The Confirm component is used as a display mode for appointment
//Confirm recieves props: message (Ask to confirm something), onCancel (event handler), and onConfirm (event handler)
export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button danger onClick={props.onConfirm}>Confirm</Button>
      </section>
    </main>
  )
}