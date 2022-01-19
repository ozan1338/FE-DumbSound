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
            openRegister: true
        }
        case 'CLOSE_MODAL' : return {
            ...state,
            openLogin: false,
            openRegister: false
        }
        default: return state
    }
}