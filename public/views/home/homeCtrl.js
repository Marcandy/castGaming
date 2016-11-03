angular.module('castgaming').controller('homeCtrl', function($scope, mainService, $stateParams, $state) {

    $scope.listGames = function() {
      mainService.getGames().then( results => {
        console.log(results);
        $scope.games = results.data;
      })
    }
      $scope.listGames();

      $scope.showThread = function() {
          $state.go('gameThread');
      }
  })
