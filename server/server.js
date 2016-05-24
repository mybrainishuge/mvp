const express = require('express');
const app = express();
const round = require('./round.js');

// require('./routes.js')(app, express);

app.use(express.static(__dirname + '/../client'));

app.post('/send', round.importQA);
app.post('/new', round.newGame);
app.get('/get', round.sendResults);

app.listen(3000);
module.exports = app;
