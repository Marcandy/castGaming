angular.module('castgaming', ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    $stateProvider
      .state( 'home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'

      })
  })
