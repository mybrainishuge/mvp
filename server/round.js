// write methods to manipulate data
// these will be called from routes depending on the incoming ajax call
const QA = {
  questions: [],
  answers: []
};

let reset = false;

module.exports = {

  addQA: (req, res, next) => {
    QA.questions.push(req.body.questions);
    QA.answers.push(req.body.answer);
    next();
  },

  newGame: (req, res, next) => {
    QA.questions = [];
    QA.answers = [];
    next();
  },

  sendResults: (req, res, next) => {
    QA.questions = _.shuffle(QA.questions);
    QA.answers = _.shuffle(QA.answers);

    next(QA);
  }

};
