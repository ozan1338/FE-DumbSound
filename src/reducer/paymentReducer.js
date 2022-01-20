export const addPaymentReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_PAYMENT_REQUEST' : return {
            loading:true
        }
        case 'ADD_PAYMENT_SUCCESS' : return {
            loading:false
        }
        case 'ADD_PAYMENT_FAILED' : return {
            loading:false,
            error: action.payload
        }
        default: return state
    }
}

export const getAllPaymentReducer = (state={payments: []},action) =>{
    switch(action.type){
        case "GET_ALL_PAYMENT_REQUEST" : return {
            loading: true
        }
        case "GET_ALL_PAYMENT_SUCCESS" : return {
            loading: false,
            payments: action.payload
        }
        case "GET_ALL_PAYMENT_FAILED" : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const updateStatusPaymentReducer = (state={},action) => {
    switch(action.type){
        case "UPDATE_PAYMENT_STATUS_REQUEST" : return {
            loading: true
        }
        case "UPDATE_PAYMENT_STATUS_SUCCESS" : return {
            loading: false
        }
        case "UPDATE_PAYMENT_STATUS_FAILED" : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}