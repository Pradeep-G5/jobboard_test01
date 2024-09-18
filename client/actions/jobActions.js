export const createJob = job => {
    return {
      type: 'CREATE_JOB',
      job
    };
  };
  
  export const getJobs = () => {
    return {
      type: 'GET_JOBS'
    };
  };
  
  export const getJob = id => {
    return {
      type: 'GET_JOB',
      id
    };
  };
  
  export const updateJob = (id, job) => {
    return {
      type: 'UPDATE_JOB',
      id,
      job
    };
  };
  
  export const deleteJob = id => {
    return {
      type: 'DELETE_JOB',
      id
    };
  };