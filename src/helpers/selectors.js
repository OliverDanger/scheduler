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
    console.log("🦑");
    return null;
  };
  const interviewerID = interview.interviewer;
  console.log("🦧", interviewerID);
  const theInterviewer = Object.values(state.interviewers).filter(interviewer => interviewer.id === interviewerID)[0];
  console.log('🦣', theInterviewer);
  console.log('🦈', interview);
  const fullInterview = {
    student: (interview.student),
    interviewer: { ...theInterviewer }
  };
  const outputBuffer = { ...fullInterview };
  console.log('🐊', outputBuffer);
  return outputBuffer;
}