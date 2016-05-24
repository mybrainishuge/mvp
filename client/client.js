angular.module('client', [])
.controller('ClientController', ['$scope', function($scope) {
  $scope.questions = [];
  $scope.answers = [];
  $scope.end = false;

  $scope.submit = function(question, answer) {
    if (question !== '' && question !== undefined && answer !== '' && answer !== undefined) {
      $scope.questions.push(question);
      $scope.answers.push(answer);
      $scope.question = '';
      $scope.answer = '';
      $scope.end = false;
    }
  };

  $scope.returnResults = function() {
    $scope.questions = _.shuffle($scope.questions);
    $scope.answers = _.shuffle($scope.answers);
    if ($scope.questions.length && $scope.answers.length) {
      $scope.end = true;
    }
    console.log('inside results:', $scope.end);
  };

  $scope.reset = function() {
    $scope.questions = [];
    $scope.answers = [];
    $scope.end = false;
  };

}]);
