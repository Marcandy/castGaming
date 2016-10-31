angular.module('castgaming').controller('homeCtrl', function($scope, mainService) {

    $scope.listGames = function() {
      mainService.getGames().then( results => {
        console.log(results);
        $scope.games = results.data;
      })
    }
      $scope.listGames();
  })
