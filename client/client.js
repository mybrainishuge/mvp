angular.module('client', [])

.controller('ClientController', ($scope, Subs) => {
  $scope.questions = [];
  $scope.answers = [];
  $scope.end = false;

  $scope.submit = (question, answer) => {
    if (question !== '' && question !== undefined && answer !== '' && answer !== undefined) {
      $scope.QA = {
        question: filterXSS($scope.question),
        answer: filterXSS($scope.answer)
      };

      Subs.sendQA($scope.QA)
      .then(data => {
        $scope.question = '';
        $scope.answer = '';
        $scope.end = false;
      });
    }
  };

  $scope.results = () => {
    Subs.getResults()
    .then(data => {
      $scope.questions = data.questions;
      $scope.answers = data.answers;

      if ($scope.questions.length && $scope.answers.length) {
        $scope.end = true;
      }
    });

  };

  $scope.reset = () => {
    Subs.newGame()
    .then(data => {
      $scope.questions = [];
      $scope.answers = [];
      $scope.end = false;
    });
  };

})

.factory('Subs', ($http) => {

  const sendQA = data => {
    return $http({
      method: 'POST',
      url: '/send',
      data: JSON.stringify(data)
    })
    .then(resp => resp);
  };

  const getResults = () => {
    return $http({
      method: 'GET',
      url: '/get'
    })
    .then(resp => resp.data);
  };

  const newGame = () => {
    return $http({
      method: 'POST',
      url: '/new'
    })
    .then(resp => resp);
  };

  return {
    sendQA: sendQA,
    getResults: getResults,
    newGame: newGame
  };

});
