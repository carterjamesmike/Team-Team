const sequelize = require('../config/connection');
const seedChildren = require("./childrenData");
const seedParent = require('./parentData');
const seedRequests = require('./requestData')

const seedAll = async () =>{
    await sequelize.sync({force: true});
    await seedParent();
    await seedChildren();
    await seedRequests();

    process.exit(0);
};

seedAll(); 