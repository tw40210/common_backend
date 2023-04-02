import axios from 'axios';

const url = 'http://localhost:5000/backend';

const config = {
    headers:{
        "ngrok-skip-browser-warning":"any",
        "Access-Control-Allow-Origin":"*"
    }
  };

export const post_something = (data) => axios.post(url+"/post_somethin", data,config);
export const get_something = (idx) => axios.get(url+`/get_something/${idx}`,config);
export const post_something_2 = (data_1, data_2) => axios.post(url+"/post_something_2", {data_1, data_2},config);