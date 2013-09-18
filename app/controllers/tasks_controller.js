todoAppContollers.controller('TasksController', function ($scope, $location, $routeParams, TasksService) {

  $scope.tasks = [];
  $scope.currentTask = {};
  $scope.updateTask = {};

  $scope.index = function() {
    TasksService.query(
      function (resource) {
        $scope.tasks = resource;
      },
      function (response) {
        console.log(response);
      }
    );
  };

  $scope.show = function() {
    TasksService.get({ task_id: $routeParams.id },
      function(resource) {
        $scope.currentTask = resource;
      },
      function(response) {
        console.log(response);
      }
    );
  };

  $scope.edit = function() {
    TasksService.get({ task_id: $routeParams.id },
      function(resource) {
        $scope.currentTask = resource;
        $scope.updateTask = { 'task': resource };
      },
      function(response) {
        console.log(response);
      }
    );
  };

  $scope.update = function(t_id, updateTask) {
    TasksService.update({ task_id: t_id }, updateTask,
      function(resource) {
        $location.path('/tasks/' + t_id);
      },
      function(response) {
        $location.path('/tasks/' + t_id + '/edit');
      }
    );
  };

  /**
   * GoTo Functions
   */
  $scope.goToIndex = function() {
    $location.path('/tasks');
  };

  $scope.goToShow = function(t_id) {
    $location.path('/tasks/' + t_id);
  };

  $scope.goToEdit = function(t_id) {
    $location.path('/tasks/' + t_id + '/edit');
  };
});