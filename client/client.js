angular.module('client', [])

.controller('ClientController', ($scope, Subs) => {
  $scope.questions = [];
  $scope.answers = [];
  $scope.reset = false;

  $scope.submit = (question, answer) => {
    if (question !== '' && question !== undefined && answer !== '' && answer !== undefined) {
      // $scope.questions.push(question);
      // $scope.answers.push(answer);

      $scope.QA = {
        question: $scope.question,
        answer: $scope.answer
      };

      Subs.sendQA($scope.QA)
      .then(data => {
        // $scope.questions = data.questions;
        // $scope.answers = data.answers;
        $scope.question = '';
        $scope.answer = '';
        $scope.reset = false;
      });
    }
  };

  $scope.results = () => {
    // $scope.questions = _.shuffle($scope.questions);
    // $scope.answers = _.shuffle($scope.answers);
    Subs.getResults()
    .then(data => {
      $scope.questions = data.questions;
      $scope.answers = data.answers;

      if ($scope.questions.length && $scope.answers.length) {
        $scope.reset = true;
      }
    });

  };

  $scope.reset = () => {
    Subs.newGame()
    .then(data => {
      $scope.questions = [];
      $scope.answers = [];
      $scope.reset = false;
    });
  };

})

.factory('Subs', ($http) => {

  const sendQA = data => {
    return $http({
      method: 'POST',
      url: '/',
      data: data
    })
    .then(resp => resp);
  };

  const getResults = () => {
    return $http({
      method: 'GET',
      url: '/'
    })
    .then(resp => resp.data);
  };

  const newGame = () => {
    return $http({
      method: 'POST',
      url: '/'
      // clear questions and answers
    })
    .then(resp => resp);
  };

  return {
    sendQA: sendQA,
    getResults: getResults,
    newGame: newGame
  };

});
