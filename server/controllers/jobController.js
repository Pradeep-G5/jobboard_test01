const Job = require('../models/Job');

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().exec();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving jobs');
  }
};

const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating job');
  }
};

const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).exec();
    if (!job) {
      res.status(404).send('Job not found');
    } else {
      res.json(job);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving job');
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!job) {
      res.status(404).send('Job not found');
    } else {
      res.json(job);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating job');
  }
};

const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndRemove(req.params.id).exec();
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting job');
  }
};

module.exports = { getJobs, createJob, getJob, updateJob, deleteJob };