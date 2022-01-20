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

        setTimeout(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
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
        dispatch({type: 'LOGIN_FAILED', payload: error.response.data.error.message})
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

        dispatch({type: 'USER_REGISTER_SUCCESS'})
        localStorage.setItem('currentUser', JSON.stringify(res.data.token));
        localStorage.setItem('status', JSON.stringify(res.data.status));
        dispatch({type: 'CLOSE_MODAL'})
        window.location.reload()

    } catch (error) {
        dispatch({type: "OPEN_ALERT_ERROR"})
        dispatch({type: 'USER_REGISTER_FAILED', payload: error.response.data.error.message})
    }
}

export const logoutUser = () => dispatch => {
    window.location.href = "/"
    localStorage.removeItem('currentUser')
    localStorage.removeItem('status')
    dispatch({type: "LOGOUT_SUCCESS"})
}