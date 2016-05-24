const express = require('express');
const app = express();
const round = require('./round.js');
const session = require('express-session');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../client'));

app.post('/send', round.importQA);
app.post('/new', round.newGame);
app.get('/get', round.sendResults);

app.listen(app.get('port'));
module.exports = app;
