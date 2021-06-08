const managerController = require("./manager");

module.exports = {
  login: async (req, res, next) => {
    if(!req.body || req.body.email || req.body.password){
      return res.status(401).send({
        msg: "Credenciales incorrectas"
      })
    }

    try {
      // const marketing = await marketingController.login(req.body);

      const manager = await managerController.login(req.body);

      console.log('auth', manager)

      if(manager){
        return res.send({
          ...manager,
          isManager:true,
        })
      }

      res.status(401).send({
        msg: "Credeciales incorrectas"
      })
    } catch (error) {
      next();
    }
  }
}