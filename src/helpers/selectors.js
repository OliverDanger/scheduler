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
  if (interview.interview === null) {
    return null;
  };
  const interviewerID = interview.interview.interviewer;
  const theInterviewer = Object.values(state.interviewers).filter(interviewer => interviewer.id === interviewerID)[0];
  return {
    student: (interview.interview.student),
    interviewer: { ...theInterviewer }
  };
}