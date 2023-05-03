import React from "react";
import classNames from "classnames";

import "components/Button.scss";

// Button recieves props: 
    // confirm (boolean to toggle className), 
    // danger (boolean to toggle className),
    // children (string, button message)

export default function Button(props) {
  let buttonClass = classNames("button", {
    "button--confirm": props.confirm, "button--danger": props.danger
  });

  return (
    <button 
      className={buttonClass} 
      onClick={props.onClick} 
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}