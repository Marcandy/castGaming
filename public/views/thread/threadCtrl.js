angular.module('castgaming').controller('threadCtrl', function($scope, $stateParams, mainService) {
  console.log($scope.game);

  function listThreads() {
    mainService.getThreadsForGame($stateParams.gameId).then( game => {
      console.log(game);
      $scope.threads = game.data.threads;
    } );
  }
  listThreads();

  $scope.createThread = function(newThread) {
    mainService.postThread(newThread)
    .then(result => {
      console.log(result);
      $scope.newThread = result.data;
      listThreads();
    })
  }

});
