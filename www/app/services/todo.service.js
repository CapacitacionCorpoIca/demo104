/*
Servicio de usuarios
*/
(function() {
  'use strict';
  angular
    .module('appCorpoIca')
    .factory('todoService', todoService);

    todoService.$inject = [
      '$cordovaSQLite',
      '$q'
    ];

    function todoService( $cordovaSQLite, $q ){

      //var db = $cordovaSQLite.openDB({ name: "my.db" });
      function deleteTable(){
        var sql = "DROP TABLE IF EXISTS todo";
        $cordovaSQLite.execute(db, sql)
          .then(function(res) {
            console.log("insertId: " + res);
          }, function (err) {
            console.error(err);
          });
      }

      function createTable(){
        var sql = "CREATE TABLE IF NOT EXISTS todo (id integer PRIMARY KEY AUTOINCREMENT, name text, date text, done integer)";
        $cordovaSQLite.execute(db, sql)
          .then(function(res) {
            console.log("insertId: " + res);
          }, function (err) {
            console.error(err);
          });
      }
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

      //deleteTable();
      createTable();

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
        var query = "INSERT INTO todo (id, name, date, done) VALUES (?,?,?,?)";
        var attrs = [null, newTodo.name, newTodo.date.getTime(), 0]
        $cordovaSQLite
        .execute(db, query, attrs)
          .then(function(res) {
            console.log("insertId: " + res.insertId);
          }, function (err) {
            console.error(err);
          });
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
       var query = "SELECT * FROM todo";
        return $cordovaSQLite.execute(db, query)
          .then( complete )
          .catch( failed );

          function complete( result ){
            return $q.when( preparateData( result.rows ) );
          }

          function preparateData( data ){
            var newData = [];
            for (var i = 0; i < data.length; i++) {
              newData.push({
                id: data.item(i).id,
                name: data.item(i).name,
                date: new Date(parseInt(data.item(i).date)),
                done: data.item(i).done == 1 ? true : false
              });
            };
            return newData;
          }

          function failed( error ){
            return $q.reject( error );
          }
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