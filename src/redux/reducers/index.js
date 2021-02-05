import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import locationsReducers from './locationsReducer';

export default  combineReducers({
    characters:characterReducer,
    locations:locationsReducers
})

