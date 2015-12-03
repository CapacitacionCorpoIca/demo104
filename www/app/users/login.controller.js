/*
Controlador se encarga del login
*/
(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('LoginController', LoginController);

    LoginController.$inject = [
      '$http',
      'userService',
      '$ionicLoading',
      '$ionicPopup',
      '$state',
      '$scope'
    ];

    function LoginController( $http, userService, $ionicLoading, $ionicPopup, $state, $scope ){

      var vm = this;
      vm.user = {};
      vm.login = login;
      vm.forgot = forgot;

      ///////////

      function login(){
        $ionicLoading.show();
        userService.login(vm.user.nick, vm.user.password)
          .then( complete )
          .catch( failed );

          function complete( response ){
            $ionicLoading.hide();
            var token = btoa( vm.user.nick + ':' +  vm.user.password);
            localStorage.setItem("token", token);
            $state.go('home');
          }

          function failed( error ){
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'Ocurrio un error',
              template: error.data.message
            });
          }
      }

      function forgot(){
        $ionicPopup.show({
          template: '<input type="email" ng-model="data.email">',
          title: 'Su correo',
          subTitle: 'Please use normal things',
          scope: $scope,
          buttons: [
            {text: 'NO'},
            {
              text: 'Si',
              onTap: function(){
                console.log($scope.data);
              }
            }
          ]
        });
      }
    }
})();