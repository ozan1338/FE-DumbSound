import {API} from "../config/API.js"

export const getAllMusic = () => async(dispatch) => {
    dispatch({type: "GET_ALL_MUSIC_REQUEST"})
    try {
        const res = await API.get("/music")
        
        dispatch({type: "GET_ALL_MUSIC_SUCCESS", payload : res.data.data})

    } catch (error) {
        dispatch({type: "GET_ALL_MUSIC_FAILED", payload: error.response?.data.error.message})
    }
}

export const addMusic = (data) => async(dispatch) => {
    dispatch({type: "ADD_MUSIC_REQUEST"})
    try {
        const config = {
            headers : {
                "Content-type": "multipart/form-data"
            }
        }

        await API.post("/music",data,config)

        dispatch({type: "OPEN_ALERT_SUCCESS"})

        setTimeout(()=>{
            dispatch({type: "ADD_MUSIC_SUCCESS"})
        },700)

    } catch (error) {
        dispatch({type: "ADD_MUSIC_FAILED", payload: error.response.data.error.message})
    }
}