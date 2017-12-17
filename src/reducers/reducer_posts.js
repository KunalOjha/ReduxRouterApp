import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';


//Reducer resposible for updating the POSTS application state property
export default function(state={}, action) {
    switch(action.type) {

        case FETCH_POST:
            // ES5 (long way)
            // const post = action.payload.data;
            // const newState= {...state};
            // newState[post.id] = post;
            const newState = {...state, [action.payload.data.id] : action.payload.data};
            return newState;
;
        case FETCH_POSTS :
            return _.mapKeys(action.payload.data, 'id');
        
        default:
            return state;
    }
}