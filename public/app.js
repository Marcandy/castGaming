angular.module('castgaming', ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    $stateProvider
      .state( 'home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: './views/home/home.html'
      })
      .state('gameThread', {
        url: '/threads/:gameId',
        controller: 'gameThreadCtrl',
        templateUrl: './views/gameThread/gameThread.html'
      })
      .state('threadReplies', {
        url: '/threadReplies/:threadId',
        controller: 'threadRepliesCtrl',
        templateUrl: './views/threadReplies/threadReplies.html'
      })
  })
