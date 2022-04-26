const express = require('express');

const router = express.Router();
const controller = require('../controllers/teamController');

module.exports = {
  router.post('/make',controller.makeTeam);
  
  router.post('/edit',controller.editTeam);
  
  router.post('/leave',controller.leaveTeam);

  return router;
};
