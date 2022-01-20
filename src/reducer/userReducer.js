export const loginReducer = (state={}, action) => {
    switch(action.type){
        case 'LOGIN_REQUEST': return {
            ...state,
            loading: true
        }
        case 'LOGIN_SUCCESS': return {
            ...state,
            loading: false,
            login: true,
            error: false
        }
        case 'LOGIN_FAILED' : return {
            ...state,
            loading: false,
            login: false,
            error: action.payload
        }
        case 'LOGOUT_SUCCESS' : return {
            ...state,
            login: false
        }
        default: return state
    }
}

export const registerUserReducer = (state={}, action) => {
    switch(action.type){
        case 'USER_REGISTER_REQUEST': return {
            ...state,
            loading:true
        }
        case 'USER_REGISTER_SUCCESS': return {
            ...state,
            loading :false,
        }
        case 'USER_REGISTER_FAILED': return {
            ...state,
            loading: false,
            error : action.payload
        }
        default: return state
    }
}