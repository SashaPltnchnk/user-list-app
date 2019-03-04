import _ from 'lodash'

const initialState = {
    search: '',
    userList: [],
}

export default function(state = initialState, action) {
    // const newState = _.cloneDeep(state)


    switch(action.type) {
        case 'CHANGE_SEARCH_VALUE': {
            return {
                ...state,
                search: action.value
            }
        }

        case 'SET_USERS': {
            return {
                ...state,
                userList: action.users
            }
        }

        default: {
            return state
        }
    }
}