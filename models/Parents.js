const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Parents extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

Parents.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        names:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate:{
            isEmail: true,
          }
        },
        //For use with future development
        credit: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 5
          
        },
        password:{
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
            len:[6],
          },
        },

    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'parents',
    }
    
);

module.exports = Parents; 
