angular.module('castgaming')
  .directive('chat', function(mainService,  $stateParams, $state) {

    return {
        restrict: 'E',
        templateUrl: './views/chat/chat.html',
        scope: {

        },
        controller: function($scope, mainService, $stateParams, $state) {
        // $scope.threadId = $stateParams.threadId;
        // $scope.postReply = function(reply) {
        //     mainService.postReply(reply)
        //     .then(result => {
        //       console.log(result);
        //       $scope.reply = result.data;
        //       $state.reload();
        //       // $scope.updateThread();
        //     })
        //   }

        },

        link: function(scope, element, attrs){

        }
      }
    });
