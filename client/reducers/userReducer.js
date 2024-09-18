const initialState = {
    users: []
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_USER':
        return { ...state, users: [...state.users, action.user] };
      case 'GET_USERS':
        return { ...state, users: action.users };
      case 'GET_USER':
        return { ...state, user: action.user };
      case 'UPDATE_USER':
        return { ...state, users: state.users.map(user => user._id === action.id ? action.user : user) };
      case 'DELETE_USER':
        return { ...state, users: state.users.filter(user => user._id !== action.id) };
      default:
        return state;
    }
  }