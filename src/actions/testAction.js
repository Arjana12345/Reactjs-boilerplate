import axios from 'axios';


export default function test(payload) {
     alert("action");
  return {
    type: "TEST",
    payload: axios.get("http://localhost/reactApp/firstReactApp/backend/test.php")
  }
}
