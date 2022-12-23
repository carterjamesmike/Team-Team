const { Parents } = require("../models")

const parentData = [
    {
        names:"Bill Billington",
        email:"bilington@yahoo.com",
        password:"12345"
    },{
        names:"Jackie Jackson",
        email:"Jackson456@gamil.com",
        password:"asdffdas"
    },{
        names:"Tony Lazuto",
        email:"sayshello@gmail.com",
        password:"five"
    },{
        names:"Jamie Jamison",
        email:"photoesofspiderman@yahoo.com",
        password:"seven"
    }
]
const seedParent = () => Parents.bulkCreate(parentData);

module.exports = seedParent;