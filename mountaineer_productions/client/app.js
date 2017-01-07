var myApp = angular.module('myApp', ['ng-route']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'ArtistsController',
    templateUrl: 'views/artists.html'
  })
  .when('/artists', {
    controller: 'ArtistsController',
    templateUrl: 'views/artists.html'
  })
  .when('/artists/details/:id', {
    controller: 'ArtistsController',
    templateUrl: 'views/artist_details.html'
  })
  .when('/artists/add', {
    controller: 'ArtistsController',
    templateUrl: 'views/add_artist.html'
  })
  .when('/artists/edit/:id', {
    controller: 'ArtistsController',
    templateUrl: 'views/add_artist.html'
  })
  .otherwise({
    redirectTo: '/'
  })
});