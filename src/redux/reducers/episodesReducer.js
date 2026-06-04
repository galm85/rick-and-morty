
const initialState = {
    episodes:[]
}


export default function episodesReducer(state = initialState,action){
    switch (action.type){
        case 'fetchEpisodes':
            return{
                ...state,
                episodes:action.payload
            }

           
        
        default:
            return state;
    }
}


