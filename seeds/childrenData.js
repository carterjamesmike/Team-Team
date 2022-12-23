const { Children } = require('../models')
const childrendData = [
    {
        name:"kal",
        parents_id: 1
    },{
        name:"steven",
        parents_id:2
    },{
        name:"emily",
        parents_id:3
    },{
        name:"shaun",
        parents_id:4
    }
]

const seedChildren = () => Children.bulkCreate(childrendData);

module.exports = seedChildren;