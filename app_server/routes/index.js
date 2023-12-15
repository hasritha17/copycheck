var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

router.get('/', ctrlPages.index);
router.get('/dashboard', ctrlPages.dashboard);
router.get('/upload-assignment', ctrlPages.uploadassignment);
router.get('/plagiarism-checker', ctrlPages.plagiarismchecker);
router.get('/reports', ctrlPages.reports);
router.get('/submit-report', ctrlPages.submitreport);
router.get('/login', ctrlPages.login);
router.get('/register', ctrlPages.register);

module.exports = router;

