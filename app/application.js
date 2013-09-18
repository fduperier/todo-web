'use strict';

var todoApp = angular.module('todoApp', ['todoApp.controllers', 'todoApp.services']);

todoApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/tasks', { templateUrl: 'app/views/tasks/index.html', controller: 'TasksController' });
  $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

todoApp.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

var todoAppContollers = angular.module('todoApp.controllers', []);
var todoAppServices = angular.module('todoApp.services', ['ngResource']);
