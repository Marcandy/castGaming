angular.module('castgaming')
  .directive('chat', function(mainService,  $stateParams, $state) {

    return {
        restrict: 'E',
        templateUrl: './views/chat/chat.html',
        scope: {

        },
        controller: function($scope, mainService, $stateParams, $state) {
          //TODO SOCKET THINGSSSSSZZ
          const socket = io.connect();

          $scope.showLogin = true;
          $scope.users     = [];
          $scope.messages  = [];


          $scope.newUser = username => {
              if(username){
                  $scope.showLogin = !$scope.showLogin;
                  //TODO
                  socket.emit("new user", username);
              }
          }

          $scope.sendMessage = message => {
              if(message){
                  //TODO
                  socket.emit("send message", message);
              }
          }

          socket.on("update users", data => {
            $scope.users = data;
            $scope.$apply();
          });

          socket.on("get message", data => {
            $scope.messages.push(data);
            $scope.$apply();
          });

          
        },

        link: function(scope, element, attrs){

        }
      }
    });
