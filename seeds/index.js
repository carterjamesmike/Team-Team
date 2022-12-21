const sequelize = require('../config/connection');
const seedChildren = require("./childrenData");
const seedParent = require('./parentData');


const seedAll = async () =>{
    await sequelize.sync({force: true});
    await seedParent();
    await seedChildren();

    process.exit(0);
};

seedAll(); 