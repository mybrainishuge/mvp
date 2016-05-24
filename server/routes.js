var round = require('./round.js');

module.exports = function (app, express) {
  // need to fix these routes
  app.post('/', round.addQA);
  app.post('/', round.newGame);
  app.get('/', round.sendResults);
};
