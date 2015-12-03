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
    	'$state',
      '$cordovaDatePicker'
    ];

    function CreateTodoController( todoService, $state, $cordovaDatePicker ){
      var vm = this;
      //Atributes
      vm.newTodo = {};
      //Accions
      vm.create = create;
      vm.showDate = showDate;

      function create(){
      	todoService.create( vm.newTodo );
      	vm.newTodo = {};
      	$state.go('todos');
      }

      function showDate(){
        var options = {
          date: new Date(),
          mode: 'date', // or 'time'
          maxDate: moment().subtract(18, 'years')._d.getTime(),
          doneButtonLabel: 'Aceptar',
          doneButtonColor: '#F2F3F4',
          cancelButtonLabel: 'Cancelar',
          cancelButtonColor: '#000000'
        };

        $cordovaDatePicker.show(options)
        .then(function(date){
          alert(date);
        });
      }

    }
})();