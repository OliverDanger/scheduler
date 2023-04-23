export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  const todaysAppointments = (filteredDays.length > 0 ? filteredDays[0].appointments : []);
  const outputBuffer = []
  for (const appt of todaysAppointments) {
    outputBuffer.push(state.appointments[appt])
  }
  return outputBuffer;
}