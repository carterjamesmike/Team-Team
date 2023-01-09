const router = require('express').Router();
const { Children, Parents, Request } = require('../models');
const withAuth = require('../utils/auth');

//Display all parents (general GET route)
router.get('/', async (req, res) => {
    res.render('homepage')
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
router.get('/requests', withAuth, async (req, res) => {
      try {
          const requestData = await Request.findAll({
            include: [
              {
                model: Parents,
                attributes: ['email', 'names'],
              },
            ],
          });
  
          const requests = requestData.map((request) => request.get({ plain: true }));
      
          res.render('requests', {
              requests,
              logged_in: req.session.logged_in
          });
  
      } catch (err) { 
        console.log(err)
        res.status(500).json(err);
       }
  });


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/parent');
    return;
  }
  
  res.render('login');
});

router.get('/parent', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const parentData = await Parents.findByPk(req.session.parent_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Children }],
    });

    const parents = parentData.get({ plain: true });

    res.render('parent', {
      ...parents,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/families', async (req, res) => {

  try {
      const childrenData = await Children.findAll({
        include: [
          {
            model: Parents,
            attributes: ['names'],
          },
        ],
      });

      const children = childrenData.map((child) => child.get({ plain: true }));
  
      res.render('families', {
          children,
          logged_in: req.session.logged_in
      });

  } catch (err) { 
    console.log(err)
    res.status(500).json(err);
   }
});

module.exports = router;


