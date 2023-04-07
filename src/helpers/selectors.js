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

    for (const interviewerObject in state.interviewers) {
        if (state.interviewers[interviewerObject].id === interview.interviewer) {
            const interviewObject = {
                student: interview.student,
                interviewer: {
                    id: state.interviewers[interviewerObject].id,
                    name: state.interviewers[interviewerObject].name,
                    avatar: state.interviewers[interviewerObject].avatar
                }
            }

            return interviewObject;
        }
    }
}