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
            error: false,
            payment: action.payload
        }
        case 'LOGIN_FAILED' : return {
            ...state,
            loading: false,
            login: false,
            error: action.payload
        }
        case 'LOGOUT_SUCCESS' : return {
            ...state,
            login: false,
            payment: {}
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

export const addNotifReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_NOTIF_REQUEST':return {
            ...state
        }
        case 'ADD_NOTIF_SUCCESS':return {
            ...state,
            status: true
        }
        case 'ADD_NOTIF_FAILED':return {
            ...state,
            status: false
        }
        default: return state
    }
}

export const updateNotifReducer = (state={}, action) => {
    switch(action.type){
        case 'UPDATE_NOTIF_REQUEST':return {
            ...state
        }
        case 'UPDATE_NOTIF_SUCCESS':return {
            ...state,
            status: true
        }
        case 'UPDATE_NOTIF_FAILED':return {
            ...state,
            status: false
        }
        default: return state
    }
}

export const getNotifReducer = (state={}, action) => {
    switch(action.type){
        case 'GET_NOTIF_REQUEST':return {
            ...state
        }
        case 'GET_NOTIF_SUCCESS':return {
            ...state,
            statusNotif: action.payload.status,
            msg: action.payload.message
        }
        case 'GET_NOTIF_FAILED':return {
            ...state,
            statusNotif: false,

        }
        default: return state
    }
}