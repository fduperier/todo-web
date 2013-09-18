todoAppContollers.controller('TasksController', function ($scope, TasksService) {

  $scope.tasks = [];

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

});