import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

// The InterviewerListItem component is used in InterviewerList to display a selectable interviewer
// InterviewListItem recieves props: 
    // key (interviewer ID)
    // name (string, interviewer name)
    // avatar (string, interviewer avatar url)
    // selected (boolean)
    // onChange (event listener for changing selected status)

export default function InterviewerListItem(props) {

  const interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected,
  });

  return (
    <li
      onClick={props.onChange}
      className={interviewerClass}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}