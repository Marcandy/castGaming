angular.module('castgaming')
.controller('jumboCtrl', function($scope, mainService, $stateParams, $sce) {

  $scope.listGames = function() {
    mainService.getGames().then( results => {
      results.data.forEach( function( val, idx, arr ) {
        val.vidUrl = $sce.trustAsResourceUrl( val.vidUrl );
      } );
      $scope.games = results.data;

    })
  }

  $scope.listGames();

  $scope.chatToggle = false;

})
