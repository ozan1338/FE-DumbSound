export const addArtistReducer = (state={},action) => {
    switch(action.type){
        case 'ADD_ARTIST_REQUEST' : return {
            loading:true
        }
        case 'ADD_ARTIST_SUCCESS' : return {
            loading:false
        }
        case 'ADD_ARTIST_FAILED' : return {
            loading:false,
            error: action.payload
        }
        default: return state
    }
}

export const getAllArtistReducer = (state={artist : []},action) => {
    switch(action.type){
        case 'GET_ALL_ARTIST_REQUEST' : return {
            loading:true
        }
        case 'GET_ALL_ARTIST_SUCCESS' : return {
            loading:false,
            artist: action.payload
        }
        case 'GET_ALL_ARTIST_FAILED' : return {
            loading:false,
            error: action.payload
        }
        default: return state
    }
}