import axios from 'axios';
import config from '../config';

export function test(x) {
    return {
    type: "TEST",
    payload: axios.get(config.API.getInfo)
  }
}

export function testPost(payload) {
    return axios.get(config.API.getInfo , {
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      console.log("arju");
      return response;
    });


}
