var myApp = angular.module('myApp');

myApp.controller('ArtistsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('Artists controller loaded');
    $scope.getArtists = function(){
      $http.get('/api/artists'.success(function(response{
        $scope.books = response;
      }));
      )};
  }
]);