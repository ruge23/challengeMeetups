const { Router } = require("express");
const router = Router();

const weatherController = require("../controllers/weather")

router.post("/bycity", weatherController.bycity);
router.post("/latlng", weatherController.latlng);


module.exports = router;