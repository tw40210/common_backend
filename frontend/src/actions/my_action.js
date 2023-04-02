import * as api from '../api';
import {POST, UPDATE, GET} from '../constances/actionTypes'



export const do_something = (data) => async (dispatch) =>{
    try {
        const {data} = await api.post_something(data);

        dispatch({type: POST, payload: data})
    } catch (error) {
        console.log(error.message); 
    }
}

