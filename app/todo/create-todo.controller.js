/*
Controlador para la lista de tareas
*/
(function() {
  'use strict';

  angular
    .module('app.todo')
    .controller('CreateTodoController', CreateTodoController);

    CreateTodoController.$inject = [
    	'todoService',
    	'$state'
    ];

    function CreateTodoController( todoService, $state ){
      var vm = this;
      //Atributes
      vm.newTodo = {};
      //Accions
      vm.create = create;

      function create(){
      	todoService.create( vm.newTodo );
      	vm.newTodo = {};
      	$state.go('todos');
      }

    }
})();