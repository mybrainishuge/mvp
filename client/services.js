angular.module('client.services', [])

.factory('Submissions', ($http) => {

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

  return {
    sendQA: sendQA,
    getResults: getResults
  };

});
