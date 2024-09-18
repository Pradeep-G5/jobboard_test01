const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/auth');
const jobController = require('../controllers/jobController');

router.get('/', authenticate, jobController.getJobs);
router.post('/', authenticate, jobController.createJob);
router.get('/:id', authenticate, jobController.getJob);
router.put('/:id', authenticate, jobController.updateJob);
router.delete('/:id', authenticate, jobController.deleteJob);

module.exports = router;