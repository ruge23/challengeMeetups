const Sequelize = require("sequelize");
const db = require("../db");

const crypto = require("crypto");

class Manager extends Sequelize.Model {};

Manager.init({
  email:{
    type:Sequelize.STRING,
    unique: true,
    validate:{
      isEmail: true
    },
    allowNull: false,
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    },
    get(){
      return null;
    }
  },
  salt:{
    type: Sequelize.STRING,
    get(){
      return null;
    }
  }
}, {
  sequelize: db,
  modelName: "manager"
});

Manager.beforeCreate((user) => {
  user.salt = crypto.randomBytes(20).toString('hex');

  console.log(user.getDataValue("salt"), user.getDataValue("password"));

  user.password = crypto.createHmac('sha1', user.getDataValue("salt").update(user.getDataValue("password")).digset("hex"))
  console.log("donee")
})

Manager.prototype.validatePassword = (password) => {
  const newPassword = crypto.createHmac('sha1', this.getDataValue("salt").update(password).digset('hex'))
  return newPassword === this.getDataValue("password");
} 

module.exports = Manager;