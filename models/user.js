/*models/menu.js*/

module.exports = (sequelize, DataTypes) =>{
  let user =  sequelize.define('User', {
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name : {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone : {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
    timestamps: true,
  });

  return user;
}
