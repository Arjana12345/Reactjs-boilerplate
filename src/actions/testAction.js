import axios from 'axios';


export default function test(payload) {
     alert("action");
  return {
    type: "TEST",
    payload: [{
        "name": "Arjana",
        "lastName" : "Haldkar"
      }]
  }
}
