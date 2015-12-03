/*
Servicio de usuarios
*/
(function() {
  'use strict';
  angular
    .module('appCorpoIca')
    .factory('todoService', todoService);

    todoService.$inject = [
    ];

    function todoService( ){

      var data = [
        {
          id: 1,
          name: 'Estudiar Angular 2',
          text: 'bla bla',
          date: new Date(),
          done: false
        },
        {
          id: 2,
          name: 'Estudiar Ionic 2',
          text: 'bla bla',
          date: new Date(),
          done: true
        },
        {
          id: 3,
          name: 'Estudiar WebComponents',
          text: 'bla bla',
          date: new Date(),
          done: true
        },
      ];

      var service = {
        create: create,
        update: update,
        remove: remove,
        getAll: getAll,
        get: get,
        filter: filter
      };
      return service;

      function create( newTodo ){
       /*Insert code*/
       newTodo.id = data[data.length - 1].id + 1;
       newTodo.done = false;
       data.push( newTodo );
      }

      function update( data ){
       /*Insert code*/
        var index = data.id - 1;
        data[index] = data;
      }

      function remove( id ){
       /*Insert code*/
       data.splice( id - 1 ,1);
      }

      function getAll(){
       /*Insert code*/
       return data;
      }

      function get( id ){
        /*Insert code*/
        for (var i = 0; i < data.length; i++) {
          if(data[i].id == id){
            return data[i];
          }
        };
        return {};
      }

      function filter( query ){
        /*Insert code*/
      }
      
    }

})();