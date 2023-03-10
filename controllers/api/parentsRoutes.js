const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Parents } = require('../../models');

//Insomnia testing
router.get('/', async (req, res) => {
    try {
        Parents.findAll().then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

//Insomnia testing
router.get('/:id', async (req, res) => {
    try {
        Parents.findOne({
            where:{
                id: req.params.id
            }
        }).then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

//Creates new parent from login page
router.post('/', async (req, res) => {
    try {
        const parentsData = await Parents.create(req.body);
        req.session.save(() => {
          req.session.parent_id = parentsData.id;
          req.session.logged_in = true;
          res.status(200).json(parentsData);
        });

      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
});

//Login route
router.post('/login', async (req,res) =>{
    console.log("Hiya login route")
    try {
        const parentData = await Parents.findOne({ where: { email: req.body.email } });
    
        if (!parentData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await parentData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.parent_id = parentData.id;
          req.session.logged_in = true;
          res.json({ parent: parentData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }

});

//Deletes a parent
router.delete('/:id', async (req, res) => {
    try {
        Parents.destroy({
            where:{
                id: req.params.id
            }
        }).then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

//Subtracts a credit from parent. For use in future development
router.put('/subtract/:id', async (req, res) => {
    try {
        Parents.update({
            credit: sequelize.literal("credit - 1")
        },{
            where:{
                id: req.params.id
            }
        }).then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

//Adds a credit to parent. For use in future development
router.put('/add/:id', async (req, res) => {
    try {
        Parents.update({
            credit: sequelize.literal("credit + 1")
        },{
            where:{
                id: req.params.id
            }
        }).then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

});

//Logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;