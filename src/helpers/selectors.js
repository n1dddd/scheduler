function matchingIds(appointments, appIds) {
    const matchedIds = appIds.map(appId => appointments[appId]);
    return matchedIds;
}

export function getAppointmentsForDay(state, day) {
    let appArray = [];

    state.days.map((dayObject) => {
        if(dayObject.name === day) {
            return dayObject.appointments.forEach(appId => appArray.push(appId))
        }
    })
    return matchingIds(state.appointments, appArray);
}
