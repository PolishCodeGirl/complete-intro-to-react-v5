export function changeLocation(location) {
    return { type: 'CHANGE_LOCATION', payload: location}
}

export default function locationReducer(state = "New York City, NY", action) {
    if (action.type === 'CHANGE_LOCATION') {
        return action.payload;
    } else {
        return state;
    }
}