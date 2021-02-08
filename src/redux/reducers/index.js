import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import locationsReducers from './locationsReducer';
import episodesReducer from './episodesReducer';

export default  combineReducers({
    characters:characterReducer,
    locations:locationsReducers,
    episodes:episodesReducer
})

