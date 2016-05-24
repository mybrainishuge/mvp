const _ = require('underscore');

const QA = {
  questions: [],
  answers: []
};

let shuffled = false;

module.exports = {

  importQA: (req, res, next) => {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      data = JSON.parse(data);
      QA.questions.push(data.question);
      QA.answers.push(data.answer);
      res.sendStatus(201);
      next();
    });
  },


  newGame: (req, res, next) => {
    QA.questions = [];
    QA.answers = [];
    shuffled = false;
    res.sendStatus(201);
    next();
  },


  sendResults: (req, res, next) => {
    console.log('shuffled:', shuffled);
    if (!shuffled) {
      QA.questions = _.shuffle(QA.questions);
      QA.answers = _.shuffle(QA.answers);
      shuffled = true;
    }
    res.status(201).send(JSON.stringify(QA));
    next();
  }

};
