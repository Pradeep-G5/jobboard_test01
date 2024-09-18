const initialState = {
    jobs: []
  };
  
  export default function jobReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_JOB':
        return { ...state, jobs: [...state.jobs, action.job] };
      case 'GET_JOBS':
        return { ...state, jobs: action.jobs };
      case 'GET_JOB':
        return { ...state, job: action.job };
      case 'UPDATE_JOB':
        return { ...state, jobs: state.jobs.map(job => job._id === action.id ? action.job : job) };
      case 'DELETE_JOB':
        return { ...state, jobs: state.jobs.filter(job => job._id !== action.id) };
      default:
        return state;
    }
  }