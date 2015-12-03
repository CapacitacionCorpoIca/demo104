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
      })

   }
})();