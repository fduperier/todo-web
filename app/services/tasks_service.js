todoAppServices.factory('TasksService', function ($resource) {
  return $resource('http://localhost\\:3000/tasks/:task_id', { task_id: '@id' }, {
    update: { method: 'PUT' }
  });
});