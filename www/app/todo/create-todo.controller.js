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
      '$cordovaDatePicker',
      '$cordovaFileTransfer',
      '$timeout'
    ];

    function CreateTodoController( todoService, $state, $cordovaDatePicker, $cordovaFileTransfer, $timeout ){
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

      function downloadFile(){
        var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
        var targetPath = cordova.file.documentsDirectory + "testImage.png";
        $cordovaFileTransfer.download(url, targetPath, {}, true)
        .then(complete, failed, progress);

        function complete(){
          alert('yEAH!!!');
        }

        function failed(error){
          alert('!yEAH');
          console.log(error);
        }

        function progress( progress ){
          $timeout(function () {
            console.log( (progress.loaded / progress.total) * 100 );
          })
        }

    }
})();