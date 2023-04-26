import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function useApplicationData() {
const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  function setDay(day) {
    setState({...state, day})
  };

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ]).then((all) => {
      setState(prev => ({...prev, days:all[0].data, appointments: all[1].data, interviewers:all[2].data}))
    })
  },[])

  function dayFinder(day) { //initialize a key value pair to the possible ids for the interview days
    const daysInWeek = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4
    }
    return daysInWeek[day]; //returns the current day
  }

  function bookInterview(id, interview) {
    /*
    Assign appointment and appointments spreads of current state, and add the new interview object to the spread
    */


    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    
    /*
    Find the day from state information (set when user selects the day);
    */


    const whichDay = dayFinder(state.day);

    /*
    Assign day spread of current state for days[day being passed in from dayFinder]
    */

    let day = {
      ...state.days[whichDay],
      spots: state.days[whichDay]
    }

    if(!state.appointments[id].interview) {
      day = {
        ...state.days[whichDay],
        spots: state.days[whichDay].spots - 1
      }
    } else {
      day = {
        ...state.days[whichDay],
        spots: state.days[whichDay].spots
      }
    }

    /*
    Set the days variable to current state
    and then set day to days[day passed in]
    */

    let days = state.days;
    days[whichDay] = day;

    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview:interview})
    .then(res => {
      setState({...state, appointments, days}) //set the state and return the request
      return res
    })
  }
  function deleteInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const whichDay = dayFinder(state.day);

    const day = {
      ...state.days[whichDay],
      spots: state.days[whichDay].spots + 1
    }
    let days = state.days;
    days[whichDay] = day;

    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
    .then(res => {
      setState({...state, appointments, days})
      return res
    })
  }
  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  }
}