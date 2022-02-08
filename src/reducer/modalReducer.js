export const modalReducer = (state={}, action) => {
    switch(action.type){
        case 'OPEN_LOGIN' : return {
            ...state,
            openLogin: true,
            openRegister: false
        }
        case 'OPEN_REGISTER' : return {
            ...state,
            openLogin: false,
            openRegister: true,
        }
        case 'CLOSE_MODAL' : return {
            ...state,
            openLogin: false,
            openRegister: false
        }
        case 'OPEN_ALERT_ERROR' : return {
            ...state,
            openAlertError : true,
            openAlertSuccess : false,
            openAlertInfo: false,
        }
        case 'CLOSE_ALERT_ERROR' : return {
            ...state,
            openAlertError : false
        }
        case 'OPEN_ALERT_INFO' : return {
            ...state,
            openAlertError : false,
            openAlertSuccess : false,
            openAlertInfo : true,
        }
        case 'CLOSE_ALERT_INFO' : return {
            ...state,
            openAlertInfo : false
        }
        case 'OPEN_ALERT_SUCCESS' : return {
            ...state,
            openAlertSuccess : true,
            openAlertError : false,
            openAlertInfo: false
        }
        case 'CLOSE_ALERT_SUCCESS' : return {
            ...state,
            openAlertSuccess : false
        }
        default: return state
    }
}