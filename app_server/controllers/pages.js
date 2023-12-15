// ../controllers/pages.js

// Function for the home page
module.exports.index = function(req, res) {
    res.render('index', { title: 'Home Page' });
  };
  
module.exports.dashboard = function(req, res) {
    res.render('dashboard', { title: 'Dash Board' });
  };

module.exports.uploadassignment = function(req, res) {
    res.render('upload-assignment', { title: 'Upload Assignment' });
  };

module.exports.plagiarismchecker = function(req, res) {
    res.render('plagiarism-checker', { title: 'Plagiarism Checker' });
  };

module.exports.reports = function(req, res) {
    res.render('reports', { title: 'Reports' });
  };
  
module.exports.submitreport = function(req, res) {
    res.render('submit-report', { title: 'Reports' });
  };

module.exports.login = function(req, res) {
    res.render('login', { title: 'Login' });
  };
  
module.exports.register = function(req, res) {
    res.render('register', { title: 'Register' });
  };
  