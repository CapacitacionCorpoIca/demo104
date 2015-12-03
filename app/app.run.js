/*
Se encarga de correr la app
*/
(function() {
  'use strict';

  angular
    .module('appCorpoIca')
    .run(run);

  function run( $ionicPlatform ){
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      if(window.cordova){
        db = $cordovaSQLite.openDB({ name: "my.db", bgType: 0 });
      }else{
        db = window.openDatabase( "my.db", '1.0', "my", 1024*1024*100);
      }
    });
  }
})();