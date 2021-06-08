const express = require("express");
const path = require("path");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require("cors");
app.use(cors());

// App routes

const routes = require("./routes");
app.use("/app/", routes);

// Api Routes
const api = require("./api/routes");
app.use("/api",api);


// app.use("/app/", express.static(__dirname + "/meetupsapp/build/index.html"));

// app.get("/app/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/meetupsapp/build"))
// });



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`
            ...
            | |
            | |
            | |
            | |
            | |
         __.' '
        |___ .'

  Listening on port ${port}
  `)
});

const db = require("./api/db");