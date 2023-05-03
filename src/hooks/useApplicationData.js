import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function changeSpotsForDay(dayName, toIncrease) {
    let days = [...state.days];
    let today = days.find(d => d.name === dayName);
    const todayIndex = days.indexOf(today);
    const spotsUpdate = (toIncrease ? today.spots + 1 : today.spots - 1);
    days[todayIndex] = { ...today, spots: spotsUpdate };
    return days;
  }

//_______________________________________________________

  const setDay = day => setState({ ...state, day });

//_______________________________________________________

  function bookInterview(id, interview, isEdit) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(res => {
        (isEdit ? setState({ ...state, appointments }) : setState({ ...state, appointments, days: (changeSpotsForDay(state.day, false)) }));

      });
  }

//_______________________________________________________

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        console.log('✌️', res);
        setState({ ...state, appointments, days: (changeSpotsForDay(state.day, true)) });
      });
  }

//_______________________________________________________

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    }).catch(error => {
      console.log('ERROR: ', error);
    });

  }, []);

  return ({
    state,
    setDay,
    bookInterview,
    cancelInterview
  });
}
