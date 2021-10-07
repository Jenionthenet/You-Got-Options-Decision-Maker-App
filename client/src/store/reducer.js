

const initialState = {
    decisions: [],
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DECISIONS_LOADED':
            return {
                ...state,
                decisions: action.payload
            }
            

        case 'ON_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            }

        case 'USER_LOGOUT':
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}

export default reducer