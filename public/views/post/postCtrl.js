angular.module('castgaming')
.controller('postCtrl', function($scope, mainService, $stateParams) {

  // $scope.listThreads = function () {
  //   mainService.getThread().then( results => {
  //     console.log(results);
  //     $scope.threads = results.data;
  //   } );
  // }
  //   $scope.listThreads();

  $scope.threadId = $stateParams.threadId;

  $scope.updateThread = function() {
    mainService.getRepliesForThread($scope.threadId).then( thread => {
      console.log(thread);
      $scope.replies = thread.data.replies;
      $scope.thread = thread.data;
    } );
  }

  $scope.updateThread();
})
