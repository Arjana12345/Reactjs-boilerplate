export default function userReducer(state = {
    data : [{
      "name": "",
      "lastName" : ""
    }]

}, action) {


    switch (action.type) {
      case 'TEST_pending':
        console.log("pending");

      case 'TEST_FULFILLED':
        console.log("fulfilled");

      case 'TEST_PENDING': 
        console.log('PENDING');
      
      default:
        console.log('DEFAULT');
        return state
    }
  }

