todoAppServices.factory('TasksService', function ($resource) {
  return $resource('http://localhost\\:3000/tasks');
});