const Parents = require('./Parents');
const Accept = require('./Accept');
const Children = require('./Children');
const Requests = require('./Requests')




Parents.hasMany(Children,{
    foreignKey:'parent_id'
});

Parents.hasMany(Requests,{
    foreignKey:'parent_id',
    onDelete:"cascade"
});

Parents.hasMany(Accept,{
    foreignKey:"parent_id",
    onDelete:"cascade"
});

Children.belongsTo(Parents,{
    foreignKey:"parent_id",
    onDelete:"cascade"
});

Requests.belongsTo(Parents,{
    foreignKey:"parent_id",
    onDelete:"cascade"
});

Requests.belongsTo(Children,{
    foreignKey:"children_id",
    onDelete:"cascade"
});

module.exports = { Parents, Accept, Children, Reqquests }

