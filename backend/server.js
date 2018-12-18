const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


const port = process.env.PORT || 4243;

models.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}...`));
});