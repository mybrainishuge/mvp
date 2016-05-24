const express = require('express');
const app = express();

require('./routes.js')(app, express);

app.use(express.static(__dirname + '/../client'));

app.listen(3000);
module.exports = app;
