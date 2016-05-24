var round = require('./round.js');

module.exports = function (app, express) {
  // need to fix these routes
  app.post('/send', round.importQA);
  app.post('/new', round.newGame);
  app.get('/get', round.sendResults);
};
