const request = require("request");
const API_KEY = process.env.WEATHER_API_KEY;
const API_BASE_URL = process.env.WEATHER_API_BASE_URL;

module.exports = {
  bycity: async (req, res, next) => {
    if(!req.body){
      return res.status(401).send({
        msg: "Faltan datos"
      })
    }

    try {
      let city = req.body.city;
      let url = `${API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=es&units=metric`
      
      request(url, (err, response, body) => {
        let weather = JSON.parse(body);
        res.status(200).send({ weather: weather, error: null });
      })
    } catch (error) {
      next();
    }
  },
  latlng: async (req, res, next) => {
    if(!req.body){
      return res.status(401).send({
        msg: "Faltan datos"
      })
    }

    try {
      let lat = req.body.lat;
      let lng = req.body.lng;
      let url = `${API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=es&units=metric`
      request(url, (err, response, body) => {
        let weather = JSON.parse(body);
        res.status(200).send({ weather: weather, error: null });
      })
    } catch (error) {
      next();
    }
  },
}