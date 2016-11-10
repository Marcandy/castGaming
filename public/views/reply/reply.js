angular.module('castgaming')
  .directive('reply', function(mainService,  $stateParams, $state) {

    return {
        restrict: 'E',
        templateUrl: './views/reply/reply.html',
        scope: {
          threadId: '=threadId',
          updateThread: '&'
        },
        controller: function($scope, mainService, $stateParams, $state) {
        // $scope.threadId = $stateParams.threadId;

        $scope.postReply = function(reply) {
            mainService.postReply(reply)
            .then(result => {
              console.log(result);
              $scope.reply = result.data;
              $state.reload();
              // $scope.updateThread();
            })
          }

        },

        link: function(scope, element, attrs){

          // mainService.getRepliesForThread($stateParams.threadId).then( thread => {
          //   console.log(thread);
          //   $scope.replies = thread.data.replies;
          // } );
        }
      }
    });
