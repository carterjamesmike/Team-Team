const Parents = require('./Parents');
const Accept = require('./Accept');
const Children = require('./Children');
const Request = require('./Requests')




Parents.hasMany(Children,{
    foreignKey:'parents_id'
});

Parents.hasMany(Request,{
    foreignKey:'parents_id',
    onDelete:"cascade"
});

Parents.hasMany(Accept,{
    foreignKey:"parents_id",
    onDelete:"cascade"
});

Children.belongsTo(Parents,{
    foreignKey:"parents_id",
    onDelete:"cascade"
});

Request.belongsTo(Parents,{
    foreignKey:"parents_id",
    onDelete:"cascade"
});

Request.belongsTo(Children,{
    foreignKey:"children_id",
    onDelete:"cascade"
});

module.exports = { Parents, Accept, Children, Request}

