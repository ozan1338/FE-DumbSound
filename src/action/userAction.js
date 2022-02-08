import {API} from "../config/API.js"

export const loginUser = (data) => async(dispatch) => {
    dispatch({type: 'LOGIN_REQUEST'});

    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }

        const res = await API.post('/user/login', data, config)

        dispatch({type: 'OPEN_ALERT_SUCCESS'})
        //console.log(res.data.payment?.status)

        setTimeout(()=>{
            if(res.data.payment){
                dispatch({type: 'LOGIN_SUCCESS', payload: res.data.payment})
            }else{
                dispatch({type: 'LOGIN_SUCCESS', payload: {}})
            }
            localStorage.setItem('currentUser', JSON.stringify(res.data.token));
            localStorage.setItem('status', JSON.stringify(res.data.status));
            
            dispatch({type: 'CLOSE_MODAL'})
            dispatch({type: 'CLOSE_ALERT_SUCCESS'})
            if(res.data.status === 1){
                window.location.href = "/list-trans"
            }
        },700)

    } catch (error) {
        dispatch({type: "OPEN_ALERT_ERROR"})
        dispatch({type: 'LOGIN_FAILED', payload: error?.response?.data.error.message})
        console.log(error)
    }
}

export const registerUser = (data) => async(dispatch) =>{
    dispatch({type: "USER_REGISTER_REQUEST"})

    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }

        const res = await API.post('/user/register', data, config)
        //console.log(res)

        dispatch({type: "LOGIN_SUCCESS", payload: {}})
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        localStorage.setItem('currentUser', JSON.stringify(res.data.token));
        localStorage.setItem('status', JSON.stringify(res.data.status));
        dispatch(addNotif(res.data.id))
        //console.log(res.data);
        dispatch({type: 'CLOSE_MODAL'})
        //window.location.reload()

    } catch (error) {
        dispatch({type: "OPEN_ALERT_ERROR"})
        dispatch({type: 'USER_REGISTER_FAILED', payload: error.response?.data.error.message})
    }
}

export const logoutUser = () => dispatch => {
    window.location.href = "/"
    localStorage.removeItem('currentUser')
    localStorage.removeItem('status')
    dispatch({type: "LOGOUT_SUCCESS"})
}

export const addNotif = (userId) => async(dispatch) => {
    dispatch({type: "ADD_NOTIF_REQUEST"})
    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }
        const data = {}

        await API.post(`/notif/${userId}`, data, config)
        dispatch({type: 'ADD_NOTIF_SUCCESS'})
    } catch (err) {
        dispatch({type: 'ADD_NOTIF_FAILED'})
    }
}

export const updateNotif = (userId,status,message) => async(dispatch) => {
    dispatch({type: "UPDATE_NOTIF_REQUEST"})
    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }

        //console.log("ok");

        const data = {
            status,
            message
        }

        await API.patch(`/notif/${userId}`,data,config)
        dispatch({type: "UPDATE_NOTIF_SUCCESS"})

    } catch (err) {
        dispatch({type: "UPDATE_NOTIF_FAILED"})
    }
}

export const getNotif = (userId) => async(dispatch) => {
    dispatch({type: "GET_NOTIF_REQUEST"})
    try {
        
        const res = await API.get(`notif/${userId}`)
        dispatch({type: "GET_NOTIF_SUCCESS",payload: res.data.data})

    } catch (err) {
        dispatch({type: "GET_NOTIF_FAILED"})
    }
}