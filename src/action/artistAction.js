import {API} from '../config/API'

export const addArtist = (data) => async(dispatch) => {
    dispatch({type: "ADD_ARTIST_REQUEST"})
    try {
        const config = {
            header : {
                "Content-type": "application/json"
            }
        }

        await API.post('/artist', data, config)

        
        dispatch({type: "OPEN_ALERT_SUCCESS"})

        setTimeout(()=>{
            dispatch({type: "ADD_ARTIST_SUCCESS"})
        },700)

    } catch (error) {
        dispatch({type: "ADD_ARTIST_REQUEST", payload: error.response.data.error.message})
    }
}

export const getAllArtist = () => async(dispatch) => {
    dispatch({type: "GET_ALL_ARTIST_REQUEST"})
    try {
        const res = await API.get("/artist")

        dispatch({type: "GET_ALL_ARTIST_SUCCESS", payload: res.data.data})

    } catch (error) {
        dispatch({type: "GET_ALL_ARTIST_FAILED", payload: error.response})
    }
}