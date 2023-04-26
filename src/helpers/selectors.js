function matchingIds(idsArray, Ids) { //take in an ID's array, and return the matching data to passed in IDs
    const matchedIds = Ids.map(appId => idsArray[appId]);
    return matchedIds;
}

export function getAppointmentsForDay(state, day) {
    let appArray = [];

    state.days.map((dayObject) => {
        if (dayObject.name === day) {
            return dayObject.appointments.forEach(appId => appArray.push(appId))
        }
    })
    return matchingIds(state.appointments, appArray);
}

export function getInterviewersForDay(state, day) {
    let interviewerArray = [];

    state.days.map((dayObject) => { //map over the state.days array, check if day object is equal to the day passed in, push the interviewer id into the empty interviewerArray
        if (dayObject.name === day) {
            return dayObject.interviewers.forEach(interviewerId => interviewerArray.push(interviewerId))
        }
    })
    return matchingIds(state.interviewers, interviewerArray); //return the matching interviewer ids for the day passed in
}

export function getInterview(state, interview) { //returns the interviewer information by matching the interviewer to the one currently held in state

    if (interview === null) {
        return null;
    }

    const interviewerInfo = state.interviewers[interview.interviewer]
    return {
        student: interview.student,
        interviewer: interviewerInfo
    }
}