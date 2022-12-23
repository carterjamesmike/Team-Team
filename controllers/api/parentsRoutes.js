const router = require('express').Router();
//const { Parents } = require('../../models');


// router.get('/', async (req, res) => {
//     try {
//         const parentData = await Parents.findAll();
    
//         // Serialize data so the template can read it
//         const parents = parentData.map(([parent]) => parent.get({ plain: true }));
    
//         // Pass serialized data and session flag into template
//         res.render('test', { 
//           parents, 
//         });
//       } catch (err) {
//         res.status(500).json(err);
//       }

// });


module.exports = router;