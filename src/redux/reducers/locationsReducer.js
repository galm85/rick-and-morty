
const initialState = {
    locations:[]
}


export default function locationsReducer(state = initialState,action){
    switch (action.type){
        case 'fetchLocations':
            return{
                ...state,
                locations:action.payload
            }

        
        default:
            return state;
    }
}