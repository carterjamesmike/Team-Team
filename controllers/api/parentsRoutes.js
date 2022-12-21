const router = require('express').Router();
const { Parents } = require('../../models');

router.get('/', (req, res) => {
    Parents.findAll().then((parentData) => {
        res.json(parentData)
    });
});


module.exports = router;