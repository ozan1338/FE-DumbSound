import {API} from "../config/API"

export const addPayment = (data) => async(dispatch) => {
    dispatch({type: "ADD_PAYMENT_REQUEST"})
    try {
        const config = {
            headers : {
                "Content-type": "multipart/form-data"
            }
        }

        await API.post('/transaction', data, config)

        dispatch({type: "OPEN_ALERT_SUCCESS"})

        setTimeout(()=>{
            dispatch({type: "ADD_PAYMENT_SUCCESS"})
        },700)

    } catch (error) {
        dispatch({type: "ADD_PAYMENT_FAILED", payload: error.response.data.error.message})
        dispatch({type: "OPEN_ALERT_ERROR"})
    }
}

export const getAllPayment = () => async(dispatch) => {
    dispatch({type: "GET_ALL_PAYMENT_REQUEST"})
    try {
        const res = await API.get('/transaction')

        dispatch({type: "GET_ALL_PAYMENT_SUCCESS", payload: res.data.data})

    } catch (error) {
        dispatch({type: "GET_ALL_PAYMENT_FAILED", payload: error})
        console.log(error.response?.data.error.message);
    }
}

export const updatePaymentStatus = (id,status) => async(dispatch) => {
    dispatch({type: "UPDATE_PAYMENT_STATUS_REQUEST"})
    try {

        const config = {
            header : {
                "Content-type": "application/json"
            }
        }

        await API.patch(`/transaction/${id}`, {"status":status} , config)
        dispatch({type: "UPDATE_PAYMENT_STATUS_SUCCESS"})
        window.location.reload()
    } catch (error) {
        dispatch({type: "UPDATE_PAYMENT_STATUS_FAILED", payload: error})
        console.log(error.response?.data.error.message);
    }
}