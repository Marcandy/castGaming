angular.module('castgaming', ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    $stateProvider
      .state( 'home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: './views/home/home.html'
      })
      .state('thread', {
        url: '/threads/:gameId',
        controller: 'threadCtrl',
        templateUrl: './views/thread/thread.html'
      })
      .state('post', {
        url: '/post/:threadId',
        controller: 'postCtrl',
        templateUrl: './views/post/post.html'
      })
  })
