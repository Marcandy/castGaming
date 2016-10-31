angular.module('castgaming')
  .service('mainService', function($http) {

    // getting the five games as categories into the homeCtrl
    this.getGames = function() {
        return $http.get('http://localhost:5000/api/games');
    }

    // getting and creating creating thread
    this.getThread = function() {
        return $http.get('http://localhost:5000/api/thread');
    }

    this.postThread = function() {
        return $http.get('http://localhost:5000/api/thread', thread);
    }

    this.updateThread = function() {
        return $http({
          method: 'PUT',
          url: 'http://localhost:5000/api/thread' + threadId,
          data: thread
        })
    }


  })
