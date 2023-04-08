function matchingIds(appointments, appIds) { //need to change naming convention of properties cause used by 2 functions
    const matchedIds = appIds.map(appId => appointments[appId]);
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

    state.days.map((dayObject) => {
        if (dayObject.name === day) {
            return dayObject.interviewers.forEach(interviewerId => interviewerArray.push(interviewerId))
        }
    })
    return matchingIds(state.interviewers, interviewerArray);
}

export function getInterview(state, interview) {

    if (interview === null) {
        return null;
    }

    const interviewerInfo = state.interviewers[interview.interviewer]
    return {
        student: interview.student,
        interviewer: interviewerInfo
    }
}