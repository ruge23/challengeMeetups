const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/", express.static(path.join(__dirname, "../meetupsapp/public")));

router.get("/", async (req, res) => {
  try {
    res.render("index.html", {})
  } catch (error) {
    console.log(err);
    res.render("index.html");    
  }
})

module.exports = router;