const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accept extends Model{}

Accept.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    date:{
        type: DataTypes.DATE,
        allowNull:false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accepted:{
        type:DataTypes.BOOLEAN
      },
      parents_id:{
        type: DataTypes.INTEGER,
        references:{
          model:'parents',
          key:'id'
        }
      }

},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'accept'
    });

    module.exports = Accept;