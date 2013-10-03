'use strict';

var todoApp = angular.module('todoApp', ['todoApp.controllers', 'todoApp.services']);

todoApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/tasks',          { templateUrl: 'app/views/tasks/index.html' });
  $routeProvider.when('/tasks/new',      { templateUrl: 'app/views/tasks/new.html' });
  $routeProvider.when('/tasks/:id',      { templateUrl: 'app/views/tasks/show.html' });
  $routeProvider.when('/tasks/:id/edit', { templateUrl: 'app/views/tasks/edit.html' });

  $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

todoApp.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

var todoAppContollers = angular.module('todoApp.controllers', []);
var todoAppServices = angular.module('todoApp.services', ['ngResource']);
