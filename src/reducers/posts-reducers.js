import {Get_Posts} from '../actions'
import _ from 'lodash';
import {Get_Post} from '../actions'

export default function (state = {}, action) {
    switch (action.type) {
       
        case Get_Post:
        return {
            ...state,
            [action.payload.data.id]: action.payload.data
        };

        case Get_Posts:
            return _.mapKeys(action.payload.data, 'id');

        

        default:
            {

                return state;
            }
    }

}