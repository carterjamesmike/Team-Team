const {Request} = require('../models'); 

const requestData = [
    {
        title:"Sitter for the weekend",
        date:"1/24/23",
        comment:"Going down to San Antonio for a couple days",
        accepted:false,
        parents_id:1
    },
    {
        title:"Having surgry",
        date:"1/15/23",
        comment:"Need somebody to watch my kids around 1pm-4pm while im at the hospital",
        accepted:false,
        parents_id:2
    }
]

const seedRequests = () => Request.bulkCreate(requestData);

module.exports = seedRequests;