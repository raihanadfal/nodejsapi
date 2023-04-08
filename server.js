const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./router');
routes(app)

app.listen(3000, () => {
  console.log(`Server started on port`)
});