angular.module('castgaming').controller('postCtrl', function($scope, mainService, $stateParams) {

  // $scope.listThreads = function () {
  //   mainService.getThread().then( results => {
  //     console.log(results);
  //     $scope.threads = results.data;
  //   } );
  // }
  //   $scope.listThreads();

  mainService.getRepliesForThread($stateParams.threadId).then( thread => {
    console.log(thread);
    $scope.replies = thread.data.replies;
    $scope.thread = thread.data;
  } );

})
