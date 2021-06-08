const {Manager} = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try{
      console.log("Email", body.email);
      
      const manager = await Manager.findOne({
        where:{
          email: body.email,
        }
      })

      if(!manager){
        return false;
      }

      console.log("manager goin well")
      console.log("passw")
      console.log("passw", manager.validatePassword(body.password))

      if(!manager.validatePassword(body.password)){
        console.log("pass", body.password, "no valid")
        return false;
      }

      console.log(`Manager ${manager.id} logged in`);

      const token = jwt.sign({ manager_id: manager.id }, process.env.JWT_SECRET)

      return{
        token,
        id:manager.id
      };
    } catch(err){
      throw new Error(err);
    }
  },
  autheticate: async (id) => {
    try{
      const manager = await Manager.findByPk(id);
      if(!manager) return false
      else return manager;
    } catch(err){
      console.log('auth_err', err);
      return false;
    }
  }

}