
const initialState = {
    characters:[]
}


export default function charactersReducer(state = initialState,action){
    switch (action.type){
        case 'fetchCharacters':
            return{
                ...state,
                characters:action.payload
            }

            case 'nextPage':{
                return {
                    ...state,
                    characters:action.payload
                }
            }
        
        default:
            return state;
    }
}


