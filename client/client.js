angular.module('client', ['client.services'])

.controller('ClientController', ['$scope', ($scope) => {
  $scope.questions = [];
  $scope.answers = [];
  $scope.end = false;

  $scope.submit = (question, answer) => {
    if (question !== '' && question !== undefined && answer !== '' && answer !== undefined) {
      $scope.questions.push(question);
      $scope.answers.push(answer);
      $scope.question = '';
      $scope.answer = '';
      $scope.end = false;
    }
  };

  $scope.results = () => {
    $scope.questions = _.shuffle($scope.questions);
    $scope.answers = _.shuffle($scope.answers);
    if ($scope.questions.length && $scope.answers.length) {
      $scope.end = true;
    }
  };

  $scope.reset = () => {
    $scope.questions = [];
    $scope.answers = [];
    $scope.end = false;
  };

}]);
