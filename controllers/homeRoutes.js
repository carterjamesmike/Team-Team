const router = require('express').Router();
const { Accept, Children, Parents, Requests } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;
