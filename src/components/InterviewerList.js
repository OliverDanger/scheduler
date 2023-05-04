import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

import propTypes from "prop-types"

//The InterviewerList component is used in to display a selectable list of available interviewers
//InterviewerList recieves props: 
    // interviewers (array of interviewer objects)
    // interviewer (selected interviewer ID)
    // onchange (event handler for selecting interviewer)
    
export default function InterviewerList(props) {
  const InterviewerArray = props.interviewers.map((interviewer) => {
    return <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      onChange={() => props.onChange(interviewer.id)}
    />;
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {InterviewerArray}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: propTypes.array.isRequired
};