import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default function(state={}, action) {
    switch(action.type) {

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState= {...state};
            // newState[post.id] = post;

            console.log('action received to reducer', action);
            const newState = {...state, [action.data.payload.id] : [action.data.payload]};
            
            return action.payload;
;
        case FETCH_POSTS :
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}