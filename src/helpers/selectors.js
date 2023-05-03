export function getAppointmentsForDay(state, day) {
  const theDay = state.days.find(d => d.name === day);
  const todaysAppointments = (theDay ? theDay.appointments : []);
  const outputBuffer = [];
  for (const appt of todaysAppointments) {
    outputBuffer.push({ ...state.appointments[appt] });
  }
  const lastApptTime = outputBuffer.slice(-1).time
  outputBuffer.push({id: -1, time: lastApptTime, interview: {student: "Some Student", interviewer: 1}})
  return outputBuffer;
}


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
  return interviewers.map(i => ({...i}));
}