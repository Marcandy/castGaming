angular.module('castgaming')
  .service('mainService', function($http) {

    // getting the five games as categories into the homeCtrl
    this.getGames = function() {
        return $http.get('http://localhost:5000/api/games');
    }

    // getting and creating creating thread
    this.getThreadsForGame = function(gameId) {
        return $http.get('http://localhost:5000/api/games/' + gameId);
    }

    // ----------------------Threads------------------------

    this.postThread = function(thread) {
        return $http.post('http://localhost:5000/api/thread', thread);
    }

    this.updateThread = function() {
        return $http({
          method: 'PUT',
          url: 'http://localhost:5000/api/thread' + threadId,
          data: thread
        })
    }

    this.getRepliesForThread = function(threadId) {
        return $http.get('http://localhost:5000/api/thread/' + threadId);
    }
    //-----------------------------------------------------


  })
