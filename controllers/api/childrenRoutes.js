const router = require('express').Router();
const { Children } = require('../../models');


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

module.exports = router;