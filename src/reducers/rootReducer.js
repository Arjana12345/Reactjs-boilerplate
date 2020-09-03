export default function rootReducer(state = {
    data : [{
      "name": "",
      "lastName" : ""
    }]

}, action) {
console.log(action);
    switch (action.type) {
      case 'TEST':
        
        state.data = action.payload
       return state
       
      default:
        return state
    }
  }

