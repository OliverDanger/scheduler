import React from "react";
import "components/Appointment/styles.scss";

//component:
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";

//hook:
import { useVisualMode } from "hooks/useVisualMode";
import Confirm from "./Confirm";

//visual modes
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CANCELING = "CANCEL";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

//The Appointment component is called to display each appointment
//Appointment recieves props:
    // key (appointment ID),
    // id (appointment ID),
    // time (string, eg. "4pm"),
    // interview (single interview object)
    // interviewers (array of interviewer objects)
    // bookInterview (event handler)
    // cancelInterview (event handler)

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // updates visual mode and calls bookInterview
  function save(name, interviewer) {
    const isEdit = (mode === EDIT ? true : false)
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview, isEdit)
      .then(() => transition(SHOW))
      .catch (() => transition(ERROR_SAVE));
  }


  function confirmSave() {
    transition(CONFIRM);
  }

  // updates visual mode and calls cancelInterview
  function cancel(id) {
    transition(CANCELING);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch (() => transition(ERROR_DELETE, true));
  }


  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={confirmSave}
        />
      )}
      {mode === CREATE && (
        <Form
          id={props.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && (
        <Status message="saving..." />
      )}
      {mode === CANCELING && (
        <Status
          message="deleting..."
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Delete this appointment forever?"
          onCancel={() => back()}
          onConfirm={cancel}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message="Interview was not saved"
          onClose={() => back()}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message="Interview was not deleted"
          onClose={() => back()}
        />
      )}
    </article>
  );
}