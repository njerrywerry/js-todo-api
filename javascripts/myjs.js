angular.module('myApp', ['ngRoute'])

// Services
.factory('Todos', function() {
  return [
    { name: 'Do Dishes', completed: false, note: 'add notes...' },
    { name: 'Do Laundry', completed: false, note: 'add notes...' },
    { name: 'Learn Angular', completed: true, note: 'add notes...' },
    { name: 'Write Notes', completed: false, note: 'add notes...' },
    { name: 'Do Assignments', completed: false, note: 'add notes...' },
    { name: 'Be awesome!', completed: true, note: 'add notes...' },
  ];
})

// Controllers
.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
  $scope.todos = Todos;
}])

.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
  $scope.todo = Todos[$routeParams.id];
}])

// Routes
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/todos.html',
    controller: 'TodoController'
  })

  .when('/:id', {
    templateUrl: '/todoDetails.html',
    controller: 'TodoDetailCtrl'
  });
}]);
