/*
Controlador para la lista de tareas
*/
(function() {
  'use strict';

  angular
    .module('app.todo')
    .controller('TodoListController', TodoListController);

    TodoListController.$inject = [
    	'todoService'
    ];

    function TodoListController( todoService ){
      var vm = this;
      //Atributes
      vm.todos = [];
      //Accions

      activate();

      function activate(){
        getTodos();
      }

      function getTodos(){
        todoService.getAll()
        .then( complete )
        .catch( failed );

        function complete( todos ){
          vm.todos = todos;
        }

        function failed( error ){
          console.log( error );
        }
      }

    }
})();