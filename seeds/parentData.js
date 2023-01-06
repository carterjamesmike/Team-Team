const { Parents } = require("../models")

const parentData = [
    {
        names:"Bill Billington",
        email:"bilington@yahoo.com",
        credit:5,
        password:"12345"
    },{
        names:"Jackie Jackson",
        email:"Jackson456@gamil.com",
        credit:5,
        password:"asdffdas"
    },{
        names:"Tony Lazuto",
        email:"sayshello@gmail.com",
        credit:5,
        password:"five"
    },{
        names:"Jamie Jamison",
        email:"photoesofspiderman@yahoo.com",
        credit:5,
        password:"seven"
    }
]
const seedParent = () => Parents.bulkCreate(parentData);

module.exports = seedParent;