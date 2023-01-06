const router = require('express').Router();
const { Accept, Children, Parents, Request } = require('../models');
const withAuth = require('../utils/auth');

//Display all parents (general GET route)
router.get('/', async (req, res) => {
    try {
        const requestData = await Request.findAll();

        const requests = requestData.map((request) => request.get({ plain: true }));

        res.render('homepage', {
            requests,
            logged_in: req.session.logged_in
        });

    } catch (err) { 
      console.log(err)
      res.status(500).json(err);
     }
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
router.get('/request', withAuth, async (req, res) => {
    // try {
    //     res.render('request', { 
    //     logged_in: req.session.logged_in 
    // });
    // } catch (err) { 
    //     console.log(err)
    //     res.status(500).json(err) }
    router.get('/', async (req, res) => {
      try {
          const requestData = await Request.findAll();
  
          const requests = requestData.map((request) => request.get({ plain: true }));
  
          res.render('requests', {
              ...requests,
              logged_in: req.session.logged_in
          });
  
      } catch (err) { 
        console.log(err)
        res.status(500).json(err);
       }
  });

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
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/parent');
  //   return;
  // }

  // res.render('parent');
  try {
    // Find the logged in user based on the session ID
    const parentData = await Parents.findByPk(req.session.parent_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Children, Request }],
    });

    const parent = parentData.get({ plain: true });

    res.render('parent', {
      ...parent,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/request/:id', async (req, res) => {
  try {
    const requestData = await Request.findByPk(req.params.id, {
      include: [
        {
          model: Request,
          attributes: ['title'],
        },
      ],
    });

    const request = requestData.get({ plain: true });

    res.render('request', {
      ...request,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;


