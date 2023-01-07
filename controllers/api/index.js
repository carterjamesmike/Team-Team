const router = require('express').Router();
const parentsRoutes = require('./parentsRoutes');
const requestRoutes = require('./requestRoutes');
const childrenRoutes = require('./childrenRoutes');
router.use('/parents', parentsRoutes);
router.use('/children', childrenRoutes);
router.use('/request', requestRoutes);
module.exports = router;