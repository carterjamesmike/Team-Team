const router = require('express').Router();
const { Request } = require('../../models');


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

router.get('/', (req, res) => {
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


router.post('/',async(req,res)=>{
    try{
    const dbRequestData =await Request.create({
        title: req.body.title,
        date: req.body.date,
        comment: req.body.comment,
        accepted:false,
        parents_id: req.body.parents_id
    });
    res.status(200).json(dbRequestData);
}catch (err) {
    console.log(err);
    res.status(500).json(err);
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