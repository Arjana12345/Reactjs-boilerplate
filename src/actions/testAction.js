import axios from 'axios';
import config from '../config';

export function test(payload) {
    return {
    type: "TEST",
    payload: axios.get(config.API.getInfo)
  }
}

export function testPost(payload) {
    return axios.get(config.API.getUsers + 'posts/' + payload, {
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response;
    });


}
