const router = require('express').Router();
const { Parents } = require('../../models');


router.get('/', async (req, res) => {
    try {
        Parents.findAll().then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

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

router.post('/', async (req, res) => {
    try {
        Parents.create({
            names: req.body.names,
            email: req.body.email,
            password: req.body.password
        }).then((parentData) => {
            res.json(parentData)
        });
      } catch (err) {
        res.status(500).json(err);
      }

});

router.post('/login', async (req,res) =>{
    try{
        Parents.findOne({
            where:{
                names: req.body.name
            }
        }).then((parentData) =>{
            if(!parentData){
                res.status(400).json({message:'no account found with those name(s)'})
                return;
            }
            const passwordMatch = parentData.checkPassword(req.body.password);
            if(!passwordMatch){
                res.status(400).json({message: 'wrong password'})
                return;
            }
            res.json({user: parentData, message:'logged in succsesfully'})
        })
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;