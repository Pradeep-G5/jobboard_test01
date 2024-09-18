export const createUser = user => {
    return {
      type: 'CREATE_USER',
      user
    };
  };
  
  export const getUsers = () => {
    return {
      type: 'GET_USERS'
    };
  };
  
  export const getUser = id => {
    return {
      type: 'GET_USER',
      id
    };
  };
  
  export const updateUser = (id, user) => {
    return {
      type: 'UPDATE_USER',
      id,
      user
    };
  };
  
  export const deleteUser = id => {
    return {
      type: 'DELETE_USER',
      id
    };
  };