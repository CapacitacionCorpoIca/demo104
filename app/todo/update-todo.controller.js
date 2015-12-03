/*
Controlador para la lista de tareas
*/
(function() {
  'use strict';

  angular
    .module('app.todo')
    .controller('UpdateTodoController', UpdateTodoController);

    UpdateTodoController.$inject = [
    	'todoService',
    	'$state',
    	'$stateParams'
    ];

    function UpdateTodoController( todoService, $state, $stateParams ){
      var vm = this;
      //Atributes
      vm.newTodo = {};
      //Accions
      vm.update = update;
      vm.remove = remove;

      activate();

      function activate(){
        getTodo();
      }

      function update(){
      	todoService.update( vm.newTodo );
      	vm.newTodo = {};
      	$state.go('todos');
      }

      function remove(){
        todoService.remove( vm.newTodo.id );
        vm.newTodo = {};
        $state.go('todos');
      }

      function getTodo(){
        vm.newTodo = todoService.get( $stateParams.id );
      }

    }
})();