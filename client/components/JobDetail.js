import React from 'react';
import axios from 'axios';

const JobDetail = ({ match }) => {
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/jobs/${match.params.id}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;