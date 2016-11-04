angular.module('castgaming', ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    $stateProvider
    .state( 'login', {
      url: '/',
      controller: 'loginCtrl',
      templateUrl: './views/login/login.html'
      })
    .state( 'home', {
        url: '/home',
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
