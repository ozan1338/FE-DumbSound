export const getAllMusicReducer = (state = {musics : []}, action) => {
    switch(action.type){
        case 'GET_ALL_MUSIC_REQUEST' : return {
            loading: true
        }
        case 'GET_ALL_MUSIC_SUCCESS' : return {
            loading: false,
            musics : action.payload
        }
        case 'GET_ALL_MUSIC_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const addMusicReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_MUSIC_REQUEST' : return {
            loading: true
        }
        case 'ADD_MUSIC_SUCCESS' : return {
            loading: false,
        }
        case 'ADD_MUSIC_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}