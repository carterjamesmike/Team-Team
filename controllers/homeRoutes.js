const router = require('express').Router();
const { Accept, Children, Parents, Requests } = require('../models');
const withAuth = require('../utils/auth');

//Display all parents (general GET route)
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

//Display individual parent by ID (general GET by ID route)
router.get('/parent/:id', async (req, res) => {
    try {
      const parentData = await Parents.findByPk(req.params.id);
  
      const parent = parentData.get({ plain: true });
  
      res.render('parent', {
        parent,
        logged_in: req.session.logged_in
      });
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });

//Renders add a request page (general redirect route)
router.get('/request', checkAuth, async (req, res) => {
    try {
        res.render('request', { 
        logged_in: req.session.logged_in 
    });
    } catch (err) { 
        console.log(err)
        res.status(500).json(err) }
});




module.exports = router;


