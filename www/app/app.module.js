/*
Gestionar los modulos de nuestra aplicacion
*/
var db;
(function() {
  'use strict';
  angular
    .module('appCorpoIca', [
      //Core
      'ionic',
      'ngCordova',
      //Modules
      'app.users',
      'app.todo'
    ]);
})();