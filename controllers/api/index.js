const router = require('express').Router();
const parentsRoutes = require('./parentsRoutes');

router.use('/parents', parentsRoutes);

module.exports = router;