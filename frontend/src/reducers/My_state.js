import {POST, UPDATE, GET} from '../constances/actionTypes'

const My_state = (state = {state_data_1:[], state_data_2:1}, action) => {
    switch (action.type) {
        case UPDATE:
            return {...state, state_data_2:action.payload};
        case POST:
            return {...state, state_data_1:action.payload};
        case GET:
            return action.payload;
        default:
            return state;
    }

}

export default My_state;