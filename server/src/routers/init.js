const express = require('express');
const connection = require('../services/mysql');
const controller = require('../controllers/initController');

const router = express.Router();

router.get('/', controller.init);

module.exports = router;
