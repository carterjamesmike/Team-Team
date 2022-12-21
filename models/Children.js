const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Children extends Model{}

Children.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false
     },
     parents_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'parents',
            key: 'id'
        }
     }


},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'children'
    }
);
module.exports = Children; 