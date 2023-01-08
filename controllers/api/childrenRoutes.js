const router = require('express').Router();
const { Children } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        Children.findAll().then((childData) => {
            res.json(childData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/:id', async (req, res) => {
    try {
        Children.findOne({
            where:{
                id: req.params.id
            }
        }).then((childData) => {
            res.json(childData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

router.post('/',  async (req,res) => {

    try {
        const newChild = await Children.create({
          ...req.body,
          parents_id: req.session.parent_id,
        
        });
        
        res.status(200).json(newChild);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }

});

router.delete('/:id', async (req, res) => {
    try {
        Children.destroy({
            where:{
                id: req.params.id
            }
        }).then((childData) => {
            res.json(childData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

module.exports = router;