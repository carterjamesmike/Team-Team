const { Children } = require('../models')
const childrendData = [
    {
        name:"kal",
        parent_id: 1
    },{
        name:"steven",
        parent_id:2
    },{
        name:"emily",
        parent_id:3
    },{
        name:"shaun",
        parent_id:4
    }
]

const seedChildren = () => Children.bulkCreate(childrendData);

module.exports = seedChildren;