export function changeTheme(theme) {
    return { type: 'CHANGE_THEME', payload: theme}
}

export default function themeReducer(state = "blue", action) {
    if (action.type === 'CHANGE_THEME') {
        return action.payload;
    } else {
        return state;
    }
}