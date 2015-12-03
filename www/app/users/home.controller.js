/*
Controlador se encarga del login
*/
(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('HomeController', HomeController);

    HomeController.$inject = [
      '$state'
    ];

    function HomeController(  $state ){

      var vm = this;
      vm.checkUser = checkUser;

      checkUser();
      ///////////

      function checkUser(){
        if(!localStorage.getItem("token")){
        	$state.go('login')
        }
      }
    }
})();