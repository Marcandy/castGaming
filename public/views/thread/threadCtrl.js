angular.module('castgaming').controller('threadCtrl', function($scope, mainService) {

  $scope.listThreads = function () {
    mainService.getThread().then( results => {
      console.log(results);
      $scope.threads = results.data;
    } );
  }
    $scope.listThreads();

  $scope.createThread = function(newThread) {
    mainService.postThread(newThread)
    .then(result => {
      console.log(result);
      $scope.newThread = result.data;
      $scope.listThreads();
    })
  }

});
