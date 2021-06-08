const { Router } = require("express");
const router = Router();

const auth = require('./auth');
const weather = require("./weather");

router.use("/auth", auth);
router.use("/weather", weather);

router.use((err, req, res, next) => {
  if(err == 400) return res.status(400).send({
    msg: "Invalid information"
  })

  switch(err.name){
    case "SequelizeUniqueConstraintError":
      return res.status(500).send({
        msg:"Invalid data"
      })
    default:
      return res.status(500).send({
        msg:"Internal server error"
      })
  }
})

module.exports = router;