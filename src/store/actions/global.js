export function changeSearchValue(value) {
    return dispatch => {
        return dispatch({ type: 'CHANGE_SEARCH_VALUE', value })
    }
}

export function setUsers(users) {
    return dispatch => {
        return dispatch({ type: 'SET_USERS', users})
    }
}