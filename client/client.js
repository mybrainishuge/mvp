angular.module('client', [])
.controller('ClientController', ['$scope', function($scope) {
  $scope.questions = [];
  $scope.answers = [];
  $scope.end = false;

  $scope.submit = function(question, answer) {
    if (question === undefined || answer === undefined) {
      return;
    }
    console.log('inside submit');
    $scope.questions.push(question);
    $scope.answers.push(answer);
    console.log($scope.questions);
    console.log($scope.answers);
    $scope.question = '';
    $scope.answer = '';
    $scope.end = false;
  };

  $scope.returnResults = function() {
    console.log('inside returnResults');
    $scope.questions = _.shuffle($scope.questions);
    $scope.answers = _.shuffle($scope.answers);
    console.log($scope.questions);
    console.log($scope.answers);
    $scope.end = true;
  };

}]);
