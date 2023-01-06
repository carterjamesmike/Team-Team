const router = require('express').Router();
const { Request } = require('../../models');
const withAuth = require('../../utils/auth');

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


router.post('/', withAuth, async (req,res) => {
//     try{
//     const dbRequestData =await Request.create({
//         title: req.body.title,
//         date: req.body.date,
//         comment: req.body.comment,
//         accepted:false,
//         parents_id: req.body.parents_id
//     });
//     res.status(200).json(dbRequestData);
// }catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }

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

router.put('/:id',async(req,res)=>{
    try{
    const dbRequestData =await Request.update(req.body,{
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(dbRequestData);
}catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})
module.exports = router;