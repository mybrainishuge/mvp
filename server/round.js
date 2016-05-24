// write methods to manipulate data
// these will be called from routes depending on the incoming ajax call
const _ = require('underscore');

const QA = {
  questions: [],
  answers: []
};

let reset = false;

module.exports = {

  importQA: (req, res, next) => {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    console.log('inside importQA:', data);
    // QA.questions.push(req.body.question);
    // QA.answers.push(req.body.answer);
    next();
  },

  newGame: (req, res, next) => {
    console.log('inside newGame');
    QA.questions = [];
    QA.answers = [];
    next();
  },

  sendResults: (req, res, next) => {
    // console.log('inside sendResults:', data);

    // QA.questions = _.shuffle(QA.questions);
    // QA.answers = _.shuffle(QA.answers);

    next(QA);
  }

};
