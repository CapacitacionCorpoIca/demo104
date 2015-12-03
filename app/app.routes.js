/*
Aqui van  a estar las rutas de mi aplicacion
*/
(function() {
  'use strict';
   angular
    .module('appCorpoIca')
    .config(routeConfig);

   function routeConfig( $stateProvider, $urlRouterProvider ){

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      //La ruta general
      .state('login', {
        url: '/login',
        templateUrl: 'app/users/login.html',
        controller: 'LoginController as login'
      })

      .state('home', {
        url: '/home',
        templateUrl: 'app/users/home.html',
        controller: 'HomeController as home'
      })

      .state('todos', {
        url: '/todos',
        templateUrl: 'app/todo/todo-list.html',
        controller: 'TodoListController as list',
        cache: false
      })

      .state('create', {
        url: '/createTodo',
        templateUrl: 'app/todo/create-todo.html',
        controller: 'CreateTodoController as create'
      })

      .state('update', {
        url: '/updateTodo/:id',
        templateUrl: 'app/todo/update-todo.html',
        controller: 'UpdateTodoController as update'
      })

   }
})();