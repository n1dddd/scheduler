function matchingIds(appointments, appIds) {
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

export function getInterview(state, interview) {
    /* have to return
    {
    student: Lydia Miller-Jones,
    interviewer: {
        id: 1,
        name: Sylvia Palmer,
        avatar: https://i.imgur.com/LpaY82x.png"
        }
    }
    interview = state.appointments.interview["3"].interview
    interview.interviewer === state.interviewers[interviewer].id
    -- so this means that the interview arg passed will be the one we need to pull from state
    -- compare the interviewer passed (id) to the one stored in state
    -- return relevant information
    -- move interviewers object in state to array?
    -- then filter to match the interview.interviewer (id)?
    */
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