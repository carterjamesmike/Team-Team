const Parents = require('./Parents');
const Children = require('./Children');
const Request = require('./Requests')

Parents.hasMany(Children,{
    foreignKey:'parents_id'
});

Parents.hasMany(Request,{
    foreignKey:'parents_id',
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

module.exports = { Parents, Children, Request}

