export default function rootReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state
      default:
        return state
    }
  }