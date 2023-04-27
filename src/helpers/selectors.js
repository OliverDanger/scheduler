export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  const todaysAppointments = (filteredDays.length > 0 ? filteredDays[0].appointments : []);
  const outputBuffer = [];
  for (const appt of todaysAppointments) {
    outputBuffer.push(state.appointments[appt]);
  }
  return outputBuffer;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  };
  const interviewerID = interview.interviewer;
  const theInterviewer = Object.values(state.interviewers).filter(interviewer => interviewer.id === interviewerID)[0];
  return {
    student: (interview.student),
    interviewer: { ...theInterviewer }
  };
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);
  const todaysAppointments = (filteredDay.length > 0 ? filteredDay[0].appointments : []);
  const todaysInterviewersID = [];
  for (const appt of todaysAppointments) {
    (state.appointments[appt].interview && todaysInterviewersID.push(state.appointments[appt].interview.interviewer));
  }
  const todaysInterviewers = [];
  for (const interviewerID of todaysInterviewersID) {
    todaysInterviewers.push(state.interviewers[interviewerID]);
  }
  const interviewerSet = [ ...new Set(todaysInterviewers)]
  console.log('🧑‍💻', interviewerSet)
  return interviewerSet;
}