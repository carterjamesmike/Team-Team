const router = require('express').Router();
const { Request } = require('../../models');
const withAuth = require('../../utils/auth');

//For use with insomnia for testing
router.get('/', (req, res) => {
    try{
      Request.findAll().then((requestData) => {
        res.json(requestData)
    });
    }catch(err){
      console.log(err);
      res.status(500).json(err);
    }
});

//Insomnia testing
router.get('/:id', (req, res) => {
    try{
    Request.findOne({
        where:{
            id: req.params.id
        }
    }).then((requestData) => {
        res.json(requestData)
    });
    }catch(err){
      console.log(err);
      res.status(500).json(err);
    }
});

//Creates new babysitting request from user page
router.post('/', withAuth, async (req,res) => {
  try {
    const newRequest = await Request.create({
      ...req.body,
      parents_id: req.session.parent_id,
    });
    
    res.status(200).json(newRequest);

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

//Delete a request
router.delete('/:id',async(req,res)=>{
    try{
    const dbRequestData =await Request.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(dbRequestData);
}catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update accepted value for request when accepted button clicked on requests page
router.put('/:id', withAuth, async(req, res) => {
        try {
          const updateRequest = await Request.update(
            {
              accepted: true 
            },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.status(200).json(updateRequest);
        } catch (err) {
            console.log(err)
          res.status(500).json(err);
        }
});


module.exports = router;