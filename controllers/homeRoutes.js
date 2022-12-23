const router = require('express').Router();
const { Accept, Children, Parents, Requests } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const parentData = await Parents.findAll();

        const parents = parentData.map((parent) => parent.get({ plain: true }));

        res.render('homepage', {
            parents,
            logged_in: req.session.logged_in
        });

    } catch (err) { res.status(500).json(err) }
});


module.exports = router;


