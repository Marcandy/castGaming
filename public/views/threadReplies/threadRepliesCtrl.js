angular.module('castgaming')
.controller('threadRepliesCtrl', function($scope, mainService, $stateParams) {

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

      $scope.replies = thread.data.replies;
      $scope.thread = thread.data;
    } );
  }

  $scope.updateThread();

  $scope.getUser = function() {
    mainService.getUser().then( result => {

        $scope.user = result.data;
      })
  }

  $scope.getUser();
  $scope.toggle = false;
})
