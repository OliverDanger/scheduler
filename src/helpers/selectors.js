export function getAppointmentsForDay(state, day) {
  const theDay = state.days.find(d => d.name === day);
  const todaysAppointments = (theDay ? theDay.appointments : []);
  const outputBuffer = [];
  for (const appt of todaysAppointments) {
    outputBuffer.push({ ...state.appointments[appt] });
  }
  return outputBuffer;
}

//gets full interview object when given state and summary interview object
export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  };
  const interviewerID = interview.interviewer;
  const theInterviewer = Object.values(state.interviewers).find(interviewer => interviewer.id === interviewerID);
  return {
    student: (interview.student),
    interviewer: { ...theInterviewer }
  };
}

//where day is a day is a name string eg. "Monday"
export function getInterviewersForDay(state, day) {
  const theDay = state.days.find(d => d.name === day);
  let interviewers = [];
  if (theDay?.interviewers) {
    interviewers = theDay.interviewers.map(ID => ({ ...state.interviewers[ID] }));
    return interviewers;
  }
  const todaysAppointmentsID = (theDay ? theDay.appointments : []);
  const todaysInterviews = todaysAppointmentsID.map(apptID => ({ ...state.appointments[apptID] })).filter(appt => appt.interview);
  interviewers = todaysInterviews.map(interview => state.interviewers[interview.interviewer]);
  return interviewers.map(i => ({ ...i }));
}

//uses the last appointment from dailyAppointments to return the closing time as a string
export function getClosingTime(todaysAppts) {
  const lastAppt = [...todaysAppts].slice(-1)[0];

  if (lastAppt) {
    let lastApptTime = Number(lastAppt.time.slice(0, -2)) + 1;
    let amOrPm = lastAppt.time.slice(-2);
    if (amOrPm === "am" && lastApptTime > 11) {
      lastApptTime -= 12;
      amOrPm = "pm"
    }
    return `${lastApptTime}${amOrPm}`;
  }
  return "Closed";
}