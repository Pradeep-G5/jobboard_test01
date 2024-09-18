import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../actions/jobActions';

const JobListings = () => {
  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;