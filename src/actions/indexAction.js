import axios from 'axios';


export function apiGetCall(type,url)
{
      return function (dispatch) { 
        axios.get(url)
          .then((response) => dispatch({
            type: type,
            status: "SUCCESS",
            data: response.data
          })).catch((response) => dispatch({
            type: type,
            status: "FAILURE",
            error: response.error
          }))
      }

}

