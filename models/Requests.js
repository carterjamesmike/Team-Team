const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Request extends Model{}

Request.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          date:{
            type: DataTypes.DATE,
            allowNull:false
          },
          comment:{
            type: DataTypes.STRING,
            allowNull: true
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
        modelName: 'requests'
        }
);

module.exports = Request;