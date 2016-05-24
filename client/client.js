angular.module('client', [])

.controller('ClientController', ($scope, Subs) => {
  $scope.questions = [];
  $scope.answers = [];
  $scope.end = false;

  $scope.submit = (question, answer) => {
    if (question !== '' && question !== undefined && answer !== '' && answer !== undefined) {

      $scope.QA = {
        question: $scope.question,
        answer: $scope.answer
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
      $scope.end = true;
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
    console.log('inside sendQA:', data);
    return $http({
      method: 'POST',
      url: '/send',
      data: data
    })
    .then(resp => {
      console.log('sendQA resp:', resp);
    });
  };

  const getResults = () => {
    console.log('inside getResults');
    return $http({
      method: 'GET',
      url: '/get'
    })
    .then(resp => {
      console.log('getResults resp:', resp);
    });
  };

  const newGame = () => {
    console.log('inside newGame');
    return $http({
      method: 'POST',
      url: '/new'
      // clear questions and answers
    })
    .then(resp => {
      console.log('newGame resp:', resp);
    });
  };

  return {
    sendQA: sendQA,
    getResults: getResults,
    newGame: newGame
  };

});
