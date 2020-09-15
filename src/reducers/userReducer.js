export default function userReducer(state = [], action) {
  
 switch (action.type) {
      case 'TEST':
        if(action.status === "SUCCESS")
        {
          
          console.log("SUCCESS");
          console.log(action.data);
         
          return [
            ...state,
            {
             data: action.data
            }
          ]
        

        }else{
          
          console.log("FAILURE");
          console.log(action.error);
          
          return state;
        }
       
        break;
      default:
        
        console.log("default");
        return state;
        break;
    }
  }

